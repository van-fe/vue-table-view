import Component from "vue-class-component";
import FormMixin from "./FormMixin";
import type { VNode } from "vue";
import { DatePicker } from "element-ui";
import { BaseFormType } from "@/config";

@Component({
  components: {
    "el-date-picker": DatePicker,
  },
})
export default class DateForm extends FormMixin<
  BaseFormType.DatePicker | BaseFormType.DateTimePicker
> {
  public get type(): string {
    return this.info.type === BaseFormType.DateTimePicker ? "datetime" : "date";
  }

  public get format(): string {
    return this.info.extraConfig?.format ?? "YYYY-MM-DD HH:mm";
  }

  public get currentPlaceholder(): string {
    return this.placeholder ? (this.placeholder as string) : "选择日期时间";
  }

  public render(): VNode {
    return (
      <el-date-picker
        value={this.currentValue}
        class="full-width"
        type={this.type}
        allow-clear={true}
        placeholder={this.currentPlaceholder}
        value-format={this.format}
        format={this.format}
        picker-options={this.info.extraConfig?.pickerOptions || {}}
        on-input={(val: string) => (this.currentValue = val)}
      />
    );
  }
}
