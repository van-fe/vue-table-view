# How to sue

:::tip
Only 3 steps
:::

## 1. Install

```shell
# pnpm
pnpm add vue-table-view

# npm
npm i vue-table-view

# yarn
yarn add vue-table-view
```



## 2. Global register

```ts
// main.ts
import Vue from 'vue';
import VueTableView, { defineVueTableViewGlobalOption } from 'vue-table-view';

Vue.use(VueTableView, defineVueTableViewGlobalOption({
  // options
}));
```

Please visit [Global config](../config/global-config.md) to get `options`'s config.
## 3. Usa in component

```vue
<!--YourComponent.vue-->
<template>
  <table-view :config="config" />
</template>

<script lang="tsx">
import TableView from 'vue-table-view';
export default {
  name: 'yourComponent',
  components: {
    TableView
  },
  data() {
    return {
      config: {
        // config
      }
    }
  }
}
</script>
```

Please visit [Component config](../config/component-config.md) to get `options`'s config.

