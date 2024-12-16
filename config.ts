import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.agri.ee/en",
  match: "https://www.agri.ee/en/**",
  maxPagesToCrawl: 9999999,
  outputFileName: "agri.json",
  maxTokens: 2000000,
  selector: "body",
};
