const Electron = require('electron')

const createWindow = require('./create-window')

Electron.app.whenReady().then(createWindow)