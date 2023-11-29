// This is annoying big code
// Node js uses CommonJS, every file is module by default

const names = require("./3a-4names");
const sayHi = require("./utils");

const data = require("./3b-alternative_flavors");

require("./3c-mind-grenade");

console.log(names);

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

sayHi("susan");
sayHi(john);
sayHi(peter);

console.log(data);
