import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://mkm.ee/en",
  match: "https://mkm.ee/en/**",
  maxPagesToCrawl: 9999999,
  outputFileName: "mkm.json",
  maxTokens: 2000000,
  selector: "body",
};
