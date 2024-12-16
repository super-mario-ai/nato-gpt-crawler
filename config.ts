import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "",
  match: "/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "output.json",
  maxTokens: 2000000,
  selector: "body"
};
