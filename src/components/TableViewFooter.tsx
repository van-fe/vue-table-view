import { Component, InjectReactive, Vue } from "vue-property-decorator";
import type { Config, Dictionary, PaginationData } from "@/config";
import type { VNode } from "vue";
import { Pagination } from "element-ui";

@Component({
  components: {
    Pagination,
  },
})
export class TableViewFooter<Row, Search extends Dictionary> extends Vue {
  @InjectReactive() currentConfig!: Config<Row, Search>;
  @InjectReactive() paginationInfo!: PaginationData;

  public render(): VNode {
    return (
      <div class="table-view__footer">
        {this.currentConfig.needPagination === false ? (
          ""
        ) : (
          <div class="page__wrapper">
            <pagination
              current-page={this.paginationInfo.currentPage}
              page-size={this.paginationInfo.perPage}
              total={this.paginationInfo.total}
              page-count={this.paginationInfo.pageAmount}
              page-sizes={this.currentConfig.requestPageConfig?.pageSizes}
              layout="total, prev, pager, next, sizes, jumper"
              on-current-change={this.onCurrentChange}
              on-size-change={this.onSizeChange}
            />
          </div>
        )}
      </div>
    );
  }

  public onCurrentChange(page: number): void {
    window.dispatchEvent(
      new CustomEvent("current-page-change", {
        detail: {
          page,
        },
      })
    );
  }

  public onSizeChange(size: number): void {
    window.dispatchEvent(
      new CustomEvent("page-size-change", {
        detail: {
          size,
        },
      })
    );
  }
}
