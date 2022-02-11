import FormMixin from "./FormMixin";
import type { VNode } from "vue";
import { BaseFormType } from "@/config";
export default class DateRangeForm extends FormMixin<BaseFormType.DateRangePicker | BaseFormType.DateTimeRangePicker> {
    get showTime(): boolean;
    get format(): string;
    get pickerType(): string;
    get currentPlaceholder(): string[];
    render(): VNode;
}
