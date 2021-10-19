<!--
 * @Description:
 * @Date: 2020-08-17 22:43:23 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2021-10-19 19:50:42 +0800
 * @LastEditors : JackChou
-->

# Chrome 扩展学习记录

manifest.json:

```json
{
  "manifest_version": 2,
  // 扩展名字 会显示在图标傍边
  "name": "my-clock",
  "version": "0.0.1", // 版本号，三个圆点隔开的数字，每个数字在 0 --- 65535 之间，不以 0 开头，每次更新扩展 新的版本号必须高于之前的。会显示在 chrome://extensions/
  "description": "Chrome扩展", // 用户可以看到，好的描述可促使用户安装
  // 优雅的图标告知用户功能，具有辨识度，促使用户安装
  "icons": {
    "16": "/mages/109613.png",
    "48": "/mages/109613.png",
    "128": "images/alarm-clock-scalable-vector-graphics-icon-png-favpng-HGxKY3v7u1vtVJ3cS2HVb0yBc.jpg"
  },
  // 鼠标移到扩展图标上显示的标题
  "default_title": "我的时钟",
  // 用户单击图标时，显示的页面位置
  "default_popup": "popup.html",
  // 图标在工具栏中
  "browser_action": {
    "default_icon": {
      "19": "/mages/109613.png"
    }
  }
}
```

创建 `popup.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!-- NOTE 对扩展而言，很多 head 元素是无意义的，可不写 -->
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>我的第一个扩展</title> -->
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      div {
        box-sizing: border-box;
      }

      body {
        width: 200px;
        height: 100px;
        background-color: bisque;
      }
      div {
        line-height: 100px;
        font-size: 42px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div id="clock-div">我的第一个扩展</div>
    <!-- NOTE chrome 不允许内嵌JS和inline-script，要求引入外部脚本 -->
    <script src="./js/index.js"></script>
  </body>
</html>
```

> 对扩展而言，很多 head 元素是无意义的，可不写

> chrome 不允许内嵌 JS 和 inline-script，要求引入外部脚本

js:

```js
// FIXME 似乎没执行 为何？
console.log('我的第一个扩展')
// 这种弹窗体验极差，不要使用
alert('hello extension')
```

打开 `chrome://extensions/` --→ 打开 `开发者模式`，加载已解压的扩展，可把扩展加载到 chrome 中：

开发者面板的 chrome 扩展：

![开发者面板的扩展](https://raw.githubusercontent.com/jackchoumine/jack-picture/master/chrome-development/%E6%89%A9%E5%B1%95%E4%BF%A1%E6%81%AF.png)

工具栏的扩展：

![工具栏的扩展信息](https://raw.githubusercontent.com/jackchoumine/jack-picture/master/chrome-development/工具栏的扩展.png)
