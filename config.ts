import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://transport.lv/",
  match: "https://transport.lv/**",
  maxPagesToCrawl: 999999,
  outputFileName: "transport.json",
  maxTokens: 2000000,
  selector: "body",
};
