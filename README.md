---
title: Vuepress-Theme-Note
home: true
logo: logo.png
heroImage: logo.png
heroText: Notes
tagline: 笔记不仅是知识的记录，更是成长的记录！
actions:
- text: 快速上手 →
  link: /install/
- text: 配置
  link: /config/


features: 
- title: SCSS 预处理器
  details: 默认支持Stylus和Scss的样式，使用Sass的预处理器。
- title: Animated 动画支持
  details: 主题增加了对Animate 动画的支持，让交互更顺滑。
- title: 功能增强优化
  details: 新增多个action按钮，优化各种显示效果和动画，同时加载速度接近默认主题，专为写笔记诞生。

footer: MIT Licensed | Copyright © 2020-present JackRay-c
---


## 安装主题

使用 `yarn` 安装 note 主题

```bash
yarn add  -D vuepress-theme-note
```

或者使用  `npm` 安装

```bash
npm install -D vuepress-theme-note
```

## 使用主题

打开 `.vuepress/config.js` 文件，在配置中添加theme的配置项。

```javascript
module.exports = {
  ...
  theme: 'vuepress-theme-note'
  ...
}
```

## 效果预览

![预览](./03.png)