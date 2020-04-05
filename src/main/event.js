const Electron = require('electron')

const createWindow = require('./create-window')

Electron.app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    Electron.app.quit()
  }
})

Electron.app.on('activate', () => {
  if (Electron.BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
