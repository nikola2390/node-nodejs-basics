import { fork } from "child_process";
import { getDirName, getFileName } from "../utils/utils.js";
import path from "path";

const __filename = getFileName(import.meta.url);
const __dirname = getDirName(__filename);
const childUrl = path.join(__dirname, "./files/script.js");

const spawnChildProcess = async (args) => {
  const child = fork(childUrl, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([]);
