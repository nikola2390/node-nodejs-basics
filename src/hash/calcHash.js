import { createReadStream } from "fs";
import { createHash } from "crypto";
import { stdout } from "process";
import path from "path";
import { fileURLToPath } from "url";
import os from "os";
import { pipeline } from "stream/promises";

const calculateHash = async () => {
  let __filename = fileURLToPath(import.meta.url);
  let __dirname = path.dirname(__filename);
  const hash = createHash("sha256");
  const input = createReadStream(
    path.join(__dirname, "files/fileToCalculateHashFor.txt")
  );

  await pipeline(input, hash.setEncoding("hex"), stdout, {
    end: false,
  });
  console.log(os.EOL);
};

await calculateHash();
