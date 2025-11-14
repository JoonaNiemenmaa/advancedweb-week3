const form = document.getElementById("userForm");
const name_input = document.getElementById("name");
const email_input = document.getElementById("email");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const body = {
		name: name_input.value,
		email: email_input.value,
	};

	name_input.value = "";
	email_input.value = "";

	const url = "http://localhost:3000/users";
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	};
	fetch(url, options);
});
