# 高级搜索
高级搜索是数据聚合页面中最常用的栏目，在这里将会为你展示如何使用

具体的配置可以点击 [这里](../config/advanced-search-config.md) 查看

## 搜索项配置
`vue-table-view` 提供了多个表单类型搜索，可以点击 [这里](../config/advanced-search-config.md#type) 查看

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

上述的代码就可以生成一个类型是 `number` 的搜索框了，具体不同类型的表单配置可以点击 [这里](../config/advanced-search-config.md#extraconfig) 参考

## 按钮配置
可以自主定义 [搜索](../config/component-config.md#searchbuttontext) 
[清空](../config/component-config.md#resetsearchbuttontext) 
[展开](../config/component-config.md#expandbuttontext) 
文字，以及 [是否自动展开](../config/component-config.md#advancedsearchneedexpanded)（都可以在全局、组件内分别配置）

```ts
import type { Config } from 'vue-table-view';
const config: Config<Record<string, unknown>> = {
  searchButtonText: '搜索',
  resetSearchButtonText: '清空',
  expandButtonText: '展开',
  advancedSearchNeedExpanded: true
};
```


