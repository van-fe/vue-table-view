# Global config

Global configuration is provided so that the user does not need to repeatedly define some back-end engineering related configurations (such as paging Settings) with each `vue-table-view`.

The global configuration only needs to be passed in as the second parameter in `Vue.use`.

You can use auxiliary function `defineVueTableViewGlobalOption` to enable IDE's smart tips.

```ts
// main.ts
import Vue from 'vue';
import VueTableView, { defineVueTableViewGlobalOption } from 'vue-table-view';

Vue.use(VueTableView, defineVueTableViewGlobalOption({
  // options
}));
```

## language
- You can set global language
- type: `number`
- Default: `0`
- Available:
  - `0`: Chinese
  - `1`: English

## searchButtonText
- Search button's text
- Type: `string`
- Default: `'Search'`

## resetSearchButtonText
- Reset button's text
- Type: `string`
- Default: `'Reset'`

## expandButtonText
- Expand button's text
- Type: `string`
- Default: `'Expand'`

## getListAfterReset
- Whether to allow the search to be performed immediately after clicking reset button
- Type: `boolean`
- Default: `true`

## advancedSearchNeedExpanded
- Whether to allow expanded automatically when the page is opened
- Type: `boolean`
- Default: `false`

## emptyText
- The text when empty data to display
- Type: `string`
- Default: `'No Data'`

## requestPageConfig
- Pagination parameter Settings at request
- Type: `RequestPageFieldConfig`

Same as [Component config requestPageConfig](component-config.md#requestpageconfig)

## receivePageConfig
- Pagination parameter Settings at receive
- Type: `ReceivePageFieldConfig`

Same as [Component config receivePageConfig](component-config.md#receivepageconfig)

## operationConfig
- Operation column config
- Type: `OperationConfig[]`
- Desc: It is allowed to define `operationConfig` in the global configuration, mainly to set a common operation button. This will be applicable in some cases.

Same as [Component config operationConfig](component-config.md#operationconfig)

