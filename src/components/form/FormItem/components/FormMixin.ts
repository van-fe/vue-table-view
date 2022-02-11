import Vue from "vue";
import { Emit, Prop, Watch } from "vue-property-decorator";
import Component from "vue-class-component";
import type { BaseFormType, Dictionary, EditFormExtraMap } from "@/config";
import type { EditForm } from "@/config/create";

@Component
export default class FormMixin<
  Type extends keyof EditFormExtraMap<unknown> = BaseFormType
> extends Vue {
  @Prop({
    type: Object,
    default() {
      return {};
    },
  })
  public info!: EditForm<unknown, Type>;

  @Prop({
    type: Object,
    default() {
      return {};
    },
  })
  public data!: Dictionary;

  @Prop({
    required: true,
    default: "",
  })
  public value: unknown | undefined;

  public get placeholder(): string | string[] {
    if (this.info && typeof this.info.placeholder !== "undefined") {
      if (typeof this.info.placeholder === "function") {
        return this.info.placeholder(this.info);
      } else {
        return this.info.placeholder === true
          ? this.info.title
          : (this.info.placeholder as string);
      }
    } else {
      return "";
    }
  }

  public get disabled(): boolean {
    return this.info.disabled === undefined
      ? false
      : typeof this.info.disabled === "function"
      ? this.info.disabled(this.currentValue, this.data)
      : this.info.disabled;
  }

  public get comparedData(): Dictionary {
    return this.comparedDataInstance;
  }

  public set comparedData(val: Dictionary) {
    if (JSON.stringify(val) !== JSON.stringify(this.comparedDataInstance)) {
      this.$set(this, "comparedDataInstance", Object.assign({}, val));
    }
  }

  public comparedDataInstance = {};
  public hasFormatValue = false;
  public currentValue: unknown = null;

  @Emit("input")
  @Watch("currentValue")
  public onCurrentValueChanged(val: unknown): unknown {
    this.afterCurrentValueChanged();
    return val;
  }

  @Watch("value")
  public onValueChanged(val: unknown | null): void {
    this.afterValueChanged();
    this.setValue(val);
  }

  @Watch("data", {
    immediate: true,
    deep: true,
  })
  public onDataChanged(val: Dictionary): void {
    this.comparedData = val;
  }

  public created(): void {
    this.setValue();
  }

  public setValue(val: unknown | null = null): void {
    if (
      !this.hasFormatValue &&
      this.info &&
      this.info.beforeLoad &&
      typeof this.info.beforeLoad === "function"
    ) {
      this.currentValue = this.info.beforeLoad(this.value);
      this.hasFormatValue = true;
    } else {
      this.currentValue = val ?? this.value;
    }
  }

  public noticeInit(): void {
    // do init
  }

  public noticeHide(): void {
    // do init
  }

  /**
   * @abstract
   */
  public afterValueChanged(): void {
    // console.log('after value changed!')
    // do sth...
  }

  /**
   * @abstract
   */
  public afterCurrentValueChanged(): void {
    // console.log('after currentValue changed!')
    // do sth...
  }
}
