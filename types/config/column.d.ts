import type { Align, Fixed } from "./common";
import type { CreateElement, VNode } from "vue";
import type { ColumnCellRenderParams } from "vxe-table/types/v-x-e-table";
export declare enum ColumnType {
    Default = 0,
    Expand = 1,
    Radio = 2,
    Checkbox = 3,
    Seq = 4
}
export declare type ColumnFormat<Row> = (curr: any, row: Row) => string;
export declare type ColumnRender<Row> = (h: CreateElement, curr: any, row: Row) => VNode;
export declare type ColumnClassNameCallback = (params: ColumnCellRenderParams) => string;
export interface Column<Row> {
    type?: ColumnType;
    field: keyof Row;
    title: string;
    titleAlign?: Align;
    align?: Align;
    tooltipText?: string;
    width?: string;
    minWidth?: string;
    fixed?: boolean | Fixed;
    sortable?: boolean;
    resizable?: boolean;
    showOverflow?: boolean;
    showHeaderOverflow?: boolean;
    className?: string | ColumnClassNameCallback;
    headerClassName?: string | ColumnClassNameCallback;
    /**
     * only for use custom display column
     */
    alwaysShow?: boolean;
    /**
     * custom format
     */
    format?: ColumnFormat<Row>;
    /**
     * custom render
     */
    render?: ColumnRender<Row>;
}
