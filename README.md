# Ghost Upyun Storage
将图片储存于又拍云。仅限于 Ghost 0.6.0 及以后版本使用。

目前版本：0.0.1

目前仅在 0.6.0 Stable 版本通过测试。

七牛的储存模块请移步：[Minwe/qn-store](https://github.com/Minwe/qn-store)

**!!注意!!：该版本不支持以模块方式启动，也无法将文件保存在本地，在以后的版本中会陆续添加**

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
    domain: 'http://bucket.b0.upaiyun.com', //空间绑定的域名，"必须带 http://" ，结尾不能有 "/"
    filePath: 'YYYY/MM/' //文件远端保存地址，默认为日期格式，由 moment 解析后填充，
                           您可以修改为 "[您的目录地址]"，开头不能加 "/"，结尾必须加 "/"
  }
}
```

##许可证
源代码：  
The MIT License (MIT)

Copyright (c) 2015 Klion Xu

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
upyun：  
The MIT License (MIT)

Copyright (c) 2014 Leigh Zhu

Permission is hereby granted, free of charge, to any person obtaining a copy  
of this software and associated documentation files (the "Software"), to deal  
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all  
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,  
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF  
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,  
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR  
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE  
OR OTHER DEALINGS IN THE SOFTWARE.
