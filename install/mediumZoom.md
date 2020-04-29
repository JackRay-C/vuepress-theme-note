---
title: Medium Zoom
---

# Medium Zoom

## 安装

```bash
yarn add -D @vuepress/plugin-medium-zoom
```

## 使用
 
```bash
module.export = {
    plugins: {
        '@vuepress/medium-zoom': {
            selector: ".theme-note-content img",
            options: {
                margin: 0,
                background: 'rgba(0,0,0,.4)'
            }
        }
    },
}
```


## 选项

### selector

类型： `string`  
默认值： `.theme-note-content > img`  

注意的是，`.theme-note-content` 是本主题添加给`<Content />`组件的class name。


### options

类型： `object`  
默认值:  `undefined`  

更多medium-zoom的 [选项](https://github.com/francoischalifour/medium-zoom#options) 