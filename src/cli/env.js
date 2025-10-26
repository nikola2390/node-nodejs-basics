const parseEnv = () => {
  for (let [key, value] of Object.entries(process.env)) {
    if (key.startsWith("RSS_")) {
      console.log(`${key}=${value}`);
    }
  }
};

parseEnv();
