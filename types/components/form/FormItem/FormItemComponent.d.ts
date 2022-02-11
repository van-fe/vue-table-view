import type { VNode, VueConstructor } from "vue";
import Vue from "vue";
import type { EditForm } from "@/config/create";
export default class FormItemComponent<Row> extends Vue {
    info: EditForm<Row>;
    data: {
        [index: string]: unknown;
    };
    value: unknown;
    isQuickView: boolean;
    required: boolean;
    currentValue: unknown | unknown[];
    get componentName(): VueConstructor | string;
    onValueChange(val: unknown): void;
    onCurrentValueChange(val: unknown): unknown;
    render(): VNode;
}
