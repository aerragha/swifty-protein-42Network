const fs = require("fs");
let arr = [];
const allFileContents = fs.readFileSync("ligands.txt", "utf-8");
allFileContents.split(/\r?\n/).forEach((line) => {
  arr = [...arr, line];
//   console.log(`Line from file: ${line}`);
});

const test1 = JSON.stringify(arr);

fs.writeFile("ligands.json", test1, "utf8", (err) => {
  console.log("done");
});

console.log(arr);

// Memory usage
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
