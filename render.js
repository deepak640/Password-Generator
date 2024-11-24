const electron = require("electron");
const { ipcRenderer } = electron;
const generatebtn = document.getElementById("Generator");
console.log("🚀 ~ generatebtn:", generatebtn)

generatebtn.addEventListener("click", () => {
  // ipcRen(
  //   "generate-password",
  //   document.querySelector(".keyword").value
  // );
  ipcRenderer.send(
    "generate-password",
    document.querySelector(".keyword").value
  );
});

ipcRenderer.on("password-generated", (event, data) => {
  document.querySelector(".password").innerHTML = data;
});
