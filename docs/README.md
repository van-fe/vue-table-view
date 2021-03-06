# 介绍

`vue-table-view` 是一个只需要 **一行 html** 代码，以及 **丰富的 `config`** 即可组合成一套完整的数据展示页面的 `高级 table` 组件.

其提供了:
1. 高级搜索
2. 工具栏
3. 数据展示
4. 页码显示
5. ~~简单的新增、修改弹框~~ 暂未支持

## 1. 高级搜索
### a. 支持的表单类型
高级搜索支持了以下表单类型的搜索:

- [string / textarea](config/advanced-search-config.md#_1-string-textarea)
- [number](config/advanced-search-config.md#_2-number)
- [select](config/advanced-search-config.md#_3-select)
- [remote-search](config/advanced-search-config.md#_4-remote-search)
- [cascader](config/advanced-search-config.md#_5-cascader)
- [date-picker / time-picker / date-time-picker](config/advanced-search-config.md#_6-date-picker-time-picker-date-time-picker)
- [date-range-picker / time-range-picker / date-time-range-picker](config/advanced-search-config.md#_7-date-range-picker-time-range-picker-date-time-range-picker)

每一个表单类型都有自己特殊配置，详情请点击对应链接

### b. 其他配置
高级搜索配置项也可以配置 `搜索` `重置` `展开` 的文字，以及是否允许展开，详细配置请参考 [高级搜索配置](config/advanced-search-config.md)

## 2. 工具栏
### a. 内置工具
可以通过配置开启一些内置的工具：
- 新增按钮
- 导出

详情请点击对应工具按钮

### b. 自定义工具
可以通过 `slot` 自定义自己的工具按钮

## 3. 数据展示
数据展示主要使用了 `vxe-table` 提供的能力，在此能力的基础上， `vue-table-view` 还封装、提供了一些方便使用的配置。

因为内容较多，请点击 [此处](use/data-view.md) 查看详情

## 4. 页码显示
使用了 `element-ui` 的 `pagination` 组件。可以根据 [组件配置](config/component-config.md#requestpageconfig) 中对列表数据的指定字段设置自动载入页码数据。

## 5. 简单的新增、修改弹框
使用了 `element-ui` 的 `dialog` 组件作为基础显示承载，并借用了其 `form` 组件载入可以新增、修改的数据，以及表单验证的功能。
具体使用请点击 [此处]() 查看详情
