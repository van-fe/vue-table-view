import { Component, InjectReactive, Vue } from "vue-property-decorator";
import type { Column, Config, ListDataWrapper } from "@/config";
import type { VNode } from "vue";
import type { CheckboxChangedRecords, Dictionary } from "../..";
import { Fixed } from "@/config";
import { Operations } from "@/components/body/Operations";
import type { ColumnFormatterMethodParams } from "vxe-table";
import type { NormalizedScopedSlot } from "vue/types/vnode";

@Component({
  components: {
    Operations,
  },
})
export class TableViewBody<Row, Search extends Dictionary> extends Vue {
  @InjectReactive() currentConfig!: Config<Row, Search>;
  @InjectReactive() dataList!: ListDataWrapper<Row>;

  public render(): VNode {
    return (
      <div class="table-view__body">
        <vxe-table
          height="100%"
          data={this.dataList}
          stripe={this.currentConfig.stripe}
          border={this.currentConfig.border}
          round={this.currentConfig.round}
          empty-text={this.currentConfig.emptyText}
          on-checkbox-all={this.onCheckboxChange}
          on-radio-change={this.onRadioChange}
          on-checkbox-change={this.onCheckboxChange}
        >
          {...this.specialColumnRender()}
          {this.columnRender()}
          <operations />
        </vxe-table>
      </div>
    );
  }

  public specialColumnRender(): Array<VNode | undefined> {
    return [
      this.currentConfig.needCheckbox ? (
        <vxe-column type="checkbox" width="40" fixed="left" align="center" />
      ) : undefined,
      this.currentConfig.needRadio ? (
        <vxe-column type="radio" width="40" fixed="left" align="center" />
      ) : undefined,
      this.currentConfig.needSeq ? (
        <vxe-column type="seq" title="编号" width="80" fixed="left" />
      ) : undefined,
    ];
  }

  public columnRender(): VNode[] {
    return (this.currentConfig.columns || []).map((column, index) => {
      if (index === 0) {
        return (
          <vxe-column
            field={column.field}
            title={column.title}
            fixed={column.fixed === true ? Fixed.Left : column.fixed}
            type={column.type}
            width={column.width}
            min-width={column.minWidth}
            align={column.align}
            header-align={column.titleAlign}
            resizable={column.resizable}
            show-overflow={column.showOverflow}
            show-header-overflow={column.showHeaderOverflow}
            class-name={column.className}
            header-class-name={column.headerClassName}
            formatter={(params: ColumnFormatterMethodParams) =>
              this.columnFormatter(params, column)
            }
            {...{
              scopedSlots: this.columnScopedSlots(column),
            }}
          />
        );
      } else {
        return (
          <vxe-column
            field={column.field}
            title={column.title}
            width={column.width}
            min-width={column.minWidth}
            align={column.align}
            header-align={column.titleAlign}
            resizable={column.resizable}
            show-overflow={column.showOverflow}
            show-header-overflow={column.showHeaderOverflow}
            class-name={column.className}
            header-class-name={column.headerClassName}
            formatter={(params: ColumnFormatterMethodParams) =>
              this.columnFormatter(params, column)
            }
            {...{
              scopedSlots: this.columnScopedSlots(column),
            }}
          />
        );
      }
    });
  }

  public columnFormatter(
    { cellValue, row }: ColumnFormatterMethodParams,
    column: Column<Row>
  ): string {
    if (typeof column.format === "function") {
      return column.format(cellValue, row);
    } else {
      return cellValue;
    }
  }

  public columnScopedSlots(
    column: Column<Row>
  ): Record<string, NormalizedScopedSlot | undefined> {
    const scopedSlots: Record<string, NormalizedScopedSlot | undefined> = {};
    const h = this.$createElement;

    if (typeof column.render === "function") {
      scopedSlots.default = (scope) => [
        column.render!(h, scope.row[column.field], scope.row),
      ];
    }

    return scopedSlots;
  }

  public onRadioChange(row: Row): void {
    if (typeof this.currentConfig?.onRadioChange === "function") {
      this.currentConfig?.onRadioChange(row);
    }
  }

  public onCheckboxChange(records: CheckboxChangedRecords<Row>): void {
    if (typeof this.currentConfig?.onCheckboxChange === "function") {
      this.currentConfig?.onCheckboxChange(records);
    }
  }
}
