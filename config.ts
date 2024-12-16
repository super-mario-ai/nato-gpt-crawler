import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://zum.lrv.lt/en/site-tree/",
  match: "https://www.zum.lrv.lt/**",
  maxPagesToCrawl: 9999999,
  outputFileName: "output.json",
  maxTokens: 2000000,
  selector: "body",
};
