# 快速上手
## 安装
### 使用 npm 或 yarn 安装
推荐使用 npm 或 yarn 的方式安装，它能更好地和 [webpack](https://webpack.js.org) 打包工具配合使用。
```shell
npm install @semon/semon-ui --save
```
```shell
yarn add @semon/semon-ui
```
### 浏览器引入
目前可以通过 [unpkg.com/@semon/semon-ui](//unpkg.com/@semon/semon-ui) 获取到最新版本的资源，在浏览器中使用`script`和`link`标签直接引入文件，并使用全局变量`semon`。
```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/@semon/semon-ui/dist/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/@semon/semon-ui/dist/index.js"></script>
```

## 开始使用
### 完整引入
```jsx
import { Button } from '@semon/semon-ui'
ReactDOM.render(<Button />, container)
```
引入css样式：
```js
import '@semon/semon-ui/dist/index.css'
```
### 按需引入
```jsx
import Button from '@semon/semon-ui/dist/Button'
import '@semon/semon-ui/dist/Button.css'
```
> 也可以通过 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 实现自动按需引入