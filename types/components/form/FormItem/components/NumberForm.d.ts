import FormMixin from "./FormMixin";
import type { VNode } from "vue";
import type { BaseFormType } from "@/config";
export default class NumberForm extends FormMixin<BaseFormType.Number> {
    render(): VNode;
}
