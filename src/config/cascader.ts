import type { SelectData } from "./select";

export type CascaderData = {
  children?: CascaderData[];
  loading?: boolean;
} & SelectData;
