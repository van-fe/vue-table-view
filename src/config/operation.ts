export enum OperationType {
  Button,
  ButtonWithIcon,
  Link,
  LinkWithoutUnderline,
  ButtonMore,
  ButtonWithIconMore,
  LinkMore,
  LinkWithoutUnderlineMore,
}

export type OperationDisabledHandler<Row> = (row: Row) => boolean;
export type OperationDisappearHandler<Row> = (row: Row) => boolean;
export type OperationClickHandler<Row> = (row: Row) => void;

export interface Operation<Row> {
  type?: OperationType; // Link without underline
  status?: "primary" | "success" | "info" | "warning" | "danger";
  colorType?: string; // while you want to change button/link color
  hoverToShowText?: string;
  disabled?: OperationDisabledHandler<Row>;
  disappear?: OperationDisappearHandler<Row>;
  onClick?: OperationClickHandler<Row>;
  /**
   * only for type = Button | Link | LinkWithoutUnderline | ButtonMore | More
   */
  label?: string;
  /**
   * only for type = ButtonWithIcon
   */
  icon?: string;
  /**
   * only for type = More
   */
  divided?: boolean;
  children?: Operation<Row>[];
}

export interface OperationConfig<Row> {
  operations?: Operation<Row>[];
  headerTitle?: string; // "Operation"
  width?: string | number;
  minWidth?: string | number;
  surroundByButtonGroup?: boolean;
}
