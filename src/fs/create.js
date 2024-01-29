import { appendFile } from "node:fs/promises";

const create = async () => {
  appendFile("./src/fs/files/fresh.txt", "I am fresh and young", {
    flag: "ax",
  }).catch(() => {
    throw Error("FS operation failed");
  });
};

await create();
