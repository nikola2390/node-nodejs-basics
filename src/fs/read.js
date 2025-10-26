import { readFile } from "node:fs/promises";

const read = async () => {
  readFile("./src/fs/files/fileToRead.txt", "utf8")
    .then((data) => {
      console.log(data);
    })
    .catch(() => {
      throw Error("FS operation failed");
    });
};

await read();
