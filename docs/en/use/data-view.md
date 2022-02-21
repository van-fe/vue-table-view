# Data view
Data view is the core of this component. It mainly uses the feature provided by `vxe-table`

You can check [HERE](../config/component-config.md) to get more specific config.

## Overall config
You can configure the `height of the table`, `display text when empty data`, `single-select`, `multi-select`, and `SEQ`.

```ts
import type { Config, CheckboxChangedRecords } from 'vue-table-view';

const checkedRows: Record<string, unknown>[] = [];
const config: Config<Record<string, unknown>> = {
  height: '100vh',
  emptyText: '暂无数据',
  needCheckbox: true,
  // needRadio: true,
  // needSeq: true,
  onCheckboxChange: this.onCheckboxChange
};


function onCheckboxChange(records: CheckboxChangedRecords<Record<string, unknown>>): void {
  this.checkedRows = records;
}
```

## Column config
This is the most important configuration item. You can configure the form and style of content displayed for each column.


```tsx
import type { Config } from 'vue-table-view';
import { ColumnType, Align } from 'vue-table-view';

type ListDataStatus = 0 | 1 | 2 | 3;

const StatusMap: Record<ListDataStatus, string> = {
  0: "Not Ready",
  1: "Success",
  2: "Fail",
  3: "Paused",
};

interface ListData {
  id: number;
  date: string;
  status: ListDataStatus;
}

const config: Config<ListData> = {
  columns: [
    {
      field: "id",
      title: "ID",
      fixed: true,
    }, {
      field: "date",
      title: "Date",
      format: (val: number): string => {
        const d = new Date();
        d.setTime(val);
        return d.toDateString();
      },
    }, {
      field: "status",
      title: "Status",
      align: Align.Center,
      render: (
        h: CreateElement,
        val: ListDataStatus
      ): VNode => <Tag>{StatusMap[val]}</Tag>,
    },
  ]
};
```
You can set `field` directly to `vue-table-view` to automatically load the corresponding field in the data set.

You can also configure `format` to handle data, as the same with `date` in the example above.

If displaying text directly is not enough, you can even render a `JSX`. Not only a simple `<Tag />`, you can render a `<input />`, or even other UI components. Such as `<el-input>`(don't forget to define them).

As long as it complies with `JSX` syntax.

To get more specific config, you can click [HERE](../config/column-config.md).

## Operation column config
If your table needs an operation column (click to view, etc.), you can configure it as shown in the following example

```ts
import type { Config } from 'vue-table-view';
import { OperationType } from 'vue-table-view';
import { Message } from 'element-ui';

interface ListData {
  id: number;
  date: string;
  status: ListDataStatus;
}

const config: Config<ListData> = {
  operationConfig: {
    headerTitle: 'Operation',
    minWidth: '80px',
    surroundByButtonGroup: true,
    operations: [
      {
        type: OperationType.ButtonWithIcon,
        icon: "el-icon-view",
        status: "primary",
        onClick: (row: ListData): void => {
          Message.info(`View Id: ${row.id.toString()}`);
        },
      },
      {
        type: OperationType.ButtonWithIcon,
        icon: "el-icon-edit",
        onClick: (row: ListData): void => {
          Message.info(`Edit Id: ${row.id.toString()}`);
        },
      },
    ]
  }
};
```
The support form type list can click [HERE](../config/operation-config.md#1-type) to get.

Operation column's other config params can get form [HERE](../config/operation-config.md)
