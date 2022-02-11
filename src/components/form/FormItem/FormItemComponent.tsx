import { Component, Emit, Prop, Watch } from "vue-property-decorator";
import type { VNode, VueConstructor } from "vue";
import Vue from "vue";
import { FormItem, Tooltip } from "element-ui";
import { BaseFormType } from "@/config";
import { FormItemComponents } from "./components";
import type { EditForm } from "@/config/create";

@Component({
  components: {
    FormItem,
    Tooltip,
    ...FormItemComponents,
  },
})
export default class FormItemComponent<Row> extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  public info!: EditForm<Row>;

  @Prop({
    type: Object,
    default() {
      return {};
    },
  })
  public data!: { [index: string]: unknown };

  @Prop({
    type: [String, Number, Array, Object],
    default: "",
  })
  public value: unknown;

  @Prop({
    type: Boolean,
    default: false,
  })
  public isQuickView!: boolean;

  @Prop({
    type: Boolean,
    default: false,
  })
  public required!: boolean;

  public currentValue: unknown | unknown[] = null;

  public get componentName(): VueConstructor | string {
    switch (this.info.type) {
      case BaseFormType.String:
      case BaseFormType.Textarea:
        return FormItemComponents.StringForm;
      case BaseFormType.Number:
        return FormItemComponents.NumberForm;
      case BaseFormType.Select:
        return FormItemComponents.SelectForm;
      case BaseFormType.DatePicker:
      case BaseFormType.DateTimePicker:
        return FormItemComponents.DateForm;
      case BaseFormType.TimePicker:
        return FormItemComponents.TimeForm;
      case BaseFormType.Cascader:
        return FormItemComponents.CascaderForm;
      case BaseFormType.DateRangePicker:
      case BaseFormType.DateTimeRangePicker:
        return FormItemComponents.DateRangeForm;
      case BaseFormType.TimeRangePicker:
        return FormItemComponents.TimeRangeForm;
      case BaseFormType.RemoteSearch:
        return FormItemComponents.RemoteSearchForm;
      default:
        return "";
    }
  }

  @Watch("value", {
    immediate: true,
  })
  public onValueChange(val: unknown): void {
    this.currentValue = val;
  }

  @Emit("input")
  @Watch("currentValue")
  public onCurrentValueChange(val: unknown): unknown {
    return val;
  }

  public render(): VNode {
    const Tag = this.componentName;
    return (
      <form-item
        label={this.info.title}
        required={this.required}
        prop={this.info.field}
      >
        <tooltip placement="topLeft">
          {this.info.tooltipText ? (
            <span v-html={this.info.tooltipText} slot="title" />
          ) : undefined}
          {this.isQuickView ? (
            <template>
              {[
                BaseFormType.String,
                BaseFormType.Textarea,
                BaseFormType.Number,
              ].includes(this.info.type) ? (
                <span v-html={this.currentValue} />
              ) : undefined}
            </template>
          ) : (
            <Tag
              ref="component"
              value={this.currentValue}
              info={this.info}
              data={this.data}
              on-input={(val: unknown) => (this.currentValue = val)}
            />
          )}
        </tooltip>
      </form-item>
    );
  }
}
