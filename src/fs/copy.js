import { cp } from "node:fs/promises";
import { existsSync } from "node:fs";

const copy = async () => {
  if (existsSync("./src/fs/files_copy")) {
    throw Error("FS operation failed");
  }

  cp("./src/fs/files", "./src/fs/files_copy", {
    recursive: true,
    errorOnExist: true,
    force: false,
  }).catch(() => {
    throw Error("FS operation failed");
  });
};

await copy();
