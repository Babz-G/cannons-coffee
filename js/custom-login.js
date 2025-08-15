let form = document.querySelector("form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit() {
  event.preventDefault();
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
  console.log(dataObject);

  const name = dataObject.name;

  let message = `Welcome, ${name}! You are logged in!`;
  console.log("Final Message:", message);

  let messageContainer = document.querySelector(".messageContainer");
  console.log("messageContainer", messageContainer);

  let messageParagraph = document.createElement("p");
  console.log("messageParagraph", messageParagraph);

  messageParagraph.textContent = message;
  console.log("messageParagraph", messageParagraph);

  messageContainer.appendChild(messageParagraph);
  console.log("messageParagraph", messageParagraph);

  form.reset();
}
