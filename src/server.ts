import express from "express";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

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

type TUser = {
	name: string;
	email: string;
};

const users: Array<TUser> = [];

app.post("/users", (request, response) => {
	users.push(request.body);
	response.send("User successfully added");
});

app.get("/users", (request, response) => {
	console.log(`${request.hostname} requested users`);
	response.send(users);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
