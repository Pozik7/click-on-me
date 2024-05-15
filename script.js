const button = document.getElementById("myButton");

button.addEventListener("click", function() {
  const messageContainer = document.createElement("div");
  messageContainer.textContent = "I have completed the task as per your instructions. May we now proceed?";
  messageContainer.classList.add("message");
  const container = document.querySelector(".container");
  container.appendChild(messageContainer);
});