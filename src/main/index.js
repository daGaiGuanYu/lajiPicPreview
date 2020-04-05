const Electron = require('electron')

require('./event')
const createWindow = require('./create-window')

Electron.app.whenReady().then(createWindow)