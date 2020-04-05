const Electron = require('electron')

module.exports = function createWindow () {   
  const win = new Electron.BrowserWindow({
    width: 1800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('../../dist/index.html')
  // win.loadFile('../page/entry/index.html')
  win.webContents.openDevTools()
}