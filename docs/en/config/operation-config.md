# Operation config

## operations
- Operation column
- Type: `interface Operation[]`
- Default: `[]`

### Params
#### 1. type
- Operation's type
- Type: `enum OperationType`
- See: [OperationType](https://github.com/van-fe/vue-table-view/blob/main/src/config/operation.ts#L1)

```ts
enum OperationType {
  Button,
  ButtonWithIcon,
  Link,
  LinkWithoutUnderline,
  ButtonMore,
  ButtonWithIconMore,
  LinkMore,
  LinkWithoutUnderlineMore,
}
```

#### 2. status
- The status of the button/link. It will pass directly to the component as `prop`
- Type: `string`
- Available:
    - `'primary'`
    - `'success'`
    - `'info'`
    - `'warning'`
    - `'danger'`

#### 3. hoverToShowText
- The text when mouse hover
- Type: `string`

#### 4. disabled
- Whether to disable
- Type: `(row: Row) => boolean`

#### 5. disappear
- Whether to disappear
- Type: `(row: Row) => boolean`

#### 6. onClick
- Click event's callback
- Type: `(row: Row) => void`

#### 7. label
- The text inside when use **without** `ButtonWithIcon` | `ButtonWithIconMore`
- Type: `string`

#### 8. icon
- When you use `ButtonWithIcon` | `ButtonWithIconMore`'s `icon`. It will pass to `el-button`'s `icon` prop
- Type: `string`

#### 9. divided
- When you use `More`, processing of the parameter `divided` of `dropMenu`
- Type: `boolean`

#### 10. children
- When you use `More` to provide multiple action，**Note: multi-level menus are not supported yet**
- Type: `interface Operation[]`

## headerTitle
- Operation column's header title
- Type: `string`
- Default: `'Operator'`

## width
- Operation column's width
- Type: `string | number`
- Default: `'auto'`

## minWidth
- Operation column's min width (`recommended`)
- Type: `string | number`
- Default: `'auto'`

## surroundByButtonGroup
- Whether to use `<el-button-group>` pack all components inside the column. For all `operations` are `button | button-with-icon` type showed more friendly
- Type: `boolean`
- Default: `false`
