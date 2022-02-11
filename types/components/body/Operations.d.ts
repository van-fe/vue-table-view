import { Vue } from "vue-property-decorator";
import type { Config, Dictionary, ListDataWrapper, Operation } from "@/config";
import type { VNode } from "vue";
import type { ColumnDefaultSlotParams } from "vxe-table";
export declare class Operations<Row, Search extends Dictionary> extends Vue {
    currentConfig: Config<Row, Search>;
    dataList: ListDataWrapper<Row>;
    render(): VNode;
    buttonRender(operation: Operation<Row>, scope: ColumnDefaultSlotParams): VNode;
    linkRender(operation: Operation<Row>, scope: ColumnDefaultSlotParams): VNode;
    moreRender(operation: Operation<Row>, scope: ColumnDefaultSlotParams): VNode;
    onClink(operation: Operation<Row>, scope: ColumnDefaultSlotParams): void;
    protected getOperationDisabledValue(operation: Operation<Row>, scope: ColumnDefaultSlotParams): boolean;
}
