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
- 类型: `number`
- 默认: `0`
- 可选:
  - `0`: 中文
  - `1`: 英文

## searchButtonText
- 搜索按钮的文字
- 类型: `string`
- 默认: `'搜索'`

## resetSearchButtonText
- 重置搜索按钮文字
- 类型: `string`
- 默认: `'重置'`

## expandButtonText
- 展开按钮（或Link) 的文字
- 类型: `string`
- 默认: `'展开'`

## getListAfterReset
- 是否允许在点击重置后立刻执行搜索
- 类型: `boolean`
- 默认: `true`

## advancedSearchNeedExpanded
- 当打开页面时，是否允许默认展开
- 类型: `boolean`
- 默认: `false`

## emptyText
- 当没有数据时展示的文字
- 类型: `string`
- 默认: `'暂无数据'`

## requestPageConfig
- 请求时的分页参数设置
- 类型: `RequestPageFieldConfig`

具体请参见 [组件配置 requestPageConfig](component-config.md#requestpageconfig)

## receivePageConfig
- 得到数据时的分页参数设置
- 类型: `ReceivePageFieldConfig`

具体请参见 [组件配置 receivePageConfig](component-config.md#receivepageconfig)

## operationConfig
- 操作栏设置
- 类型: `OperationConfig[]`
- 说明: 允许在全局配置中定义 `operationConfig`，主要是为了可以设定一个共有的操作按钮，这个会在某些情况下适用。

具体参数请见 [组件配置 operationConfig](component-config.md#operationconfig)

