## type
- 当前列类型
- 类型: `enum ColumnType`
- 默认: `ColumnType.Default`
- 参见: [地址]()

## field
- 此列对应数据的字段
- 类型: `string`
- 默认: `undefined`

## title
- 此列的标题
- 类型: `string`

## titleAlign
- 标题文字对齐方式
- 类型: `enum Align`
- 默认: `Align.Left`
- 参见: [地址]()

## align
- 单元格内容对齐方式
- 类型: `enum Align`
- 默认: `Align.Left`
- 参见: [地址]()

## width
- 宽度，可以使带有百分号的字符串
- 类型: `string | number`
- 默认: `'auto'`

## minWidth
- 最小宽度（建议使用），可以使带有百分号的字符串
- 类型: `string | number`
- 默认: `'auto'`

## fixed
- 是否固定或固定设定，如果为 `true` 则即 `'left'`
- 类型: `enum Fixed`

## ~~sortable~~
- 是否可排序(暂不支持)
- 类型: `boolean`
- 默认: `false`

## resizable
- 是否可调整列宽
- 类型: `boolean`
- 默认: `true`

## showOverflow
- 当内容过长时显示为省略号
- 类型: `boolean`
- 默认: `true`

## showHeaderOverflow
- 当表头内容过长时显示为省略号
- 类型: `boolean`
- 默认: `true`

## className
- 给单元格附加 className
- 类型: `string | () => string`
- 默认: `''`

## headerClassName
- 给表头单元格附加 className
- 类型: `string | () => string`
- 默认: `''`

## ~~alwaysShow~~
- 是否始终显示（对于列过滤时的处理）(暂不支持)
- 类型: `boolean`
- 默认: `false`

## format
- 格式化显示内容
- 类型: `(curr: unknown, row: Row) => string`

## render
- 渲染，第一个参数即 `vue 渲染函数`，如果直接返回 `jsx`，防止直接在 `config` 中定义，其也必须声明
- 类型: `(h: CreateElement, value: any, row: Row) => VNode;`
