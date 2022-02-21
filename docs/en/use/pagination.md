# Pagination

## Global config
You can use the same set of paging fields globally when using `vue-table-view`

```ts
import Vue from 'vue';
import VueTableView, { defineVueTableViewGlobalOption } from 'vue-table-view';

Vue.use(VueTableView, defineVueTableViewGlobalOption({
  requestPageConfig: {
    currentPage: 'pageNum',
    perPage: 'pageSize',
    pageSizes: [10, 20, 30, 40, 50, 100]
  },
  receivePageConfig: {
    currentPage: 'pageNum',
    perPage: 'pageSize',
    currentPageSize: 'size',
    total: 'total',
    pages: 'pages',
    list: 'list'
  }
}));
```

**Request** pagination's detail config please see [HERE](../config/component-config.md#requestpageconfig)

**Response** pagination's detail config please see [HERE](../config/component-config.md#receivepageconfig)

## Component config
Because it is possible for front-end projects to access multiply different back-end apis at the same time.
`vue-table-view` allows developers to configure different paging fields in different views.

:::tip
Component configuration items will **deeply merged** with the global configuration, so you can list only items that differ from the global configuration
:::


```ts
import type { Config } from 'vue-table-view';

const config: Config<Record<string, unknown>> = {
  requestPageConfig: {
    currentPage: 'currPage',
    perPage: 'perPage',
  },
  receivePageConfig: {
    currentPage: 'currPage',
    perPage: 'perPage',
    currentPageSize: 'pageSize',
    list: 'dataList'
  }
};
```
The configuration items are the same as those [above](#global-config)

## Show and hidden control
Pagination can be used in table views with multiple data table. You can also set not to display in views that do not need pagination, just:

```ts
import type { Config } from 'vue-table-view';

const config: Config<Record<string, unknown>> = {
  needPagination: false
};
```

