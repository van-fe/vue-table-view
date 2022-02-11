import Vue from "vue";
import type { BaseFormType, Dictionary, EditFormExtraMap } from "@/config";
import type { EditForm } from "@/config/create";
export default class FormMixin<Type extends keyof EditFormExtraMap<unknown> = BaseFormType> extends Vue {
    info: EditForm<unknown, Type>;
    data: Dictionary;
    value: unknown | undefined;
    get placeholder(): string | string[];
    get disabled(): boolean;
    get comparedData(): Dictionary;
    set comparedData(val: Dictionary);
    comparedDataInstance: {};
    hasFormatValue: boolean;
    currentValue: unknown;
    onCurrentValueChanged(val: unknown): unknown;
    onValueChanged(val: unknown | null): void;
    onDataChanged(val: Dictionary): void;
    created(): void;
    setValue(val?: unknown | null): void;
    noticeInit(): void;
    noticeHide(): void;
    /**
     * @abstract
     */
    afterValueChanged(): void;
    /**
     * @abstract
     */
    afterCurrentValueChanged(): void;
}
