export interface ReceivePageFieldConfig {
  currentPage: string; // 'pageNum'
  perPage: string; // 'pageSize'
  currentPageSize: string; // 'size'
  total: string; // 'total'
  pages: string; // 'pages'
  list: string; // 'list'
}

export interface RequestPageFieldConfig {
  currentPage: string; // 'page_num'
  perPage: string; // 'page_size'
  pageSizes?: number[];
}

export interface PaginationData {
  currentPage: number;
  perPage: number;
  currentPageSize: number;
  total: number;
  pageAmount: number;
}
