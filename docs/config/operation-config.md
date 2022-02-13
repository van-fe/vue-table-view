## operations
- 操作列，可以对全局所有的表格增加操作
- 类型: `interface Operation[]`
- 默认: `[]`

### 参数
#### 1. type
- 类型
- 类型: `enum OperationType`

#### 2. status
- 按钮/链接的状态，会直接以 `prop` 传入组件
- 类型: `string`
- 可选值:
    - `'primary'`
    - `'success'`
    - `'info'`
    - `'warning'`
    - `'danger'`

#### 3. hoverToShowText
- 鼠标悬浮式展示的文字
- 类型: `string`

#### 4. disabled
- 是否禁用
- 类型: `(row: Row) => boolean`

#### 5. disappear
- 是否显示
- 类型: `(row: Row) => boolean`

#### 6. onClick
- 点击事件回调
- 类型: `(row: Row) => void`

#### 7. label
- 当使用 **除** `ButtonWithIcon` | `ButtonWithIconMore` 时内部文字内容
- 类型: `string`

#### 8. icon
- 当使用 `ButtonWithIcon` | `ButtonWithIconMore` 时的 `icon`，会传入 `el-button` 的 `icon` 中
- 类型: `string`

#### 9. divided
- 这个是在使用 更多类型 的时候，对 `dropMenu` 的 `divided` 参数的处理
- 类型: `boolean`

#### 10. children
- 这个是在使用 `更多类型` 的时候，**但注意的是，目前不支持多级菜单**
- 类型: `interface Operation[]`

## headerTitle
- 操作列标题名称
- 类型: `string`
- 默认: `'Operator'`

## width
- 操作列宽度
- 类型: `string | number`
- 默认: `'auto'`

## minWidth
- 操作列最小宽度（建议）
- 类型: `string | number`
- 默认: `'auto'`

## surroundByButtonGroup
- 操作列内容是否使用 `<el-button-group>` 包裹，对于所有的 `operations` 都是 `button | button-with-icon` 类型时显示比较友好
- 类型: `boolean`
- 默认: `false`
