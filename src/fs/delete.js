import { unlink } from "node:fs/promises";

const remove = async () => {
  unlink("./src/fs/files/fileToRemove.txt").catch(() => {
    throw Error("FS operation failed");
  });
};

await remove();
