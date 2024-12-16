import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://sk.wikipedia.org/wiki/Ministerstvo_zdravotn%C3%ADctva_Slovenskej_republiky",
  match:
    "https://sk.wikipedia.org/wiki/Ministerstvo_zdravotn%C3%ADctva_Slovenskej_republiky/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "output.json",
  maxTokens: 2000000,
  selector: "body",
};
