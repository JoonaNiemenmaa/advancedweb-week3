import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (request, response) => {
	response.send("It's working!");
});

app.get("/hello", (request, response) => {
	const response_json = {
		msg: "Hello world!",
	};
	response.send(response_json);
});

app.get("/echo/:id", (request, response) => {
	response.send(request.params);
});

app.post("/sum", (request, response) => {
	console.log(request.body);
	let numbers: Array<number> = request.body.numbers;
	let sum = 0;
	for (let number of numbers) {
		sum += number;
	}
	const response_json = {
		sum: sum,
	};
	response.send(response_json);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
