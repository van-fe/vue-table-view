# Advanced search
Advanced search is the most commonly used function in data aggregation pages. Here will show you how to use it.

For specific configuration, you can click [HERE](../config/advanced-search-config.md) to get.

## Search form config
`vue-table-view` provide multiple form type for search. You can click [HERE](../config/advanced-search-config.md#type) to get.

```ts
import { type Config, BaseFormType } from 'vue-table-view';

const config: Config<Record<string, unknown>> = {
  advancedSarch: [
    {
      field: 'id',
      title: 'ID',
      type: BaseFormType.Number,
      default: null,
      placeholder: 'Please input id number',
      clearable: true,
      extraConfig: {
        min: 0
      }
    },
    // ...
  ]
};
```
The code above will create a `number` search form. For different types of form configurations, click [HERE](../config/advanced-search-config.md#extraconfig) to get.

## Button config
You can config [search](../config/component-config.md#searchbuttontext) /
[clear](../config/component-config.md#resetsearchbuttontext) /
[expand](../config/component-config.md#expandbuttontext) 
's text，and [expand automatically](../config/component-config.md#advancedsearchneedexpanded) (global config and component config also can set)

```ts
import type { Config } from 'vue-table-view';
const config: Config<Record<string, unknown>> = {
  searchButtonText: 'Search',
  resetSearchButtonText: 'Clear',
  expandButtonText: 'Expand',
  advancedSearchNeedExpanded: true
};
```


