import type { SelectData } from "./select";
export declare type CascaderData = {
    children?: CascaderData[];
    loading?: boolean;
} & SelectData;
