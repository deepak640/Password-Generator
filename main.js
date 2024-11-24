const { app, BrowserWindow, ipcMain } = require("electron");

let win = null;

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      // preload:"/preload.js"
    },
  });
  win.loadFile("index.html");
};

app.whenReady().then(createWindow);

ipcMain.on("generate-password", (event, data) => {
  const randomPassword = data + Math.random().toString(36).substring(2, 5);
  win.webContents.send("password-generated", randomPassword);
});
