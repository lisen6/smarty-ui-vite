# 🔨 Smarty-UI是什么?

一个 Mini 版的组件库，基于 Vite 实践。
## Features

- ⚡️ Vue 3, Vite 2, pnpm, ESBuild - born with fastness
- 🦾 TypeScript, of course
- 🗂 File based routing
- ⚙️ Unit Testing with Vitest
- 😃 Eslint + Prittier
- 🎨 UnoCSS - the instant on-demand atomic CSS engine
- 🌍 I18n ready
- 🚘 CI/CD with GithubActions


## Install

```bash
npm i @lisen6/smarty-ui-vite
```

## Quick Start

```js
    import Vue from 'vue'
    import SmartyUI from '@lisen6/smarty-ui-vite'
    import "@lisen6/smarty-ui-vite/dist/smarty.css"

    const App = {
        template: `
            <SButton>主要按钮</SButton>
        `,
    };

    createApp(App).use(SmartyUI).mount('#app')
```

## Browser Support

Modern browsers and Internet Explorer 10+.



