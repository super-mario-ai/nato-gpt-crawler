import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://vm.ee/en",
  match: "https://vm.ee/en/**",
  maxPagesToCrawl: 9999999,
  outputFileName: "vm-ee.json",
  maxTokens: 2000000,
  selector: "body",
};
