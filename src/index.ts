import { Request, Response, Router } from "express";

const router: Router = Router();

router.get("/hello", (request, response) => {
	const response_json = {
		msg: "Hello world!",
	};
	response.send(response_json);
});

router.get("/echo/:id", (request, response) => {
	response.send(request.params);
});

router.post("/sum", (request, response) => {
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

router.post("/users", (request, response) => {
	users.push(request.body);
	response.send("User successfully added");
});

router.get("/users", (request, response) => {
	console.log(`${request.hostname} requested users`);
	response.statusCode = 201;
	response.send(users);
});

export default router;
