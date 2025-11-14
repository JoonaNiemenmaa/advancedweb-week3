import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("It's working!");
});

app.get("/hello", (req, res) => {
	const response_json = {
		msg: "Hello world!",
	};
	res.send(response_json);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
