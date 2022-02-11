import type { SelectData } from "./select";
import type { CascaderData } from "./cascader";
import type { VNode } from "vue";
import type { BaseFormType } from "./common";
import type {
  AdvancedSearchDateTimePickerExtra,
  AdvancedSearchDateTimeRangePickerExtra,
  AdvancedSearchSelectExtra,
  AdvancedSearchStringExtra,
} from "./advancedSearch";

export interface EditFormExtraMap<Row> {
  string: EditFormStringExtra;
  textarea: EditFormStringExtra;
  number: EditFormNumberExtra;
  select: EditFormSelectExtra;
  cascader: EditFormCascaderExtra;
  "remote-search": EditFormRemoteSearchExtra<Row>;
  "date-picker": EditFormDateTimePickerExtra;
  "time-picker": EditFormDateTimePickerExtra;
  "date-time-picker": EditFormDateTimePickerExtra;
  "date-range-picker": EditFormDateTimeRangePickerExtra;
  "time-range-picker": EditFormDateTimeRangePickerExtra;
  "date-time-range-picker": EditFormDateTimeRangePickerExtra;
}

export interface EditForm<
  Row,
  Type extends keyof EditFormExtraMap<Row> = BaseFormType
> {
  field: keyof Row;
  title: string;
  type: Type;
  tooltipText?: string;
  placeholder?: boolean | string | ((value: Row) => string); // if true, same as title
  disabled?: ((value: unknown, row: Row) => boolean) | boolean;
  listenFieldsToSearch?: string[];
  listenFieldsChangeToReset?: string[];
  defaultValueSearchFunc?: (val: unknown) => Promise<SelectData | undefined>;
  beforeLoad?: <T>(value: T) => T;
  beforeSubmit?: <T>(value: T) => T;
  render?: (value: Row, callback: (result: unknown) => void) => VNode;
  extraConfig?: EditFormExtraMap<Row>[Type];
}

/**
 * for string
 */
export type EditFormStringExtra = AdvancedSearchStringExtra;

/**
 * for select
 */
export type EditFormSelectExtra = AdvancedSearchSelectExtra;

/**
 * for cascader
 */
export interface EditFormCascaderExtra {
  cascaderData?: CascaderData[];
  max?: number;
  min?: number;
  multiple?: boolean;
  async?: boolean;
  asyncFunc?: (selectedOptions?: unknown) => Promise<CascaderData[]>;
}

/**
 * for number
 */
export interface EditFormNumberExtra {
  min?: number;
  max?: number;
}

/**
 * for date-picker/time-picker/date-time-picker
 */
export type EditFormDateTimePickerExtra = AdvancedSearchDateTimePickerExtra;

/**
 * for date-range-picker/time-range-picker/date-time-range-picker
 */
export type EditFormDateTimeRangePickerExtra =
  AdvancedSearchDateTimeRangePickerExtra;

/**
 * for remote-search
 */
export interface EditFormRemoteSearchExtra<Row> {
  searchFunc?: (searchVal: string, row: Row) => Promise<SelectData[]>;
  debounce?: number; // millisecond
}
