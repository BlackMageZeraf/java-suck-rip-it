const { log } = require("console");
const os = require("os");

// info about current user
const userInfo = os.userInfo();
console.log(userInfo);

// Method returns the system uptime in seconds
console.log(`System uptime is: ${os.uptime()}`);

// Current OS
const currentOS = {
	name: os.type(),
	releaseNumber: os.release(),
	totalMemory: os.totalmem(),
	freeMemory: os.freemem(),
};
console.log(currentOS);
