const user_form = document.getElementById("userForm");
const name_input = document.getElementById("name");
const email_input = document.getElementById("email");
const get_users_button = document.getElementById("getUsers");

user_form.addEventListener("submit", (event) => {
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

function display_users(users) {
	const user_list = document.getElementById("userList");
	user_list.innerHTML = "";
	for (const user of users) {
		const list_item = document.createElement("li");
		list_item.innerText = `${user.name} - ${user.email}`;
		user_list.appendChild(list_item);
	}
}

get_users_button.addEventListener("click", async (event) => {
	const url = "http://localhost:3000/users";
	const response = await fetch(url);
	const users = await response.json();

	display_users(users);
});
