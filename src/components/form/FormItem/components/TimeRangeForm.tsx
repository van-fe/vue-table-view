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
export default class TimeRangeForm extends FormMixin<BaseFormType.TimeRangePicker> {
  public get format(): string {
    return this.info.extraConfig?.format ?? "HH:mm";
  }

  public get currentPlaceholder(): [string, string] {
    return this.placeholder
      ? (this.placeholder as [string, string])
      : ["Start", "End"];
  }

  public render(): VNode {
    return (
      <el-time-picker
        value={this.currentValue}
        class="full-width"
        is-range={true}
        value-format={this.format}
        format={this.format}
        start-placeholder={this.currentPlaceholder[0]}
        end-placeholder={this.currentPlaceholder[1]}
        on-input={(val: string[]) => (this.currentValue = val)}
      />
    );
  }
}
