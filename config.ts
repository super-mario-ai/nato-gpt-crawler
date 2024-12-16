import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://eimin.lrv.lt/sitemap.xml",
  match: "https://eimin.lrv.lt/**",
  maxPagesToCrawl: 9999999,
  outputFileName: "output.json",
  maxTokens: 2000000,
  selector: "body",
};
