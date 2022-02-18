import { Component } from "vue-property-decorator";
import type { VNode, VueConstructor } from "vue";
import { TableViewHeader } from "@/components/header";
import { TableViewBody } from "@/components/body";
import { TableViewFooter } from "@/components/TableViewFooter";
import { mixins } from "vue-class-component";
import type { GlobalConfigType } from "@/config";
import TableViewMixin from "../mixin/TableViewMixin";

@Component({
  components: {
    TableViewHeader,
    TableViewBody,
    TableViewFooter,
  },
})
export class TableView extends mixins(TableViewMixin) {
  static install: (Vue: VueConstructor, option: GlobalConfigType) => void;

  render(): VNode {
    return (
      <div
        class="table-view"
        style={{ height: this.currentConfig.height ?? "100%" }}
      >
        <table-view-header ref="header" on-do-search={this.getList}>
          <template slot="toolsBar">{this.$slots.toolsBar}</template>
        </table-view-header>
        <table-view-body ref="body" />
        <table-view-footer ref="footer" />
      </div>
    );
  }
}
