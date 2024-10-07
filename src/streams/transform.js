import { pipeline } from "stream/promises";
import { Transform } from "stream";

const transform = async () => {
  const transformReverse = new Transform({
    transform(chunk, encoding, cb) {
      const chunkString = chunk.toString().trim();
      const reverseChunk = chunkString.split("").reverse().join("");

      this.push(reverseChunk + "\n");

      cb();
    },
  });

  await pipeline(process.stdin, transformReverse, process.stdout);
};

await transform();
