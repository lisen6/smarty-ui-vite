import { createApp } from "vue/dist/vue.esm-browser";
import SmartyUI from "./entry";

createApp({
  template: `
  <div>
    <SButton color="blue">蓝色按钮</SButton>
    <SButton color="green">绿色按钮</SButton>
    <SButton color="gray">灰色按钮</SButton>
    <SButton color="yellow">黄色按钮</SButton>
    <SButton color="red">红色按钮</SButton>
  </div>
  <div>
    <SButton color="blue" round plain icon="search"></SButton>
    <SButton color="green" round plain icon="edit"></SButton>
    <SButton color="gray" round plain icon="check"></SButton>
    <SButton color="yellow" round plain icon="message"></SButton>
    <SButton color="red" round plain icon="delete"></SButton>
  </div>
  `,
})
  .use(SmartyUI)
  .mount("#app");
