import { Vue } from "vue-property-decorator";
import type { Config, Dictionary, Records } from "@/config";
import type { VNode } from "vue";
import { TableViewAdvancedSearch } from "@/components";
export declare class TableViewHeader<Row extends Records, Search extends Dictionary> extends Vue {
    $refs: Vue["$refs"] & {
        advancedSearch: TableViewAdvancedSearch<Row, Search>;
    };
    currentConfig: Config<Row, Search>;
    get showToolsBar(): boolean;
    render(): VNode;
}
