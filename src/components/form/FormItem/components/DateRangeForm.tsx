import Component from "vue-class-component";
import FormMixin from "./FormMixin";
import type { VNode } from "vue";
import { BaseFormType } from "@/config";
import { DatePicker } from "element-ui";

@Component({
  components: {
    "el-date-picker": DatePicker,
  },
})
export default class DateRangeForm extends FormMixin<
  BaseFormType.DateRangePicker | BaseFormType.DateTimeRangePicker
> {
  public get showTime(): boolean {
    return this.info.type === BaseFormType.DateTimeRangePicker;
  }

  public get format(): string {
    return this.info.extraConfig?.format ?? "YYYY-MM-DD HH:mm";
  }

  public get pickerType(): string {
    return this.info.type === BaseFormType.DateRangePicker ? "daterange" : "";
  }

  public get currentPlaceholder(): string[] {
    return this.placeholder ? (this.placeholder as string[]) : ["Start", "End"];
  }

  public render(): VNode {
    return (
      <el-date-picker
        value={this.currentValue}
        class="full-width"
        type={this.pickerType}
        allow-clear={true}
        show-time={this.showTime}
        start-placeholder={this.currentPlaceholder[0]}
        end-placeholder={this.currentPlaceholder[1]}
        range-separator={this.info.extraConfig?.rangeSeparator || "~"}
        value-format={this.format}
        format={this.format}
        on-input={(val: string) => (this.currentValue = val)}
      />
    );
  }
}
