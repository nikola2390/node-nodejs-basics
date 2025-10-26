import { fileURLToPath } from "url";
import { dirname } from "path";

export const getFileName = (metaUrl) => {
  return fileURLToPath(metaUrl);
};

export const getDirName = (fileName) => {
  return dirname(fileName);
};
