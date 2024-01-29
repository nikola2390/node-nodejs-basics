const parseArgs = () => {
  let values = process.argv.slice(2);
  for (let i = 0; i < values.length; i += 2) {
    console.log(`${values[i].slice(2)} is ${values[i + 1]}`);
  }
};

parseArgs();
