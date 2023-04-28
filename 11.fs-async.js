const { readFile, writeFile } = require("fs");

console.log("Start");
readFile("./content/first.txt", "utf8", (err, result) => {
  //without the utf8 passed here the value which we get is Buffer value. So to avoid buffer value use utf8 in as the parameter
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    writeFile(
      "./content/resultasync.txt",
      `Here is the result ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("Starting next task");
//Debug note: Whenever some part gets missed to add while following tutorials
//After adding the content make sure to take care of the opening and closing brackets as well
//Here the console log will print in the async manner
