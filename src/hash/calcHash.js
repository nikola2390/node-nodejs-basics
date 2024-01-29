import { createReadStream } from "fs";
import { createHash } from "crypto";
import { stdout } from "process";
import path from "path";
import { fileURLToPath } from "url";

const calculateHash = async () => {
  let __filename = fileURLToPath(import.meta.url);
  let __dirname = path.dirname(__filename);
  const hash = createHash("sha256");
  const input = createReadStream(
    path.join(__dirname, "files/fileToCalculateHashFor.txt")
  );

  input.pipe(hash).setEncoding("hex").pipe(stdout);
};

await calculateHash();
