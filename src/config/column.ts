import type { Align, Fixed } from "./common";
import type { CreateElement, VNode } from "vue";
import type { ColumnCellRenderParams } from "vxe-table/types/v-x-e-table";

export enum ColumnType {
  Default,
  Expand,
  Radio,
  Checkbox,
  Seq,
}

export type ColumnFormat<Row> = (curr: any, row: Row) => string;

export type ColumnRender<Row> = (
  h: CreateElement,
  curr: any,
  row: Row
) => VNode;

export type ColumnClassNameCallback = (
  params: ColumnCellRenderParams
) => string;

export interface Column<Row> {
  type?: ColumnType; // default
  field?: keyof Row & string;
  title?: string;
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
