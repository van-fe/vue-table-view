import Component from "vue-class-component";
import FormMixin from "./FormMixin";
import type { VNode } from "vue";
import type { BaseFormType } from "@/config";
import { Input } from "element-ui";

@Component({
  components: {
    "el-input": Input,
  },
})
export default class NumberForm extends FormMixin<BaseFormType.Number> {
  public render(): VNode {
    return (
      <el-input
        value={this.currentValue}
        type="number"
        placeholder={this.placeholder}
        allow-clear={true}
        class="full-width"
        max={this.info.extraConfig?.max}
        min={this.info.extraConfig?.min}
        on-input={(val: number) => (this.currentValue = val)}
      />
    );
  }
}
