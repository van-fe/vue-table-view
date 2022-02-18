import { Vue } from "vue-property-decorator";
import type { Config, Dictionary, PaginationData, Records } from "@/config";
import type { VNode } from "vue";
import { SearchHelper } from "@/utils";
export declare class TableViewAdvancedSearch<Row extends Records, Search extends Dictionary> extends Vue {
    currentConfig: Config<Row, Search>;
    paginationInfo: PaginationData;
    searchHelperInstance: SearchHelper<Row, Search>;
    isExpand: boolean;
    get search(): Search;
    created(): void;
    render(): VNode;
    createSearchFormItems(chunkIn?: number): VNode[];
    doExpand(): void;
    doSearch(e: Event): Dictionary;
    doReset(): boolean;
}
