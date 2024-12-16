import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.sm.ee/en",
  match: "https://www.sm.ee/en**",
  maxPagesToCrawl: 999999,
  outputFileName: "sm-ee.json",
  maxTokens: 2000000,
  selector: "body",
};
