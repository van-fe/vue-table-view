import FormMixin from "./FormMixin";
import type { VNode } from "vue";
import type { BaseFormType } from "@/config";
export default class TimeRangeForm extends FormMixin<BaseFormType.TimeRangePicker> {
    get format(): string;
    get currentPlaceholder(): [string, string];
    render(): VNode;
}
