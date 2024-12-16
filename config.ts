import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.hm.ee/en",
  match: "https://www.hm.ee/en/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "hm.json",
  maxTokens: 2000000,
  selector: "body",
};
