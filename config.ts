import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.economy.gov.sk/",
  match: "https://www.economy.gov.sk/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "economy",
  maxTokens: 2000000,
  selector: "body",
};
