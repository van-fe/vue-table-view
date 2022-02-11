import FormMixin from "./FormMixin";
import type { VNode } from "vue";
import type { BaseFormType } from "@/config";
export default class StringForm extends FormMixin<BaseFormType.String | BaseFormType.Textarea> {
    render(): VNode;
}
