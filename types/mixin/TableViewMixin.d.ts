import type { Config, Dictionary, PaginationData } from "@/config";
import Vue from "vue";
import { TableViewHeader, TableViewBody, TableViewFooter } from "@/components";
export default class TableViewMixin<Row, Search extends Dictionary> extends Vue {
    $refs: Vue["$refs"] & {
        header: TableViewHeader<Row, Search>;
        body: TableViewBody<Row, Search>;
        footer: TableViewFooter<Row, Search>;
    };
    protected config: Config<Row, Search>;
    protected currentConfig: Config<Row, Search>;
    protected dataList: Row[];
    protected paginationInfo: PaginationData;
    created(): void;
    mounted(): Promise<void>;
    beforeDestroy(): void;
    getList(): Promise<void>;
    setEventListener(): void;
    removeEventListener(): void;
    onCurrentPageChange(evt: CustomEvent<{
        page: number;
    }>): void;
    onPageSizeChange(evt: CustomEvent<{
        size: number;
    }>): void;
}
