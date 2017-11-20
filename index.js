const path = require('path');
const url = require('url')

const electron = require('electron');

const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    icon: `${__dirname}/public/app-icon.png`,
    frame: false
  });

  if (!process.env.ELECTRON_DEV) {
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, '/public/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  } else {
    mainWindow.loadURL('http://localhost:3000');
  }

  mainWindow.on('closed', () => app.quit());
});

