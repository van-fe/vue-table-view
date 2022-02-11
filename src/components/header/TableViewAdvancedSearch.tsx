import { Component, Emit, InjectReactive, Vue } from "vue-property-decorator";
import type { Config, Dictionary, PaginationData } from "@/config";
import type { VNode } from "vue";
import { Button, Col, Form, Row as ElRow } from "element-ui";
import FormItem from "../form/FormItem/FormItemComponent";
import { cloneDeep } from "lodash-es";

@Component({
  components: {
    "el-row": ElRow,
    "el-col": Col,
    "el-button": Button,
    "el-form": Form,
    FormItem,
  },
})
export class TableViewAdvancedSearch<
  Row,
  Search extends Dictionary
> extends Vue {
  @InjectReactive() currentConfig!: Config<Row, Search>;
  @InjectReactive() paginationInfo!: PaginationData;

  public defaultRequestParams: Dictionary = {};
  public search: Dictionary = {};
  public isExpand = false;

  public created(): void {
    this.isExpand = !(this.currentConfig.advancedSearchNeedExpand ?? true);
    this.createDefaultRequestParams();
    this.$set(this, "search", this.mergeRequestParams(false));
  }

  public render(): VNode {
    return (
      <div class="table-view__header-advanced-search">
        <el-form
          class={this.isExpand ? "expanded" : "collapsed"}
          label-width="120px"
          label-suffix=":"
          vOn:submit_native_prevent={this.doSearch}
        >
          <el-col span={16} class={["search-form__wrapper"]}>
            {...this.createSearchFormItems(3)}
          </el-col>
          <el-col span={6} offset={2} class="search-button__wrapper">
            {this.currentConfig.advancedSearchNeedExpand ? (
              <el-button type="text" on-click={this.doExpand}>
                {this.currentConfig?.expandButtonText}
                <i class="dropdown el-icon-arrow-down el-icon--right" />
              </el-button>
            ) : undefined}
            <el-button type="primary" native-type="submit" size="small">
              {this.currentConfig?.searchButtonText}
            </el-button>
            <el-button size="small" on-click={this.doReset}>
              {this.currentConfig?.resetSearchButtonText}
            </el-button>
          </el-col>
        </el-form>
      </div>
    );
  }

  public createSearchFormItems(chunkIn = 2): VNode[] {
    const chunks: VNode[][] = [];
    let tempChunks: VNode[] = [];
    const defaultSpan = 24 / chunkIn;
    let currSpan = 0;

    (this.currentConfig.advancedSearch || []).forEach((item) => {
      if (
        currSpan + (item.colSpan || defaultSpan) + (item.colOffset || 0) >
        24
      ) {
        chunks.push(tempChunks);
        tempChunks = [];
        currSpan = 0;
      } else {
        currSpan += (item.colSpan || defaultSpan) + (item.colOffset || 0);

        tempChunks.push(
          <el-col
            span={item.colSpan || defaultSpan}
            offset={item.colOffset || 0}
          >
            <form-item
              value={this.search[item.field]}
              info={item}
              data={this.search}
              label-col={item.labelWidth ?? "auto"}
              on-input={(val: unknown) => (this.search[item.field] = val)}
            />
          </el-col>
        );
      }
    });

    tempChunks.length && chunks.push(tempChunks);

    return chunks.map((nodes: VNode[]) => (
      <el-row gutter={10}>{...nodes}</el-row>
    ));
  }

  private createDefaultRequestParams(): void {
    if (Object.keys(this.defaultRequestParams).length === 0) {
      this.currentConfig.advancedSearch?.forEach((item) => {
        this.$set(this.defaultRequestParams, item.field, item.default);
      });
    }
  }

  public mergeRequestParams(withPageInfo = true): Dictionary {
    const search: Dictionary = cloneDeep(this.defaultRequestParams);

    if (withPageInfo) {
      search[this.currentConfig.requestPageConfig!.perPage] =
        this.paginationInfo.perPage;
      search[this.currentConfig.requestPageConfig!.currentPage] =
        this.paginationInfo.currentPage;
    }

    return { ...search, ...this.search };
  }

  public doExpand(): void {
    this.isExpand = !this.isExpand;
  }

  @Emit("do-search")
  public doSearch(e: Event): Dictionary {
    e.stopPropagation();
    return this.search;
  }

  @Emit("do-reset")
  public doReset(): boolean {
    this.search = cloneDeep(this.defaultRequestParams);
    if (this.currentConfig.getListAfterReset) {
      this.$emit("do-search", this.search);
    }
    return true;
  }
}
