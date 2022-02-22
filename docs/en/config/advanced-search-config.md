# Advanced Config

Reference: [advancedSearch.ts](https://github.com/van-fe/vue-table-view/blob/main/src/config/advancedSearch.ts)

## field
- The field for the search term
- Type: `string`

## title
- The title of the search item
- Type: `string`

## type
- The type of the search form
- Type: `enum BaseFormType`
- Available:
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
- Default value
- Type: `string`
- Default: `null`

## placeholder
- Placeholder text
- Type: `string`


## clearable
- Whether to can be cleared
- Type: `boolean`
- Default: `true`

## disabled
- Whether to be disabled
- Type: `boolean`
- Default: `false`

## colSpan
- `el-form-item`'s `span` prop
- Type: `number`

## colOffset
- `el-form-item`'s `offset` prop
- Type: `number`

## labelWidth
- Because of using `el-form` `el-form-item`, you can set `label-width`
- Type: `string | number`


## extraConfig
- More configurations. The config type of this depending on the `type`
- Type: `interface AdvancedSearchExtraMap[type]`

### 1. `string` | `textarea`

#### maxLength
- Max length of letters
- Type: `number`

#### suffixIcon
- The suffix `icon`
- Type: `string`

#### prefixIcon
- The prefix `icon`
- Type: `string`

### 2. `number`

#### min
- Minimum number
- Type: `number`

#### max
- Maximum number
- Type: `number`

### 3. `select`
#### selectData
- Select options
- Type: `SelectData[]`
- Default: `[]`

#### max
- Maximum number of choices
- Type: `number`

#### min
- Minimum number of choices
- Type: `number`

#### multiple
- Whether to choose more than one
- Type: `boolean`

#### async
- Asynchronous or not
- Type: `boolean`
- Default: `false`

#### asyncFunc
- An asynchronous function
- Type: `(search?: string) => Promise<SelectData[]>`

#### filterable
- Filterable or not
- Type: `boolean`

#### collapseTags
- Whether to combine multiple selections
- Type: `boolean`
- Default: `true`

### 4. `remote-search`
#### searchFunc
- The search function
- Type: `(searchVal: string, row: Row) => Promise<SelectData[]>`

#### debounce
- The number of milliseconds to delay searching after entering
- Type: `number`

### 5. `cascader`
#### cascaderData
- Cascader option
- Type: `CascaderData[]`
- Default: `[]`

#### max
- Maximum number of choices
- Type: `number`

#### min
- Minimum number of choices
- Type: `number`

#### multiple
- Whether to choose more than one
- Type: `boolean`

#### async
- Asynchronous or not
- Type: `boolean`
- Default: `false`

#### asyncFunc
- Asynchronous function
- Type: `(search?: string) => Promise<SelectData[]>`

### 6. `date-picker` | `time-picker` | `date-time-picker`
#### min
- Start date/time
- Type: `string`

#### max
- End date/time
- Type: `string`

#### format
- Format the date/time
- Type: `string`
- Reference: [Link](https://element.eleme.cn/#/en-US/component/date-picker#date-formats)

#### pickerOptions
- Each selector's own special configuration
- Type: `object`
- Reference: 
  - [`date-picker`](https://element.eleme.cn/#/en-US/component/date-picker#picker-options)
  - [`time-picker`](https://element.eleme.cn/#/en-US/component/time-picker#time-picker-options)
  - [`date-time-picker`](https://element.eleme.cn/#/en-US/component/datetime-picker#picker-options)

### 7. `date-range-picker` | `time-range-picker` | `date-time-range-picker`
#### min
- Start date/time
- Type: `[string, string]`

#### max
- End date/time
- Type: `[string, string]`

#### format
- Format the date/time
- Type: `string`
- Reference: [Link](https://element.eleme.cn/#/en-US/component/date-picker#date-formats)

#### rangeSeparator
- Interval selection separator
- Type: `string`
- Default: `'-'`
