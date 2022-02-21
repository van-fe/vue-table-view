# Introduce

`vue-table-view` is an `advanced data view table` component which is just need **one line html** code, with **rich `config`**

Support:
1. Advanced Search
2. Tools bar
3. Data view
4. Pagination
5. ~~Simple create/edit dialog~~ not support yet

## 1. Advanced Search
### a. Supported form type
Advanced search support the following form type:

- [string / textarea](config/advanced-search-config.md#_1-string-textarea)
- [number](config/advanced-search-config.md#_2-number)
- [select](config/advanced-search-config.md#_3-select)
- [remote-search](config/advanced-search-config.md#_4-remote-search)
- [cascader](config/advanced-search-config.md#_5-cascader)
- [date-picker / time-picker / date-time-picker](config/advanced-search-config.md#_6-date-picker-time-picker-date-time-picker)
- [date-range-picker / time-range-picker / date-time-range-picker](config/advanced-search-config.md#_7-date-range-picker-time-range-picker-date-time-range-picker)

Each form type has their own special config. Please click the link to get.

### b. Other config
Advanced search also provide the configuration for `search` `reset` `expand` button text, and whether expand automatically. More info please visit [Advanced Search](config/advanced-search-config.md)

## 2. Tools bar
### a. Build-in tools
You can use some build-in tools by config:
- create button
- export

Please click link to view details.

### b. Custom tools
You can use `slot` to custom your own tools buttons (or other components). Here is [usage](use/tools-bar.md).

## 3. Data view
Data view mainly uses the capabilities provided by `vxe-table`. On top of this capability, `vue-table-view` also encapsulates and provides some easy-to-use configurations.

The content is too many. Please click [HERE](use/data-view.md) to get more.

## 4. Pagination
We use `element-ui`'s `pagination` component. You can set some pivotal field of pagination data to load pagination data automatically. Check [Pagination usage](use/pagination.md).

## 5. ~~Simple create/edit dialog~~ not support yet
We use `element-ui`'s `dialog` component to provide the base display, and use its `form` component to provide creating/editing and form validate function.
How to use please click [HERE]().
