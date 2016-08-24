# Ghost Upyun Storage
将图片储存于又拍云。仅限于 Ghost 0.6.0 及以后版本使用。

目前版本：1.1.0

已通过 0.10.0 测试

七牛的储存模块请移步：[Minwe/qn-store](https://github.com/Minwe/qn-store)

**1.1.0 以前的版本在 0.10.0 将无法使用，请您及时升级到新版**
**1.1.0 不支持直接通过模块启动，请您修改 index.js 中的 BaseStore 到对应的地址**
**1.0.1 有 BUG，不影响正常使用，但不推荐使用**

## 安装
* 在 `content` 文件夹中创建一个名为 `storage` 的文件夹
* 将本仓库克隆至 `storage` 文件夹下

   ```
   cd path/to/your/ghost/content/storage
   git clone https://github.com/sanddudu/upyun-ghost-store.git
   ```

  或者 [下载 zip 包](https://github.com/sanddudu/upyun-ghost-store/archive/master.zip) 后解压至 storage 文件夹下（请将解压出的文件夹名改名为 `upyun-ghost-store`）
* 安装依赖包

   ```
   cd upyun-ghost-store
   npm install
   ```

## 配置
在 `upyun-ghost-store` 文件夹下自带已经修改好的 `config.example.js`（无备注），您只需要复制到主目录后修改相应内容，并改名为 `config.js` ，您也可以自行根据以下默认配置自行添加（请不要忘记根据实际情况在末尾添加逗号）。

```
storage: {
  active: 'upyun-ghost-store',
  'upyun-ghost-store': {
    bucket: 'my-bucket', //bucket 名称
    operator: 'somebody', //操作员用户名
    password: 'secret', //操作员密码
    domain: 'http://bucket.b0.upaiyun.com', //空间绑定的域名，必须带 "http(s)://" ，结尾不能有 "/"
    filePath: 'YYYY/MM/', //文件远端保存地址，默认为日期格式，由 moment 解析后填充，
                            您可以修改为 "[您的目录地址]"，开头不能加 "/"，结尾必须加 "/"
                            具体格式参见： [http://momentjs.com/](http://momentjs.com/)
    imgVersion: '' // 自定义版本，需带上分隔符（如 _large ）。使用原图则留空或删除该选项
  }
}
```

##许可证
源代码：  
The MIT License (MIT)

Copyright (c) 2015-2016 Klion Xu

Permission is hereby granted, free of charge, to any person obtaining a copy  
of this software and associated documentation files (the "Software"), to deal  
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all  
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  
SOFTWARE.

依赖包：  
moment:
Copyright (c) 2011-2016 Tim Wood, Iskren Chernev, Moment.js contributors

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

bluebird:
The MIT License (MIT)

Copyright (c) 2013-2015 Petka Antonov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

fs-extra:
(The MIT License)

Copyright (c) 2011-2016 JP Richardson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files
(the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify,
 merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

upyun:
MIT License