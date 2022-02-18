import type { VNode, VueConstructor } from "vue";
import type { GlobalConfigType } from "@/config";
import TableViewMixin from "../mixin/TableViewMixin";
declare const TableView_base: import("vue-class-component/lib/declarations").VueClass<TableViewMixin<import("@/config").Records<any>, import("@/config").Dictionary<any>>>;
export declare class TableView extends TableView_base {
    static install: (Vue: VueConstructor, option: GlobalConfigType) => void;
    render(): VNode;
}
export {};
