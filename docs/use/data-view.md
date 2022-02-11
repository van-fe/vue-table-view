# 数据展示
数据展示是本组件的核心，主要使用了 `vxe-table` 提供的功能

具体的配置可以点击 [这里](../config/component-config.md) 查看

## 例子

```ts
import { type Config, BaseFormType } from 'vue-table-view';

const config: Config<Record<string, unknown>> = {
  advancedSarch: [
    {
      field: 'id',
      title: 'ID',
      type: BaseFormType.Number,
      default: null,
      placeholder: '请输入ID',
      clearable: true,
      extraConfig: {
        min: 0
      }
    },
    // ...
  ]
};
```

