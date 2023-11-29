const { log } = require("console");
const { readFile, writeFile } = require("fs");

log(" Starting fileAsync");
readFile("./content/first.txt", "utf-8", (error, result) => {
	if (error) {
		log(error);
		return;
	}
	const first = result;
	readFile("./content/second.txt", "utf-8", (error, result) => {
		if (error) {
			log(error);
			return;
		}
		const second = result;
		writeFile(
			"./content/result-async.txt",
			`Here is the Result: ${first}, ${second}`,
			(error, result) => {
				if (error) {
					log(error);
					return;
				}
				log("  Done with the task");
			}
		);
	});
});
log(" Starting next Task");
