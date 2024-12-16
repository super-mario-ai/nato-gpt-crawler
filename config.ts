import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://2015-2019.kormany.hu/en/hungary#!DocumentBrowse",
  match: "https://2015-2019.kormany.hu/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "kormany",
  maxTokens: 2000000,
  selector: "body",
};
