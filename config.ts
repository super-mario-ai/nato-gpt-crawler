import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.em.gov.lv/en",
  match: "https://www.em.gov.lv/en/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "em-gov-lv.json",
  maxTokens: 2000000,
  selector: "body",
};
