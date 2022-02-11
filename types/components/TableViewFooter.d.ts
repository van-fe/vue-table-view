import { Vue } from "vue-property-decorator";
import type { Config, Dictionary, PaginationData } from "@/config";
import type { VNode } from "vue";
export declare class TableViewFooter<Row, Search extends Dictionary> extends Vue {
    currentConfig: Config<Row, Search>;
    paginationInfo: PaginationData;
    render(): VNode;
    onCurrentChange(page: number): void;
    onSizeChange(size: number): void;
}
