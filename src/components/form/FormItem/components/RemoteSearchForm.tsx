import Component from "vue-class-component";
import FormMixin from "./FormMixin";
import type { VNode } from "vue";
import { debounce } from "lodash-es";
import { Watch } from "vue-property-decorator";
import type { BaseFormType, Dictionary, SelectData } from "@/config";
import { Option, Select } from "element-ui";

@Component({
  components: {
    ElSelect: Select,
    ElOption: Option,
  },
})
export default class RemoteSearchForm extends FormMixin<BaseFormType.RemoteSearch> {
  public selectData: SelectData[] = [];
  public currentSearchValue = "";
  public hasInit = false;

  @Watch("comparedData", {
    immediate: true,
    deep: true,
  })
  public onComparedDataChange(
    val: Dictionary,
    old: Dictionary | undefined
  ): void {
    if (
      this.info.listenFieldsToSearch &&
      this.info.listenFieldsToSearch.length
    ) {
      if (old === undefined) {
        this.handleSearch(this.currentSearchValue);
      } else {
        let isDiff = false;
        this.info.listenFieldsToSearch.forEach((field) => {
          if (val[field] !== old[field]) {
            isDiff = true;
          }
        });

        if (isDiff) {
          this.handleSearch(this.currentSearchValue);
        }
      }
    }

    if (
      this.info.listenFieldsChangeToReset &&
      this.info.listenFieldsChangeToReset.length
    ) {
      if (old === undefined) {
        this.handleSearch(this.currentSearchValue);
      } else if (this.hasInit) {
        let isDiff = false;
        this.info.listenFieldsChangeToReset.forEach((field) => {
          if (val[field] !== old[field]) {
            isDiff = true;
          }
        });

        if (isDiff) {
          this.currentValue = "";
        }
      }
    }
  }

  public render(): VNode {
    return (
      <el-select
        value={this.currentValue}
        placeholder={this.placeholder}
        allow-clear={true}
        show-search={true}
        default-active-first-option={false}
        show-arrow={false}
        filter-option={false}
        on-search={this.handleSearch}
        disabled={this.disabled}
        on-input={(val: string) => (this.currentValue = val)}
      >
        {...this.selectData.map((item) => {
          return (
            <el-select-option
              key={item.value}
              value={item.value}
              label={item.label}
            >
              {item.label}
            </el-select-option>
          );
        })}
      </el-select>
    );
  }

  public created(): void {
    super.created();
    this.handleSearch();
  }

  public noticeInit(): void {
    super.noticeInit();
    this.hasInit = true;
  }

  public noticeHide(): void {
    super.noticeHide();
    this.hasInit = false;
  }

  public handleSearch(val = ""): void {
    this.currentSearchValue = val;
    debounce((val = ""): void => {
      this.info.extraConfig?.searchFunc!(val, this.data).then((data) => {
        this.selectData = data;
      });
    }, this.info.extraConfig?.debounce ?? 500)(val);
  }

  public afterCurrentValueChanged(): void {
    if (typeof this.info.defaultValueSearchFunc === "function") {
      this.info
        .defaultValueSearchFunc(this.currentValue)
        .then((data: SelectData | undefined) => {
          if (
            data !== undefined &&
            !this.selectData.some((item) => item.value === data.value)
          ) {
            console.log(data);
            this.selectData.unshift(data);
          }
        });
    }
  }
}
