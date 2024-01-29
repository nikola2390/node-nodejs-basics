import { Worker } from "worker_threads";
import os from "os";
import { getDirName, getFileName } from "../utils/utils.js";
import path from "path";

const performCalculations = async () => {
  const START_NUMBER = 10;
  const STATUS_RESOLVED = "resolved";
  const STATUS_ERROR = "error";
  const __filename = getFileName(import.meta.url);
  const __dirname = getDirName(__filename);
  const workerUrl = path.join(__dirname, "./worker.js");
  const cpusAmount = os.cpus().length;
  const results = [];

  for (let i = 0; i < cpusAmount; i++) {
    const workerData = START_NUMBER + i;
    const result = () => {
      return new Promise((resolve) => {
        const worker = new Worker(workerUrl, {
          workerData,
        });

        worker.on("message", (data) =>
          resolve({ status: STATUS_RESOLVED, data })
        );
        worker.on("error", () => resolve({ status: STATUS_ERROR, data: null }));
      });
    };

    results.push(result());
  }

  const data = await Promise.all(results);

  console.log(data);
};

await performCalculations();
