# 工具栏

## 自定义按钮
您可以传入自己的自定义按钮

```vue
<template>
  <table-view :config="config">
    <template #toolsBar>
      <el-button size="mini" @click="exportData">批量删除</el-button>
    </template>
  </table-view>
</template>

<script lang="ts">
import TableView, { type Config } from 'vue-table-view';
import { Component, Vue } from 'vue-property-decorator';
import { Button } from 'vxe-table'

@Component({
  components: {
    TableView,
    'el-button': Button
  }
})
export default class App extends Vue {
  public config: Config<Record<string, any>> = {
    // ...
  }
  
  public exportData(): void {
    // ... export data
  }
}
</script>
```

`slot` 设定为 `toolsBar` 即可自定义工具栏按钮

## 新增与导出
在未来将会支持内置的 `新增` `导出` 的功能，会放置在自定义按钮之前
