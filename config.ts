import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.mfsr.sk/en/",
  match: "https://www.mfsr.sk/en/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "mfsr-sk.json",
  maxTokens: 2000000,
  selector: "body",
};
