export enum Align {
  Left = "left",
  Center = "center",
  Right = "right",
}

export enum Fixed {
  Left = "left",
  Right = "right",
}

export enum BaseFormType {
  String = "string",
  Textarea = "textarea",
  Number = "number",
  Select = "select",
  RemoteSearch = "remote-search",
  Cascader = "cascader",
  DatePicker = "date-picker",
  TimePicker = "time-picker",
  DateTimePicker = "date-time-picker",
  DateRangePicker = "date-range-picker",
  TimeRangePicker = "time-range-picker",
  DateTimeRangePicker = "date-time-range-picker",
}

export enum AvailableLanguage {
  ZhCn,
  En,
}

export type Dictionary<T = any> = {
  [key: string]: T;
};

export interface CheckboxChangedRecords<T> {
  records: T[];
  row: T;
}
