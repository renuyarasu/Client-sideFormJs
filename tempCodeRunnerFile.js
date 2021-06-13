let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm_password");
let form = document.querySelector("form");

function validateInput() {
  //check username is empty
  if (username.value.trim() === "") {
    onError(username, "User Name cannot be empty");
  } else {
    onSuccess(username);
  }
  if (email.value.trim() === "") {
    onError(email, "Email cannot be empty");
  } else {
    if (!isValidEmail(email.value.trim())) {
      onError(email, "Email is not valid");
    } else {
      onSuccess(email);
    }
  }

  //password
  if (password.value.trim() === "") {
    onError(password, "User Name cannot be empty");
  } else {
    onSuccess(password);
  }
  if (confirm_password.value.trim() === "") {
    onError(confirm_password, "User Name cannot be empty");
  } else {
    if (password.value.trim() !== confirm_password.value.trim()) {
      onError(confirm_password, "Password & Confirm password not matching");
    } else onSuccess(confirm_password);
  }
}

document.querySelector("button").addEventListener("click", (event) => {
  event.preventDefault();
  validateInput();
});

function onSuccess(input) {
  let parent = input.parentElement;
  let messageEle = parent.querySelector("small");
  messageEle.style.visibility = "hidden";
  parent.classList.remove("error");
  parent.classList.add("success");
}
function onError(input, message) {
  let parent = input.parentElement;
  let messageEle = parent.querySelector("small");
  messageEle.style.visibility = "visible";
  messageEle.innerText = message;
  parent.classList.add("error");
  parent.classList.remove("success");
}

function isValidEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
