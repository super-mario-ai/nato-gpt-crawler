import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.mfa.gov.lv/en",
  match: "https://www.mfa.gov.lv/en/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "mfa.json",
  maxTokens: 2000000,
  selector: "body"
};
