const http = require("http");

const listeningPort = 8000;

const server = http.createServer((request, response) => {
	if (request.url === "/") {
		response.end("Welcome to our Homepage");
	}

	if (request.url === "/about") {
		response.end("Here is our Brief History of Time.");
	}

response.end(`
	<h1>OOPs! (Object Oriented Programming is Worst thing happened to this world along side Israel)</h1>

	<p>We Can't seem to find your Requested Page Just like the Evidences of Hamas Bases are in the basement of Hospitals, as marketed by Israel Defence Forces on entire NEWS media outlets.</p>

	<a href="/">HOME</a>

	`);
});

server.listen(listeningPort);
