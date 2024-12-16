import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.kul.ee/en",
  match: "https://www.kul.ee/en/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "kul-ee.json",
  maxTokens: 2000000,
  selector: "body"
};
