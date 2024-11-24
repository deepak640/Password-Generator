const electron = require("electron");
const { ipcRenderer } = electron;
const generatebtn = document.getElementById("Generator");
const os = require("os");
let networkInterfaces = os.networkInterfaces();
let mac = networkInterfaces["Wi-Fi"][0].mac;
console.log(mac);
generatebtn.addEventListener("click", () => {
  ipcRenderer.send(
    "generate-password",
    document.querySelector(".keyword").value
  );
});

ipcRenderer.on("password-generated", (event, data) => {
  document.querySelector(".password").innerHTML = data;
  document.querySelector(".mac-address").innerHTML = mac;
});
