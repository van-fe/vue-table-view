import type { Column } from "./column";
import type { AdvancedSearch } from "./advancedSearch";
import type { EditForm } from "./create";
import type { ReceivePageFieldConfig, RequestPageFieldConfig } from "./page";
import type { AvailableLanguage, CheckboxChangedRecords, Dictionary } from "./common";
import type { OperationConfig } from "./operation";
export declare type ListDataWrapper<Row> = {
    [key: string]: number | Row[];
};
export declare type GetListFunc<Search extends Dictionary, Row> = (search: Search) => Promise<ListDataWrapper<Row>>;
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
export declare type GlobalConfigType = Partial<InsideGlobalConfig>;
export interface InsideConfig<Row, Search extends Dictionary> {
    /**
     * appearance
     */
    height: string;
    stripe: boolean;
    border: boolean;
    round: boolean;
    needPagination: boolean;
    searchButtonText: string;
    resetSearchButtonText: string;
    expandButtonText: string;
    needCustomColumnDisplay: boolean;
    customColumnDisplayStored: boolean;
    loadingDebounceTime: number;
    emptyText: string;
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
    getListAtCreated: boolean;
    readonly getListUrl: string;
    getListFunc: GetListFunc<Search, Row>;
    requestPageConfig: RequestPageFieldConfig;
    receivePageConfig: ReceivePageFieldConfig;
    getListAfterReset: boolean;
    /**
     * operations
     */
    useOperations: boolean;
    operationConfig: OperationConfig<Row>;
    /**
     * create/edit
     */
    useBuildInCreate: boolean;
    editForm: EditForm<Row>[];
    /**
     * column
     */
    columns: Column<Row>[];
    /**
     * advanced-search
     */
    useAdvancedSearch: boolean;
    advancedSearchNeedExpand: boolean;
    advancedSearch: AdvancedSearch<Search, Row>[];
}
export declare type Config<Row, Search extends Dictionary> = Partial<InsideConfig<Row, Search>>;
