# 轱辘  --  一个 Vue UI 组件
[![Build Status](https://travis-ci.org/Dec-Lin/gulu-demo.svg?branch=master)](https://travis-ci.org/Dec-Lin/gulu-demo)

##介绍

学习 Vue 过程中做的一个 UI 框架，希望可以做好。

##开始使用

1、添加 CSS 样式
    使用此框架前，请在 CSS 中开启 border-box
    ```
        *,*::before,*::after{box-sizing: border-box}
    ```
    IE 8 及以上浏览器都支持此样式。
    
    
    你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
    ```
        html {
            --font-size: 14px;
            --button-height: 32px;
            --button-bg: white;
            --border-radius: 4px;
            --border-color: #999;
            --color: #333;
            --border-color-hover: #666;
            --button-active-bg: #eee;
        }
    ```
    IE 15 及以上浏览器都支持此样式。
    
2、安装
    ```
        npm i --save Dec-test-1-1
    ```
3、引入 
    ```
      import { Button, ButtonGroup, Icon } from 'dec-test-1-1'
      import 'dec-test-1-1/dist/index.css'
    
      export default {
        name: 'app',
        components: {
          'g-button': Button,
          'g-icon': Icon
        }
      }
    ```
4、引入 svg symbols
    ```
    <script src="//at.alicdn.com/t/font_1941593_myn4hxi1gko.js"></script>
    ```
##文档

##提问

##变更记录

##联系方式

##贡献代码
