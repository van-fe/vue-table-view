> 只需三步

## 1. 安装

```bash
pnpm add vue-table-view
```

## 2. 全局注册

```ts
// main.ts
import Vue from 'vue';
import VueTableView, { defineVueTableViewGlobalOption } from 'vue-table-view';

Vue.use(VueTableView, defineVueTableViewGlobalOption({
  // options
}));
```

`options` 请参考 [全局配置](/config/global-config.html)

## 3. 组件内使用

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

`config` 请参考 [组件配置](/config/component-config.html)

