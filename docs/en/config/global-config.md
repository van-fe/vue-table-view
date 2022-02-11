# 全局配置
为了方便使用者不需要在使用每个 `vue-table-view` 时都重复定义一些与后端工程相关的配置（例如分页的设定），所以提供了全局配置。

全局配置只需要在 `Vue.use` 时，通过第二个参数传入即可。

可以借用辅助函数 `defineVueTableViewGlobalOption` 让 IDE 可以智能提示。

```ts
// main.ts
import Vue from 'vue';
import VueTableView, { defineVueTableViewGlobalOption } from 'vue-table-view';

Vue.use(VueTableView, defineVueTableViewGlobalOption({
  // options
}));
```

## language
- 可以设置全局语言
- type: `number`
- 默认: 
- 可选: `0 | 1`

## searchButtonText
- 搜索按钮的文字
- type: `string`

## resetSearchButtonText
- 重置搜索按钮文字
- type: `string`
- default: '重置'
