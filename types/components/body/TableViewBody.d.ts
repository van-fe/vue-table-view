import { Vue } from "vue-property-decorator";
import type { Column, Config, ListDataWrapper } from "@/config";
import type { VNode } from "vue";
import type { CheckboxChangedRecords, Dictionary } from "../..";
import type { ColumnFormatterMethodParams } from "vxe-table";
import type { NormalizedScopedSlot } from "vue/types/vnode";
export declare class TableViewBody<Row, Search extends Dictionary> extends Vue {
    currentConfig: Config<Row, Search>;
    dataList: ListDataWrapper<Row>;
    render(): VNode;
    specialColumnRender(): Array<VNode | undefined>;
    columnRender(): VNode[];
    columnFormatter({ cellValue, row }: ColumnFormatterMethodParams, column: Column<Row>): string;
    columnScopedSlots(column: Column<Row>): Record<string, NormalizedScopedSlot | undefined>;
    onRadioChange(row: Row): void;
    onCheckboxChange(records: CheckboxChangedRecords<Row>): void;
}
