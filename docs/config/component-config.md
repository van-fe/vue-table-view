# 组件配置

组件配置的数据会覆盖 [全局配置](global-config.md) 的配置

## height
- 整体表格高度
- 类型: `number | string`
- 默认: `'auto'`

## needPagination
- 是否需要分页显示
- 类型: `boolean`
- 默认: `true`

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
- 类型: `interface RequestPageFieldConfig`

### 参数

#### 1. currentPage
- 请求时当前页数对应字段
- 类型: `string`
- 默认: `'pageNum'`

#### 2. perPage
- 请求时每页数量对应字段
- 类型: `string`
- 默认: `'pageSize'`

#### 3. pageSizes
- 每页可选数量的设置
- 类型: `number[]`
- 默认: `[10, 20, 30, 40, 50, 100]`

## receivePageConfig
- 得到数据时的分页参数设置
- 类型: `interface ReceivePageFieldConfig`

### 参数

#### 1. currentPage
- 返回时当前页数对应字段
- 类型: `string`
- 默认: `'pageNum'`

#### 2. perPage
- 返回时每页数量对应字段
- 类型: `string`
- 默认: `'pageSize'`

#### 3. currentPageSize
- 返回时当前页数量对应字段
- 类型: `string`
- 默认: `'size'`

#### 4. total
- 返回时总条目对应字段
- 类型: `string`
- 默认: `'total'`

#### 5. pages
- 返回时总页数对应字段
- 类型: `string`
- 默认: `'pages'`

#### 6. list
- 返回数据时对应的字段
- 类型: `string`
- 默认: `'list'`

## operationConfig
- 操作栏设置
- 类型: `interface OperationConfig[]`

配置项较多，具体请参考 [操作栏配置](operation-config.md)

## needCheckbox
- 是否需要 checkbox
- 类型: `boolean`
- 默认: `false`

## needRadio
- 是否需要 radio
- 类型: `boolean`
- 默认: `false`

## needSeq
- 是否需要 seq，每页都会以 `1` 开始
- 类型: `boolean`
- 默认: `false`

## onRadioChange
- 当单选被勾选的事件回调（使用时注意 `this` 指向，最好直接设置为一个 `method`）
- 类型: `(row: Row) => void`
- 默认: `undefined`

## onCheckboxChange
- 当多选框被勾选的事件回调（使用时注意 `this` 指向，最好直接设置为一个 `method`）
- 类型: `(records: CheckboxChangedRecords<Row>) => void;`
- 默认: `undefined`

## getListAfterReset
- 是否允许在点击重置后立刻执行搜索
- 类型: `boolean`
- 默认: `true`

## getListAtCreated
- 是否当创建时立刻请求数据，如果你的搜索依赖其他异步请求参数，请设置为 `false`
- 类型: `boolean`
- 默认: `true`

## getListFunc
- 获取数据的 `function`
- 必选: 是
- 类型: `(search: Search) => Promise<ListDataWrapper<Row>>`

## useOperations
- 是否显示操作栏。在某些情况下，可能因为权限或页面来源而对显隐操作
- 类型: `boolean`
- 默认: `true`

## columns
- 列配置
- 类型: `interface Column[]`
- 默认: `[]`

配置项较多，具体请参考 [列配置](column-config.md)

## advancedSearch
- 高级搜索配置
- 类型: `interface AdvancedSearch[]`
- 默认: `[]`

配置项较多，具体请参考 [高级搜索配置](advanced-search-config.md)

