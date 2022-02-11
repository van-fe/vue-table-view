import FormMixin from "./FormMixin";
import type { VNode } from "vue";
import type { BaseFormType, CascaderData } from "@/config";
export default class CascaderForm extends FormMixin<BaseFormType.Cascader> {
    cascaderOption: CascaderData[];
    hasInitOption: boolean;
    onCurrentValueChanged(val: string[]): Promise<void>;
    onCascaderOptionChanged(): Promise<void>;
    render(): VNode;
    created(): Promise<void>;
    setCascaderOptions(): Promise<void>;
    /**
     * maybe has some error
     * @param selectedOptions
     */
    loadData(selectedOptions: CascaderData[]): Promise<void>;
    checkDynamicLastChildExists(val: string[]): Promise<void>;
}
