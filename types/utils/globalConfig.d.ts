import type { GlobalConfigType, InsideGlobalConfig } from "@/config";
declare class GlobalConfig {
    protected defaultConfig: InsideGlobalConfig;
    get globalConfig(): InsideGlobalConfig;
    setConfig(option: GlobalConfigType): void;
}
export declare const globalConfig: GlobalConfig;
export declare function defineVueTableViewGlobalOption(option: GlobalConfigType): GlobalConfigType;
export {};
