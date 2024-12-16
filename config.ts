import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://zum.lrv.lt/en/",
  match: "https://zum.lrv.lt/en/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "output.json",
  maxTokens: 2000000,
  selector: "body"
};
