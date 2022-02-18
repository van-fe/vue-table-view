# 数据展示
数据展示是本组件的核心，主要使用了 `vxe-table` 提供的功能

具体的配置可以点击 [这里](../config/component-config.md) 查看

## 整体配置
可以配置表格高度、空数据时展示文字、是否需要单选、多选、seq的配置

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

## 列配置

这是最重要的配置项。可以允许配置每列展示的内容形式及样式

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
你可以直接设置 `field` 让 `vue-table-view` 自动载入数据集合中对应字段的数据

也可以自己配置` format` 处理数据，就像上述例子中对 `date` 的处理一样

如果直接展示文字达不到你的要求，你甚至可以渲染一个 `jsx` 显示，不仅这个简单的 `<Tag />`，也可以渲染一个 `<input />`，甚至其他 UI组件 `<el-input>` 也可以（不要忘记定义引入）。

只要符合 `jsx` 语法即可

具体参数可以点击 [这里](../config/column-config.md) 查看

## 操作栏配置
如果你的表格需要一个操作栏（例如点击查看等等功能），可以仿照下述例子配置

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
    headerTitle: '操作',
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

操作栏支持以下类型的按钮（或链接）：
- `OperationType.Button` 按钮
- `OperationType.ButtonWithIcon` 有icon的按钮
- `OperationType.Link` 链接
- `OperationType.LinkWithoutUnderline` 没有下划线的链接
- `OperationType.ButtonMore` 按钮形式的 更多
- `OperationType.ButtonWithIconMore` 按钮形式有icon的 更多
- `OperationType.LinkMore` 链接形式的 更多
- `OperationType.LinkWithoutUnderlineMore` 没有下划线的链接形式的 更多

可点击 [这里](../config/operation-config.md#1-type) 查看支持类型

操作栏其他的具体参数可以点击 [这里](../config/operation-config.md) 查看
