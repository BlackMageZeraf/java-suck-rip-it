const { log } = require("console");
const { readFileSync, writeFileSync } = require("fs");

// const fs = require("fs");

// fs.read();

log(" Starting fileSync");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

// log(first, second);

writeFileSync(
	"./content/result-sync.txt",
	`Here is the result: ${first}, ${second}`,
	{ flag: "a" }
);

log(" Done with the task");
log(" Starting with the next task");

// Following Command will Append to the File.
// writeFileSync(
// 	"./content/result-sync.txt",
// 	`Here is the result: ${first}, ${second}`,
// 	{ flag: "a" }
// );

const resultSync = readFileSync("./content/result-sync.txt", "utf-8");

// log(resultSync); // To Show results
