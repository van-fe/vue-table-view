import FormMixin from "./FormMixin";
import type { VNode } from "vue";
import type { AdvancedSearchSelectExtra, BaseFormType, SelectData } from "@/config";
export default class SelectForm extends FormMixin<BaseFormType.Select> {
    get mode(): string;
    selectData: SelectData[];
    loading: boolean;
    onExtraConfigChanged(val: AdvancedSearchSelectExtra): Promise<void>;
    loadSelectData(search?: string): Promise<void>;
    render(): VNode;
}
