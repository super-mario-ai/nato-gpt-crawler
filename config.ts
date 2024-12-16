import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.tm.gov.lv/en",
  match: "https://www.tm.gov.lv/en/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "tm-gov-lv.json",
  maxTokens: 2000000,
  selector: "body"
};
