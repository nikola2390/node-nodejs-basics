import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";
import { getDirName, getFileName } from "../utils/utils.js";
import { join } from "path";
import { createUnzip } from "zlib";

const decompress = async () => {
  const unzip = createUnzip();
  const __filename = getFileName(import.meta.url);
  const __dirname = getDirName(__filename);

  await pipeline(
    createReadStream(join(__dirname, "./files/archive.gz")),
    unzip,
    createWriteStream(join(__dirname, "./files/fileToCompress.txt"))
  );
};

await decompress();
