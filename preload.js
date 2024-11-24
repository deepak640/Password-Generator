const { contextBridge } = require("electron");

// Expose a limited API to the renderer process
contextBridge.exposeInMainWorld("electron", {
  require: (module) => require(module),
});
