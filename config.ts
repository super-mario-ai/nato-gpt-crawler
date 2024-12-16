import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.gov.pl/",
  match: "https://www.gov.pl/**",
  maxPagesToCrawl: 9999999,
  outputFileName: "gov-pl.json",
  maxTokens: 2000000,
  selector: "body",
};
