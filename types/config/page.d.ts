export interface ReceivePageFieldConfig {
    currentPage: string;
    perPage: string;
    currentPageSize: string;
    total: string;
    pages: string;
    list: string;
}
export interface RequestPageFieldConfig {
    currentPage: string;
    perPage: string;
    pageSizes?: number[];
}
export interface PaginationData {
    currentPage: number;
    perPage: number;
    currentPageSize: number;
    total: number;
    pageAmount: number;
}
