---
title: 快速安装
---

# 安装

使用 `yarn` 安装 note 主题

```bash
yarn add  -D vuepress-theme-note
```

或者使用  `npm` 安装

```bash
npm install -D vuepress-theme-note
```


# 使用

打开 `.vuepress/config.js` 文件，在配置中添加theme的配置项。

```javascript
module.exports = {
  ...
  theme: 'vuepress-theme-note'
  ...
}
```

# 扩展配置

## Action Button

我将首页 action 的按钮进行了扩展，可以支持无限个action的按钮，但是建议一般不要超过4个。

打开文档根目录的`README.md` 文件，在Front Matter之间使用如下配置增加action button 的配置

```md
---
title: Vuepress-Theme-Note
home: true
logo: logo.png
heroImage: logo.png
heroText: Notes
tagline: 笔记不仅是知识的记录，更是成长的记录！

....

actions:
- text: 快速上手 →
  link: /install/
- text: 配置
  link: /config/

......

```