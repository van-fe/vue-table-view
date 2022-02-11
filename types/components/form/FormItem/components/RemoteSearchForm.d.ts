import FormMixin from "./FormMixin";
import type { VNode } from "vue";
import type { BaseFormType, Dictionary, SelectData } from "@/config";
export default class RemoteSearchForm extends FormMixin<BaseFormType.RemoteSearch> {
    selectData: SelectData[];
    currentSearchValue: string;
    hasInit: boolean;
    onComparedDataChange(val: Dictionary, old: Dictionary | undefined): void;
    render(): VNode;
    created(): void;
    noticeInit(): void;
    noticeHide(): void;
    handleSearch(val?: string): void;
    afterCurrentValueChanged(): void;
}
