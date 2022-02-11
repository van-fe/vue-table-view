import FormMixin from "./FormMixin";
import type { VNode } from "vue";
import { BaseFormType } from "@/config";
export default class DateForm extends FormMixin<BaseFormType.DatePicker | BaseFormType.DateTimePicker> {
    get type(): string;
    get format(): string;
    get currentPlaceholder(): string;
    render(): VNode;
}
