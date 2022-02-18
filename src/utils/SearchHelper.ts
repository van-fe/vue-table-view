import { Config, Dictionary, PaginationData, Records } from "@/config";
import { cloneDeep } from "lodash-es";

export class SearchHelper<Row extends Records, Search extends Dictionary> {
  config: Config<Row, Search>;
  paginationInfo: PaginationData;
  search: Search;
  defaultRequestParams: Search = {} as Search;

  constructor(config: Config<Row, Search>, paginationInfo: PaginationData) {
    this.config = config;
    this.paginationInfo = paginationInfo;
    this.createDefaultRequestParams();
    this.search = this.mergeRequestParams(false);
  }

  createDefaultRequestParams(): void {
    if (Object.keys(this.defaultRequestParams).length === 0) {
      this.config.advancedSearch?.forEach((item) => {
        this.defaultRequestParams[item.field] = item.default as any;
      });
    }
  }

  mergeRequestParams(withPageInfo = true): Search {
    const search: Search = cloneDeep(this.defaultRequestParams);

    if (withPageInfo) {
      search[this.config.requestPageConfig!.perPage as keyof Search] = this
        .paginationInfo.perPage as any;
      search[this.config.requestPageConfig!.currentPage as keyof Search] = this
        .paginationInfo.currentPage as any;
    }

    return { ...search, ...this.search };
  }

  reset(): void {
    this.search = cloneDeep(this.defaultRequestParams);
  }
}
