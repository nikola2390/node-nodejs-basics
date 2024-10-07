import { getDirName, getFileName } from "../utils/utils.js";
import { pipeline } from "stream/promises";
import { createWriteStream } from "fs";
import path from "path";

const write = async () => {
  let __filename = getFileName(import.meta.url);
  let __dirname = getDirName(__filename);

  await pipeline(
    process.stdin,
    createWriteStream(path.join(__dirname, "files/fileToWrite.txt"))
  );
};

await write();
