import { Component, InjectReactive, Vue } from "vue-property-decorator";
import type { Config, Dictionary, ListDataWrapper, Operation } from "@/config";
import { OperationType } from "@/config";
import type { VNode } from "vue";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Link,
} from "element-ui";
import type { ColumnDefaultSlotParams } from "vxe-table";

@Component({
  components: {
    "el-button": Button,
    "el-button-group": ButtonGroup,
    "el-link": Link,
    "el-dropdown": Dropdown,
    "el-dropdown-item": DropdownItem,
    "el-dropdown-menu": DropdownMenu,
  },
})
export class Operations<Row, Search extends Dictionary> extends Vue {
  @InjectReactive() currentConfig!: Config<Row, Search>;
  @InjectReactive() dataList!: ListDataWrapper<Row>;

  public render(): VNode {
    return (
      <vxe-column
        title={this.currentConfig.operationConfig!.headerTitle}
        width={this.currentConfig.operationConfig?.width}
        min-width={this.currentConfig.operationConfig?.minWidth}
        class-name="table-view__body-operations"
        {...{
          scopedSlots: {
            default: (scope: ColumnDefaultSlotParams): VNode => {
              const TagName = this.currentConfig.operationConfig
                ?.surroundByButtonGroup
                ? "el-button-group"
                : "div";
              return (
                <TagName>
                  {(this.currentConfig.operationConfig?.operations ?? []).map(
                    (operation) => {
                      switch (operation.type) {
                        case OperationType.Button:
                        case OperationType.ButtonWithIcon:
                          return this.buttonRender(operation, scope);
                        case OperationType.Link:
                        case OperationType.LinkWithoutUnderline:
                          return this.linkRender(operation, scope);
                        case OperationType.ButtonMore:
                        case OperationType.ButtonWithIconMore:
                        case OperationType.LinkMore:
                        case OperationType.LinkWithoutUnderlineMore:
                          return this.moreRender(operation, scope);
                        default:
                          return this.linkRender(operation, scope);
                      }
                    }
                  )}
                </TagName>
              );
            },
          },
        }}
      />
    );
  }

  public buttonRender(
    operation: Operation<Row>,
    scope: ColumnDefaultSlotParams
  ): VNode {
    return (
      <el-button
        icon={operation.icon}
        size="mini"
        type={operation?.status ?? undefined}
        circle={operation.type === OperationType.ButtonWithIcon}
        disabled={this.getOperationDisabledValue(operation, scope)}
        on-click={() => this.onClink(operation, scope)}
      >
        {operation?.label ?? ""}
      </el-button>
    );
  }

  public linkRender(
    operation: Operation<Row>,
    scope: ColumnDefaultSlotParams
  ): VNode {
    return (
      <el-link
        type={operation?.status ?? undefined}
        underline={operation.type === OperationType.Link}
        disabled={this.getOperationDisabledValue(operation, scope)}
        nativeOnClick={() => this.onClink(operation, scope)}
      >
        {operation?.label ?? ""}
      </el-link>
    );
  }

  public moreRender(
    operation: Operation<Row>,
    scope: ColumnDefaultSlotParams
  ): VNode {
    return (
      <el-dropdown
        disabled={this.getOperationDisabledValue(operation, scope)}
        on-command={(command: Operation<Row>) => this.onClink(command, scope)}
      >
        {[OperationType.ButtonMore, OperationType.ButtonWithIconMore].includes(
          operation.type!
        ) ? (
          <el-button
            size="small"
            icon={operation.icon}
            circle={!!operation.icon}
          >
            {operation.label}
          </el-button>
        ) : (
          <el-link underline={operation.type === OperationType.Link}>
            {operation?.label ?? ""}
            <i className="el-icon-arrow-down el-icon--right" />
          </el-link>
        )}
        <el-dropdown-menu slot="dropdown">
          {(operation?.children || []).map((item) => (
            <el-dropdown-item
              command={item}
              divided={item.divided}
              disabled={this.getOperationDisabledValue(item, scope)}
            >
              {item.label}
            </el-dropdown-item>
          ))}
        </el-dropdown-menu>
      </el-dropdown>
    );
  }

  public onClink(
    operation: Operation<Row>,
    scope: ColumnDefaultSlotParams
  ): void {
    if (!this.getOperationDisabledValue(operation, scope)) {
      operation?.onClick && operation.onClick(scope.row as Row);
    }
  }

  protected getOperationDisabledValue(
    operation: Operation<Row>,
    scope: ColumnDefaultSlotParams
  ): boolean {
    if (typeof operation.disabled === "function") {
      return operation.disabled(scope.row as Row);
    }

    return false;
  }
}
