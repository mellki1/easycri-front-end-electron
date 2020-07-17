const { app, BrowserWindow } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')

function createWindow () {
  // Cria uma janela de navegação.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.setMenu(null);
  // e carregar o index.html do aplicativo.
  win.loadURL(
    isDev ?  "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`
  )

}

app.whenReady().then(createWindow)