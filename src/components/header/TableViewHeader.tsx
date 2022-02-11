import { Component, InjectReactive, Vue } from "vue-property-decorator";
import type { Config, Dictionary } from "@/config";
import type { VNode } from "vue";
import { TableViewAdvancedSearch } from "@/components";

@Component({
  components: {
    TableViewAdvancedSearch,
  },
})
export class TableViewHeader<Row, Search extends Dictionary> extends Vue {
  declare $refs: Vue["$refs"] & {
    advancedSearch: TableViewAdvancedSearch<Row, Search>;
  };

  @InjectReactive() currentConfig!: Config<Row, Search>;

  public render(): VNode {
    return (
      <div class="table-view__header">
        {this.currentConfig.useAdvancedSearch === false ? undefined : (
          <table-view-advanced-search
            ref="advancedSearch"
            on-do-search={() => this.$emit("do-search")}
            on-do-reset={() => this.$emit("do-reset")}
          />
        )}
        <div class="table-view__header-toolbar" />
      </div>
    );
  }
}
