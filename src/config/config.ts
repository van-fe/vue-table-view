import type { Column } from "./column";
import type { AdvancedSearch } from "./advancedSearch";
import type { EditForm } from "./create";
import type { ReceivePageFieldConfig, RequestPageFieldConfig } from "./page";
import type {
  AvailableLanguage,
  CheckboxChangedRecords,
  Dictionary,
} from "./common";
import type { OperationConfig } from "./operation";

export type ListDataWrapper<Row> = {
  [key: string]: number | Row[];
};

export type GetListFunc<Search extends Dictionary, Row> = (
  search: Search
) => Promise<ListDataWrapper<Row>>;

export interface InsideGlobalConfig {
  language: AvailableLanguage;
  stripe: boolean;
  border: boolean;
  round: boolean;
  searchButtonText: string;
  resetSearchButtonText: string;
  expandButtonText: string;
  getListAfterReset: boolean;
  needCustomColumnDisplay: boolean;
  customColumnDisplayStored: boolean;
  loadingDebounceTime: number;
  advancedSearchNeedExpand: boolean;
  emptyText: string;
  requestPageConfig: RequestPageFieldConfig;
  receivePageConfig: ReceivePageFieldConfig;
  operationConfig: OperationConfig<unknown>;
}

export type GlobalConfigType = Partial<InsideGlobalConfig>;

export interface InsideConfig<Row, Search extends Dictionary> {
  /**
   * appearance
   */
  height: string; // default 100%. You can set percentage / has unit number
  stripe: boolean;
  border: boolean;
  round: boolean;
  needPagination: boolean; // true
  searchButtonText: string; // "搜索"
  resetSearchButtonText: string; // "清空"
  expandButtonText: string; // "展开"
  needCustomColumnDisplay: boolean; // false
  customColumnDisplayStored: boolean; // true
  loadingDebounceTime: number; // 0.5s
  emptyText: string; // "暂无数据"
  needCheckbox: boolean;
  needRadio: boolean;
  needSeq: boolean;

  /**
   * events
   */
  onRadioChange: (row: Row) => void;
  onCheckboxChange: (records: CheckboxChangedRecords<Row>) => void;

  /**
   * get-list
   */
  getListAtCreated: boolean; // true
  readonly getListUrl: string; // retain
  getListFunc: GetListFunc<Search, Row>;
  requestPageConfig: RequestPageFieldConfig;
  receivePageConfig: ReceivePageFieldConfig;
  getListAfterReset: boolean; // true

  /**
   * operations
   */
  useOperations: boolean; // true
  operationConfig: OperationConfig<Row>;

  /**
   * create/edit
   */
  useBuildInCreate: boolean; // true
  editForm: EditForm<Row>[];

  /**
   * column
   */
  columns: Column<Row>[];

  /**
   * advanced-search
   */
  useAdvancedSearch: boolean; // true. If you need reuse search page in dialog, this option will help you.
  advancedSearchNeedExpand: boolean; // false
  advancedSearch: AdvancedSearch<Search, Row>[];
}

export type Config<Row, Search extends Dictionary> = Partial<
  InsideConfig<Row, Search>
>;
