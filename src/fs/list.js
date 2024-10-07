import { readdir } from "node:fs/promises";

const list = async () => {
  readdir("./src/fs/files")
    .then((list) => {
      console.log(list);
    })
    .catch(() => {
      throw Error("FS operation failed");
    });
};

await list();
