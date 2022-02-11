import Component from "vue-class-component";
import FormMixin from "./FormMixin";
import type { VNode } from "vue";
import { Watch } from "vue-property-decorator";
import { Cascader } from "element-ui";
import type { BaseFormType, CascaderData } from "@/config";

@Component({
  components: {
    "el-cascader": Cascader,
  },
})
export default class CascaderForm extends FormMixin<BaseFormType.Cascader> {
  public cascaderOption: CascaderData[] = [];
  public hasInitOption = false;

  @Watch("currentValue")
  public async onCurrentValueChanged(val: string[]): Promise<void> {
    if (val.length && val[val.length - 1] === "empty") {
      val = [];
    }
    await this.checkDynamicLastChildExists(val);
    this.$emit("input", val);
  }

  @Watch("cascaderOption", {
    deep: true,
  })
  public async onCascaderOptionChanged(): Promise<void> {
    if (!this.hasInitOption) {
      await this.checkDynamicLastChildExists(this.currentValue as string[]);
    }
  }

  public render(): VNode {
    return (
      <el-cascader
        value={this.currentValue}
        options={this.cascaderOption}
        expand-trigger="hover"
        change-on-select={false}
        placeholder={this.placeholder}
        load-data={this.loadData}
        on-input={(val: any) => (this.currentValue = val)}
      />
    );
  }

  public async created(): Promise<void> {
    super.created();
    await this.setCascaderOptions();
  }

  public async setCascaderOptions(): Promise<void> {
    if (this.info.extraConfig?.async === true) {
      this.cascaderOption = await this.info.extraConfig.asyncFunc!();
    } else if (this.info.extraConfig?.cascaderData) {
      this.cascaderOption = this.info.extraConfig.cascaderData;
    }
  }

  /**
   * maybe has some error
   * @param selectedOptions
   */
  public async loadData(selectedOptions: CascaderData[]): Promise<void> {
    if (this.info.extraConfig?.async === true) {
      if (typeof this.info.extraConfig.asyncFunc! !== "function") {
        this.$message.error(
          "The asynchronously loaded data passed in is not a function"
        );
      } else {
        const targetOption = selectedOptions[selectedOptions.length - 1];
        targetOption.loading = true;
        const data = await this.info.extraConfig.asyncFunc(
          selectedOptions.map((option) => option.value)
        );
        targetOption.loading = false;
        targetOption.children = data.length
          ? data
          : [
              {
                value: "empty",
                label: "EMPTY",
              },
            ];
        this.cascaderOption = [...this.cascaderOption];
      }
    }
  }

  public async checkDynamicLastChildExists(val: string[]): Promise<void> {
    if (this.info.extraConfig?.async === true && this.cascaderOption.length) {
      const firstLevel = this.cascaderOption.find(
        (item) => item.value === val[0]
      );
      if (firstLevel) {
        const secondLevel = firstLevel.children!.find(
          (item) => item.value === val[1]
        );
        if (secondLevel) {
          const thirdLevel = secondLevel.children!.find(
            (item) => item.value === val[2]
          );
          if (thirdLevel && !thirdLevel.children?.length) {
            const list = await this.info.extraConfig.asyncFunc!(
              val.slice(0, -1)
            );
            this.$set(thirdLevel, "children", list);
            this.hasInitOption = true;
          }
        }
      }
    } else {
      return Promise.resolve();
    }
  }
}
