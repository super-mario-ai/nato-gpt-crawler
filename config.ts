import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.nato.int/",
  match: "https://www.nato.int//**",
  maxPagesToCrawl: 99999999,
  outputFileName: "nato.json",
  maxTokens: 2000000,
  selector: "body"
};
