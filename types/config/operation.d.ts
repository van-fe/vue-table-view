export declare enum OperationType {
    Button = 0,
    ButtonWithIcon = 1,
    Link = 2,
    LinkWithoutUnderline = 3,
    ButtonMore = 4,
    ButtonWithIconMore = 5,
    LinkMore = 6,
    LinkWithoutUnderlineMore = 7
}
export declare type OperationDisabledHandler<Row> = (row: Row) => boolean;
export declare type OperationDisappearHandler<Row> = (row: Row) => boolean;
export declare type OperationClickHandler<Row> = (row: Row) => void;
export interface Operation<Row> {
    type?: OperationType;
    status?: "primary" | "success" | "info" | "warning" | "danger";
    colorType?: string;
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
    headerTitle?: string;
    width?: string | number;
    minWidth?: string | number;
    surroundByButtonGroup?: boolean;
}
