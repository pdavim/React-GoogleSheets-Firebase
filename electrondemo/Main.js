const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600
  });

  // and load the index.html of the app.

  //win.loadFile("index.html");
  //win.loadURL("http://localhost:3000/");
  win.loadURL(`file://${path.join(__dirname, "../build/index.html")}`);

  // Open the DevTools.
  win.webContents.openDevTools();
}
app.on("ready", createWindow);
