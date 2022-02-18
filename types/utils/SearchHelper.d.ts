import { Config, Dictionary, PaginationData, Records } from "@/config";
export declare class SearchHelper<Row extends Records, Search extends Dictionary> {
    config: Config<Row, Search>;
    paginationInfo: PaginationData;
    search: Search;
    defaultRequestParams: Search;
    constructor(config: Config<Row, Search>, paginationInfo: PaginationData);
    createDefaultRequestParams(): void;
    mergeRequestParams(withPageInfo?: boolean): Search;
    reset(): void;
}
