// # Upyun storage module for Ghost blog

var path = require('path');
var fs  = require('fs-extra');
var Promise = require('bluebird');
var UPYUN = require('upyun');
var moment = require('moment');

function UpyunStore(config) {
	this.options = config || {};
}

// ### Save
// Saves the image to Upyun
// - image is the express image object
// - returns a promise which ultimately returns the full url to the uploaded image
UpyunStore.prototype.save = function(image) {
	var _this = this;

	var upyun = new UPYUN (this.options.bucket, this.options.operator, this.options.password);

	return new Promise (function (resolve, reject) {
		var remotePath = _this.getRemotePath(image);
		var remoteURL = _this.options.domain;
		var contentType = _this.getContentType(image);
		fs.readFile(image.path, function(err, data) {
			upyun.uploadFile(remotePath, data, contentType, true, {mkdir: true}, function (err, result) {
				if (err || result.error) {
					reject('[' + result.error.code + '] ' + result.error.message);
				} else {
					resolve(remoteURL + remotePath + _this.options.imgVersion);
				}
			});
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

UpyunStore.prototype.getRemotePath = function (image) {
	var prefix = moment().format(this.options.filePath || 'YYYY/MM/').replace(/^\//, '');

	return '/' + prefix + image.name;
};

UpyunStore.prototype.getContentType = function (image) {
	var contentType = {
		'.jfif': 'image/jpeg',
		'.jpe': 'image/jpeg',
		'.jpg': 'image/jpeg',
		'.jpeg': 'image/jpeg',
		'.png': 'image/png',
		'.bmp': 'image/bmp',
		'.gif': 'image/gif',
		'.ico': 'image/x-icon'
	};
	var ext = path.extname(image.name).toLowerCase();

	return contentType[ext];
};

module.exports = UpyunStore;
