import { parentPort, workerData } from "worker_threads";

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

// Get error in worker
// if (Math.random() > 0.5) throw new Error("Fatal error!!");

// This function sends result of nthFibonacci computations to main thread
const sendResult = () => {
  parentPort.postMessage(nthFibonacci(workerData));
};

sendResult();
