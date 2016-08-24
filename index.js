// # Upyun storage module for Ghost blog

var path = require('path');
    fs  = require('fs-extra');
    Promise = require('bluebird');
    UPYUN = require('upyun');
    moment = require('moment');
	util = require('util');
	BaseStore = require('../../../core/server/storage/base');


function UpyunStore(config) {
	BaseStore.call(this);
	this.options = config || {};
}

util.inherits(UpyunStore, BaseStore);

// ### Save
// Saves the image to Upyun
// - image is the express image object
// - returns a promise which ultimately returns the full url to the uploaded image
UpyunStore.prototype.save = function(image) {
	var _this = this;

	var upyun = new UPYUN (this.options.bucket, this.options.operator, this.options.password, 'v0.api.upyun.com', {apiVersion: 'v2'});

	return new Promise (function (resolve, reject) {
		var remotePath = _this.getRemotePath(image);
		var remoteURL = _this.options.domain;
		upyun.putFile(remotePath, image.path, null, false, {}, function (err, result) {
			if (err || result.statusCode!=200) {
				reject('[' + result.data.code + '] ' + result.data.msg);
			} else {
				if (_this.options.imgVersion != undefined) {
					resolve(remoteURL + remotePath + _this.options.imgVersion);
				} else {
					resolve(remoteURL + remotePath);
				}
			}
		});
	});
};

// middleware for serving the files
UpyunStore.prototype.serve = function () {
	// a no-op, these are absolute URLs
	return function (req, res, next) {
		next();
	};
};

UpyunStore.prototype.exists = function () {
	// Server side will automatically replace the file.
	return;
};

UpyunStore.prototype.delete = function (target) {
	//For backup and security purposes there is no way to delete files
	//whatever on local or server side through Ghost, please do it manually.
	return;
};

UpyunStore.prototype.getRemotePath = function (image) {
	var prefix = moment().format(this.options.filePath || 'YYYY/MM/').replace(/^\//, '');

	return '/' + prefix + image.name;
};

module.exports = UpyunStore;
