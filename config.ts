import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.fin.ee/en/",
  match: "https://www.fin.ee/en/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "fin.json",
  maxTokens: 2000000,
  selector: "body",
};
