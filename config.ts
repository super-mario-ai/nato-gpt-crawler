import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://lrkm.lrv.lt/en/site-tree/",
  match: "https://lrkm.lrv.lt/en/**",
  maxPagesToCrawl: 9999999,
  outputFileName: "output.json",
  maxTokens: 2000000,
  selector: "body",
};
