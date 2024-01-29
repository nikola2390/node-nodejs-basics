import fs from "node:fs/promises";

const rename = async () => {
  fs.rename(
    "./src/fs/files/wrongFilename.txt",
    "./src/fs/files/properFileName.md"
  ).catch(() => {
    throw Error("FS operation failed");
  });
};

await rename();
