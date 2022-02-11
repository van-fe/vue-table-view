import FormMixin from "./FormMixin";
import type { VNode } from "vue";
import type { BaseFormType } from "@/config";
export default class TimeForm extends FormMixin<BaseFormType.TimePicker> {
    get format(): string;
    get currentPlaceholder(): string;
    render(): VNode;
}
