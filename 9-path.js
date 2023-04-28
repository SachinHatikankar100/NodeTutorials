const path = require("path");

console.log(path.sep); // brings up the file separator

const filePath = path.join("/content//", "subfolder", "text.txt"); // here even if we add extra slashes nodejs will return normalize path
console.log(filePath);
console.log(path.basename(filePath)); // this will return only the file name at the end of the file path

console.log(path.resolve(__dirname, "content", "subfolder", "text.txt")); // this will give the absolute path
