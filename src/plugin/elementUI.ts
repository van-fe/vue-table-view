import Vue from "vue";
import "@/styles/theme/index.css";
import { AvailableLanguage } from "@/config";
import ElementUIEnLang from "element-ui/lib/locale/lang/en";
import ElementUIZhCNLang from "element-ui/lib/locale/lang/zh-CN";
import { use } from "element-ui/lib/locale";

Vue.prototype.$ELEMENT = { size: "small" };

export function locale(lang: AvailableLanguage): void {
  let langFile;
  switch (lang) {
    case AvailableLanguage.En:
      langFile = ElementUIEnLang;
      break;
    case AvailableLanguage.ZhCn:
      langFile = ElementUIZhCNLang;
      break;
  }

  use(langFile);
}
