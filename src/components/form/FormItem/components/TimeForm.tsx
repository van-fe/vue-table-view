import Component from "vue-class-component";
import FormMixin from "./FormMixin";
import type { VNode } from "vue";
import type { BaseFormType } from "@/config";
import { TimePicker } from "element-ui";

@Component({
  components: {
    "el-time-picker": TimePicker,
  },
})
export default class TimeForm extends FormMixin<BaseFormType.TimePicker> {
  public get format(): string {
    return this.info.extraConfig?.format ?? "HH:mm";
  }

  public get currentPlaceholder(): string {
    return this.placeholder ? (this.placeholder as string) : "Please Choose";
  }

  public render(): VNode {
    return (
      <el-time-picker
        value={this.currentValue}
        class="full-width"
        placeholder={this.currentPlaceholder}
        value-format={this.format}
        format={this.format}
        on-input={(val: string) => (this.currentValue = val)}
      />
    );
  }
}
