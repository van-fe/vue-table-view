import { Component, Prop, ProvideReactive } from "vue-property-decorator";
import type { Config, Dictionary, PaginationData, Records } from "@/config";
import Vue from "vue";
import { TableViewHeader, TableViewBody, TableViewFooter } from "@/components";
import { globalConfig, SearchHelper } from "@/utils";
import { merge } from "lodash-es";

@Component
export default class TableViewMixin<
  Row extends Records,
  Search extends Dictionary
> extends Vue {
  declare $refs: Vue["$refs"] & {
    header: TableViewHeader<Row, Search>;
    body: TableViewBody<Row, Search>;
    footer: TableViewFooter<Row, Search>;
  };

  @Prop({
    type: Object,
    required: true,
  })
  protected config!: Config<Row, Search>;

  @ProvideReactive()
  protected currentConfig: Config<Row, Search> = {};

  @ProvideReactive()
  protected dataList: Row[] = [];

  @ProvideReactive()
  protected searchHelperInstance!: SearchHelper<Row, Search>;

  @ProvideReactive()
  protected paginationInfo: PaginationData = {
    currentPage: 1,
    perPage: 10,
    currentPageSize: 10,
    total: 0,
    pageAmount: 0,
  };

  created(): void {
    this.$set(
      this,
      "currentConfig",
      merge({}, globalConfig.globalConfig, this.config)
    );

    this.paginationInfo.perPage =
      (this.currentConfig.requestPageConfig?.pageSizes &&
        this.currentConfig.requestPageConfig?.pageSizes[0]) ||
      10;

    this.searchHelperInstance = new SearchHelper<Row, Search>(
      this.currentConfig,
      this.paginationInfo
    );
  }

  async mounted(): Promise<void> {
    if (this.currentConfig.getListAtCreated !== false) {
      await this.getList();
    }

    this.setEventListener();
  }

  beforeDestroy(): void {
    this.removeEventListener();
  }

  public async getList(): Promise<void> {
    if (typeof this.currentConfig.getListFunc !== "function") {
      throw new SyntaxError("The config => getListFunc is not a function");
    } else {
      const res = await this.currentConfig.getListFunc(
        this.searchHelperInstance.mergeRequestParams() as Search
      );

      this.dataList = res[this.currentConfig.receivePageConfig!.list] as Row[];

      this.currentConfig.receivePageConfig?.currentPage &&
        (this.paginationInfo.currentPage = res[
          this.currentConfig.receivePageConfig.currentPage
        ] as number);

      this.currentConfig.receivePageConfig?.perPage &&
        (this.paginationInfo.perPage = res[
          this.currentConfig.receivePageConfig.perPage
        ] as number);

      this.currentConfig.receivePageConfig?.currentPageSize &&
        (this.paginationInfo.currentPageSize = res[
          this.currentConfig.receivePageConfig.currentPageSize
        ] as number);

      this.currentConfig.receivePageConfig?.total &&
        (this.paginationInfo.total = res[
          this.currentConfig.receivePageConfig.total
        ] as number);

      this.currentConfig.receivePageConfig?.pages &&
        (this.paginationInfo.pageAmount = res[
          this.currentConfig.receivePageConfig.pages
        ] as number);
    }
  }

  public setEventListener(): void {
    window.addEventListener("current-page-change", this.onCurrentPageChange);
    window.addEventListener("page-size-change", this.onPageSizeChange);
  }

  public removeEventListener(): void {
    window.removeEventListener("current-page-change", this.onCurrentPageChange);
    window.removeEventListener("page-size-change", this.onPageSizeChange);
  }

  public onCurrentPageChange(evt: CustomEvent<{ page: number }>): void {
    this.paginationInfo.currentPage = evt.detail.page;
    this.getList().then(() => {
      // ... do sth
    });
  }

  public onPageSizeChange(evt: CustomEvent<{ size: number }>): void {
    this.paginationInfo.perPage = evt.detail.size;
    this.getList().then(() => {
      // ... do sth
    });
  }
}
