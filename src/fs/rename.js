import fs from "node:fs/promises";
import { existsSync } from "node:fs";

const rename = async () => {
  if (existsSync("./src/fs/files/properFileName.md")) {
    throw Error("FS operation failed");
  }

  fs.rename(
    "./src/fs/files/wrongFilename.txt",
    "./src/fs/files/properFileName.md"
  ).catch(() => {
    throw Error("FS operation failed");
  });
};

await rename();
