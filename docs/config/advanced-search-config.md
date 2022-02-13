文件内容定义在 [advancedSearch.ts](https://github.com/van-fe/vue-table-view/blob/main/src/config/advancedSearch.ts)

## field
- 搜索项的字段
- 类型: `string`

## title
- 搜索项的标题
- 类型: `string`

## type
- 该搜索项的类型
- 类型: `enum BaseFormType`
- 可选:
  - `BaseFormType.String`
  - `BaseFormType.Textarea`
  - `BaseFormType.Number`
  - `BaseFormType.Select`
  - `BaseFormType.RemoteSearch`
  - `BaseFormType.Cascader`
  - `BaseFormType.DatePicker`
  - `BaseFormType.TimePicker`
  - `BaseFormType.DateTimePicker`
  - `BaseFormType.DateRangePicker`
  - `BaseFormType.TimeRangePicker`
  - `BaseFormType.DateTimeRangePicker`

## default
- 默认值
- 类型: `string`
- 默认: `null`

## placeholder
- 占位文字
- 类型: `string`


## clearable
- 是否可清空
- 类型: `boolean`
- 默认: `true`

## disabled
- 是否不允许操作
- 类型: `boolean`
- 默认: `false`

## colSpan
- `el-form-item` 的 `span` 属性
- 类型: `number`

## colOffset
- `el-form-item` 的 `offset` 属性
- 类型: `number`

## labelWidth
- 因为使用了 `el-form` `el-form-item`， 所以可以自定义 `label-width`
- 类型: `string | number`


## extraConfig
- 更多配置，此项内容因 `type` 的不同，数据类型也不同
- 类型: `interface AdvancedSearchExtraMap[type]`

### 1. `string` | `textarea`

#### maxLength
- 最长长度
- 类型: `number`

#### suffixIcon
- 后缀 `icon`
- 类型: `string`

#### prefixIcon
- 前缀 `icon`
- 类型: `string`

### 2. `number`

#### min
- 最小
- 类型: `number`

#### max
- 最大
- 类型: `number`

### 3. `select`
#### selectData
- 下拉选择项
- 类型: `SelectData[]`
- 默认: `[]`

#### max
- 最多选择数量
- 类型: `number`

#### min
- 最少选择数量
- 类型: `number`

#### multiple
- 是否多选
- 类型: `boolean`

#### async
- 是否是异步
- 类型: `boolean`
- 默认: `false`

#### asyncFunc
- 异步函数
- 类型: `(search?: string) => Promise<SelectData[]>`

#### filterable
- 是否可过滤
- 类型: `boolean`

#### collapseTags
- 多选时是否合并选择
- 类型: `boolean`
- 默认: `true`

### 4. `remote-search`
#### searchFunc
- 搜索函数
- 类型: `(searchVal: string, row: Row) => Promise<SelectData[]>`

#### debounce
- 输入后延迟搜索毫秒数
- 类型: `number`

### 5. `cascader`
#### cascaderData
- 联级选项
- 类型: `CascaderData[]`
- 默认: `[]`

#### max
- 最多选择数量
- 类型: `number`

#### min
- 最少选择数量
- 类型: `number`

#### multiple
- 是否多选
- 类型: `boolean`

#### async
- 是否是异步
- 类型: `boolean`
- 默认: `false`

#### asyncFunc
- 异步函数
- 类型: `(search?: string) => Promise<SelectData[]>`

### 6. `date-picker` | `time-picker` | `date-time-picker`
#### min
- 开始日期/时间
- 类型: `string`

#### max
- 结束日期/时间
- 类型: `string`

#### format
- 格式化日期/时间
- 类型: `string`
- 参见: [链接](https://element.eleme.cn/#/en-US/component/date-picker#date-formats)

#### pickerOptions
- 各选择器的自己的特殊配置
- 类型: `object`
- 参见: 
  - [`date-picker`](https://element.eleme.cn/#/en-US/component/date-picker#picker-options)
  - [`time-picker`](https://element.eleme.cn/#/en-US/component/time-picker#time-picker-options)
  - [`date-time-picker`](https://element.eleme.cn/#/en-US/component/datetime-picker#picker-options)

### 7. `date-range-picker` | `time-range-picker` | `date-time-range-picker`
#### min
- 开始日期/时间
- 类型: `[string, string]`

#### max
- 结束日期/时间
- 类型: `[string, string]`

#### format
- 格式化日期/时间
- 类型: `string`
- 参见: [链接](https://element.eleme.cn/#/en-US/component/date-picker#date-formats)

#### rangeSeparator
- 区间选择分割符
- 类型: `string`
