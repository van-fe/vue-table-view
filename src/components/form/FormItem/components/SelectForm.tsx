import FormMixin from "./FormMixin";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import type { VNode } from "vue";
import type {
  AdvancedSearchSelectExtra,
  BaseFormType,
  SelectData,
} from "@/config";
import { Option, Select } from "element-ui";

@Component({
  components: {
    "el-select": Select,
    "el-option": Option,
  },
})
export default class SelectForm extends FormMixin<BaseFormType.Select> {
  public get mode(): string {
    if (this.info.extraConfig?.multiple === true) {
      return "multiple";
    } else {
      return "default";
    }
  }

  public selectData: SelectData[] = [];
  public loading = false;

  @Watch("info.extraConfig", {
    immediate: true,
  })
  public async onExtraConfigChanged(
    val: AdvancedSearchSelectExtra
  ): Promise<void> {
    if (val.selectData) {
      this.selectData = val.selectData;
    }

    if (val.async) {
      await this.loadSelectData();
    }
  }

  public async loadSelectData(search = ""): Promise<void> {
    if (typeof this.info.extraConfig?.asyncFunc === "function") {
      this.loading = true;
      this.selectData = await this.info.extraConfig?.asyncFunc(search);
      this.loading = false;
    }
  }

  public render(): VNode {
    return (
      <el-select
        value={this.currentValue}
        mode={this.mode}
        placeholder={this.placeholder}
        allow-clear={true}
        class="full-width"
        reserve-keyword={this.info.extraConfig?.async || false}
        filterable={this.info.extraConfig?.filterable || false}
        remote={this.info.extraConfig?.async || false}
        remote-method={this.loadSelectData}
        on-input={(val: unknown) => (this.currentValue = val)}
        loading={this.loading}
        collapse-tags={this.info.extraConfig?.collapseTags || true}
      >
        {this.selectData.map((item) => (
          <el-option key={item.label} value={item.value} label={item.label}>
            {item.label}
          </el-option>
        ))}
      </el-select>
    );
  }
}
