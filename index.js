var messageForm = document.querySelector("form");
messageForm.addEventListener("submit", (event) => {
	let name = event.target.name.value;
	console.log(name);
	let email = event.target.email.value;
	console.log(email);
	let message = event.target.message.value;
	console.log(message);
	event.preventDefault();

	let messageSection = document.getElementById("messages");
	let messageList = messageSection.querySelector("ul");
	let newMessage = document.createElement("li");
	newMessage.innerHTML = `<a href="mailto:${event.target.email.value}">${event.target.name.value}</a> <span> wrote: ${event.target.message.value} </span>`;
	messageList.appendChild(newMessage);

	let removeButton = document.createElement("button");
	removeButton.innerHTML = "Remove";
	removeButton.className = "remove";
	removeButton.type = "button";
	newMessage.appendChild(removeButton);

	messageList.addEventListener("click", (event) => {
		if (event.target.type == "button") {
			let li = event.target.parentNode;
			let ul = li.parentNode;
			ul.removeChild(li);
		}
	});

	document.querySelector("form").reset();
});

