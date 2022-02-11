export declare enum Align {
    Left = "left",
    Center = "center",
    Right = "right"
}
export declare enum Fixed {
    Left = "left",
    Right = "right"
}
export declare enum BaseFormType {
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
    DateTimeRangePicker = "date-time-range-picker"
}
export declare enum AvailableLanguage {
    ZhCn = 0,
    En = 1
}
export declare type Dictionary<T = any> = {
    [key: string]: T;
};
export interface CheckboxChangedRecords<T> {
    records: T[];
    row: T;
}
