var button = document.getElementById("myButton");

button.addEventListener("click", function() {
  var messageContainer = document.createElement("div");
  messageContainer.textContent = "I have completed the task as per your instructions. May we now proceed?";
  messageContainer.classList.add("message");
  var container = document.querySelector(".container");
  container.appendChild(messageContainer);
});
