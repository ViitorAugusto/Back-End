const socket = io();

let username = "";
let userList = [];

let loginPage = document.querySelector("#loginPage");
let chatPage = document.querySelector("#chatPage");

let loginInput = document.querySelector("#nameInput");
let textInput = document.querySelector("#chatTextInput");

function renderMessage(type, user, msg) {
  let ul = document.querySelector(".chatList");

  switch (type) {
    case "status":
      ul.innerHTML += `<li class="m-status">${msg}</li>`;
      break;
    case "msg":
      ul.innerHTML += `<li class="m-txt"><span class="m-user">${user}</span>${msg}</li>`;
      break;
  }
}

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

textInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    let txt = textInput.value.trim();
    textInput.value = "";
    if (txt != "") {
      socket.emit("send-msg", txt);
    }
  }
});

socket.on("user-ok", (list) => {
  loginPage.style.display = "none";
  chatPage.style.display = "flex";
  textInput.focus();

  renderMessage("status", null, "Conectado!");
    userList = list;
    renderUserList();
});

socket.on("list-update", (data) => {
  if (data.joined) {
    renderMessage("status", null, `${data.joined} entrou no chat!`);
  }

  if (data.left) {
    renderMessage("status", null, `${data.left} saiu do chat!`);
  }
    userList = data.list;
  renderUserList();
});


socket.on("show-msg", (data) => {
  renderMessage("msg", data.username, data.message);
});