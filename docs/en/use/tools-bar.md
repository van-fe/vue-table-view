# Tools bar

## Custom features
You can pass in your own custom buttons (or other component).

```vue
<template>
  <table-view :config="config">
    <template #toolsBar>
      <el-button size="mini" @click="exportData">Batch Delete</el-button>
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

Set `slot` to `toolsBar` to customize toolbar buttons

## Create and export
In the future, we will support build-in `create` and `export` features. They will place before custom buttons.
