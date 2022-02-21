# Component config

Component configuration data will overrides the [global configuration](global-config.md)

## height
- The table view's height (the wrapper component's height)
- Type: `number | string`
- Default: `'auto'`

## needPagination
- Whether pagination display is required
- Type: `boolean`
- Default: `true`

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

## advancedSearchNeedExpanded
- Whether to allow the search to be performed immediately after clicking reset button
- Type: `boolean`
- Default: `false`

## emptyText
- The text when empty data to display
- Type: `string`
- Default: `'No Data'`

## requestPageConfig
- Whether to allow expanded automatically when the page is opened
- Type: `interface RequestPageFieldConfig`

### Params

#### 1. currentPage
- The current page number corresponds to the field when requested
- Type: `string`
- Default: `'pageNum'`

#### 2. perPage
- The pre page amount corresponds to the field when requested
- Type: `string`
- Default: `'pageSize'`

#### 3. pageSizes
- Optional number of Settings per page
- Type: `number[]`
- Default: `[10, 20, 30, 40, 50, 100]`

## receivePageConfig
- Paging parameter Settings when data is retrieved
- Type: `interface ReceivePageFieldConfig`

### Params

#### 1. currentPage
- The current page number corresponds to the field when respond
- Type: `string`
- Default: `'pageNum'`

#### 2. perPage
- The pre page amount corresponds to the field when respond
- Type: `string`
- Default: `'pageSize'`

#### 3. currentPageSize
- The current page's data size corresponds to the field when respond
- Type: `string`
- Default: `'size'`

#### 4. total
- The total data amount corresponds to the field when respond
- Type: `string`
- Default: `'total'`

#### 5. pages
- The total pages amount corresponds to the field when respond
- Type: `string`
- Default: `'pages'`

#### 6. list
- The data set corresponds to the field when respond
- Type: `string`
- Default: `'list'`

## operationConfig
- Operation config
- Type: `interface OperationConfig[]`

There are many configuration items. For details, see [Operation column config](operation-config.md).

## needCheckbox
- Whether to need checkbox
- Type: `boolean`
- Default: `false`

## needRadio
- Whether to need radio
- Type: `boolean`
- Default: `false`

## needSeq
- Whether to need seq. Each page will begin with `1`
- Type: `boolean`
- Default: `false`

## onRadioChange
- Event callback when radio is ticked（Attention the `this`'s reference）
- Type: `(row: Row) => void`
- Default: `undefined`

## onCheckboxChange
- Event callback when checkbox is ticked（Attention the `this`'s reference）
- Type: `(records: CheckboxChangedRecords<Row>) => void;`
- Default: `undefined`

## getListAfterReset
- Whether to allow the search to be performed immediately after clicking reset button
- Type: `boolean`
- Default: `true`

## getListAtCreated
- Whether to request data immediately when created, or set to `false` if your search relies on other asynchronous request parameters. Then you can call search function by yourself
- Type: `boolean`
- Default: `true`

## getListFunc
- The `function` that gets data
- Required: `Yes`
- Type: `(search: Search) => Promise<ListDataWrapper<Row>>`

## useOperations
- Whether to display the operation column. In some cases, explicit actions may be performed because of permissions or page origin
- Type: `boolean`
- Default: `true`

## columns
- Column config
- Type: `interface Column[]`
- Default: `[]`

There are many configuration items. For details, see [Column config](column-config.md)

## advancedSearch
- Advanced Search config
- Type: `interface AdvancedSearch[]`
- Default: `[]`

There are many configuration items. For details, see [Advanced Search](advanced-search-config.md)

