const socket = io();

let username = "";
let userList = [];

let loginPage = document.querySelector("#loginPage");
let chatPage = document.querySelector("#chatPage");

let loginInput = document.querySelector("#nameInput");
let textInput = document.querySelector("#chatTextInput");

const renderUserList = () => {
    let ul = document.querySelector(".userList");
    ul.innerHTML = "";
    
    userList.forEach((i) => {
        ul.innerHTML += `<li>${i}</li>`;
    });
}

loginPage.style.display = "flex";
chatPage.style.display = "none";

loginInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    let name = loginInput.value.trim();
    if (name != "") {
      username = name;
      document.title = "Chat (" + username + ")";
      socket.emit("join", username);
    }
  }
});

socket.on("user-ok", (list) => {
  loginPage.style.display = "none";
  chatPage.style.display = "flex";
  textInput.focus();

    userList = list;
    renderUserList();
});
