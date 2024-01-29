import { getDirName, getFileName } from "../utils/utils.js";
import path from "path";
import { createReadStream } from "fs";
import { pipeline } from "stream/promises";

const read = async () => {
  let __filename = getFileName(import.meta.url);
  let __dirname = getDirName(__filename);

  await pipeline(
    createReadStream(path.join(__dirname, "files/fileToRead.txt")),
    process.stdout
  );
};

await read();
