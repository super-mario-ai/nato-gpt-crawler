import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://kaitseministeerium.ee/",
  match: "https://kaitseministeerium.ee/**",
  maxPagesToCrawl: 9999999,
  outputFileName: "kaitseministeerium.json",
  maxTokens: 2000000,
  selector: "body",
};
