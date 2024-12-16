import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.siseministeerium.ee/en",
  match: "https://www.siseministeerium.ee/en/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "siseministeerium.json",
  maxTokens: 2000000,
  selector: "body",
};
