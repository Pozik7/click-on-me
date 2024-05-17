const button = document.getElementById("myButton");

const messages = [
  "I have completed the task as per your instructions. May we now proceed?",
  "Task completed successfully. What would you like to do next?",
  "Your request has been fulfilled. Shall we continue?",
  "The task is done. What is the next step?",
  "Mission accomplished. How should we proceed from here?",
];

button.addEventListener("click", function () {
  const messageContainer = document.createElement("div");
  const randomIndex = Math.floor(Math.random() * messages.length);
  messageContainer.textContent = messages[randomIndex];
  messageContainer.classList.add("message");
  const container = document.querySelector(".container");
  container.appendChild(messageContainer);
});
