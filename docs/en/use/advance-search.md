# 高级搜索
高级搜索是数据聚合页面中最常用的栏目，在这里将会为你展示如何使用

具体的配置可以点击 [这里](../config/advanced-search-config.md) 查看

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

