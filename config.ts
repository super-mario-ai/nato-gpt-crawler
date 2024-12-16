import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.mosr.sk/mo-sr-en/",
  match: "https://www.mosr.sk/mo-sr-en/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "mosr-sk.json",
  maxTokens: 2000000,
  selector: "body"
};
