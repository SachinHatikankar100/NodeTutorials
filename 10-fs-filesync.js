const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first},${second}`,
  { flag: "a" }
  // here the file result-sync was created dynamically and the values mentioned in the template string is available as the content in the file
  //flag with value set to 'a' will allow the file to get appended
);
console.log("done with task");
console.log("Starting with next one");
