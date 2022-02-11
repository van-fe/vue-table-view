import { Vue } from "vue-property-decorator";
import type { Config, Dictionary, PaginationData } from "@/config";
import type { VNode } from "vue";
export declare class TableViewAdvancedSearch<Row, Search extends Dictionary> extends Vue {
    currentConfig: Config<Row, Search>;
    paginationInfo: PaginationData;
    defaultRequestParams: Dictionary;
    search: Dictionary;
    isExpand: boolean;
    created(): void;
    render(): VNode;
    createSearchFormItems(chunkIn?: number): VNode[];
    private createDefaultRequestParams;
    mergeRequestParams(withPageInfo?: boolean): Dictionary;
    doExpand(): void;
    doSearch(e: Event): Dictionary;
    doReset(): boolean;
}
