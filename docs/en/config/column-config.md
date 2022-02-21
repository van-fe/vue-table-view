# Column config

## type
- Current column type
- Type: `enum ColumnType`
- Default: `ColumnType.Default`
- Reference: [Link](https://github.com/van-fe/vue-table-view/blob/main/src/config/column.ts#L5)

## field
- The field of the data that corresponds to this column
- Type: `string`
- Default: `undefined`

## title
- The title of this column
- Type: `string`

## titleAlign
- Title text alignment
- Type: `enum Align`
- Default: `Align.Left`
- Reference: [Link](https://github.com/van-fe/vue-table-view/blob/main/src/config/common.ts#L1)

## align
- Alignment of cell content
- Type: `enum Align`
- Default: `Align.Left`
- Reference: [Link](https://github.com/van-fe/vue-table-view/blob/main/src/config/common.ts#L1)

## width
- The width. Can be a string with a percent sign
- Type: `string | number`
- Default: `'auto'`

## minWidth
- Min-width (`recommended`). Can be a string with a percent sign
- Type: `string | number`
- Default: `'auto'`

## fixed
- Whether to fixed or fixed set. If `true` then `'left'`
- Type: `enum Fixed`

## ~~sortable~~
- Whether to be sortable (Not support yet)
- Type: `boolean`
- Default: `false`

## resizable
- Whether the column width can be adjusted
- Type: `boolean`
- Default: `true`

## showOverflow
- Ellipsis is displayed when the content is too long
- Type: `boolean`
- Default: `true`

## showHeaderOverflow
- Ellipsis is displayed when the header is too long
- Type: `boolean`
- Default: `true`

## className
- Append `className` to the cell
- Type: `string | () => string`
- Default: `''`

## headerClassName
- Append `className` to the table header cell
- Type: `string | () => string`
- Default: `''`

## ~~alwaysShow~~
- Whether display always (for column filtering) (not supported yet)
- Type: `boolean`
- Default: `false`

## format
- Formatting display content
- Type: `(curr: unknown, row: Row) => string`

## render
- Render. The first argument is 'vue render function'
- Type: `(h: CreateElement, value: any, row: Row) => VNode;`
