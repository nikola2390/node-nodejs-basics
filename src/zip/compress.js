import { createGzip } from "zlib";
import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";
import { getDirName, getFileName } from "../utils/utils.js";
import { join } from "path";

const compress = async () => {
  const gzip = createGzip();
  let __filename = getFileName(import.meta.url);
  let __dirname = getDirName(__filename);

  await pipeline(
    createReadStream(join(__dirname, "./files/fileToCompress.txt")),
    gzip,
    createWriteStream(join(__dirname, "./files/archive.gz"))
  );
};

await compress();
