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
export default class StringForm extends FormMixin<
  BaseFormType.String | BaseFormType.Textarea
> {
  public render(): VNode {
    return (
      <div class="string__wrapper">
        <el-input
          value={this.currentValue}
          type={this.info.type}
          placeholder={this.placeholder}
          allow-clear={true}
          on-input={(val: string) => (this.currentValue = val)}
          suffix-icon={this.info.extraConfig?.suffixIcon}
          prefix-icon={this.info.extraConfig?.prefixIcon}
        />
      </div>
    );
  }
}
