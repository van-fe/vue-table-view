import Vue from "vue";
import { TableView } from "@/components";
import type { GlobalConfigType } from "@/config";
import { globalConfig } from "../utils";
import type { VueConstructor } from "vue";
import { locale } from "@/plugin/elementUI";

TableView.install = (_: VueConstructor, option: GlobalConfigType): void => {
  globalConfig.setConfig(option);
  option?.language && locale(option.language);
  Vue.component("table-view ", TableView);
};

export default TableView;
