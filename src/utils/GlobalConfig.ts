import type { GlobalConfigType, InsideGlobalConfig } from "@/config";
import { AvailableLanguage } from "@/config";
import { merge } from "lodash-es";

class GlobalConfig {
  protected defaultConfig: InsideGlobalConfig = {
    language: AvailableLanguage.ZhCn,
    stripe: true,
    border: false,
    round: false,
    searchButtonText: "搜索",
    resetSearchButtonText: "清空",
    expandButtonText: "展开",
    emptyText: "暂无数据",
    getListAfterReset: true,
    needCustomColumnDisplay: false,
    customColumnDisplayStored: true,
    loadingDebounceTime: 0.5,
    advancedSearchNeedExpand: true,
    requestPageConfig: {
      currentPage: "pageNum",
      perPage: "pageSize",
    },
    receivePageConfig: {
      currentPage: "pageNum",
      perPage: "pageSize",
      currentPageSize: "size",
      total: "total",
      pages: "pages",
      list: "list",
    },
    operationConfig: {
      headerTitle: "操作",
    },
  };

  public get globalConfig(): InsideGlobalConfig {
    return this.defaultConfig;
  }

  public setConfig(option: GlobalConfigType): void {
    this.defaultConfig = merge({}, this.defaultConfig, option);
  }
}

export const globalConfig = new GlobalConfig();

export function defineVueTableViewGlobalOption(
  option: GlobalConfigType
): GlobalConfigType {
  return option;
}
