const path = require('path');
const url = require('url')
const electron = require('electron');
const socketCluster = require('socketcluster-client');

const { app, BrowserWindow } = electron;

let mainWindow;

var options = {
  hostname: 'wss://sc-02.coinigy.com/socketcluster/',
  secure: true,
  port: 443,
  rejectUnauthorized: false // Only necessary during debug if using a self-signed certificate
};

// // Initiate the connection to the server
// var socket = socketCluster.connect(options);
//
// var coinigyCredentials = require('config').coinigyApiKeys;
//
// var options = {
//   hostname  : "sc-02.coinigy.com",
//   port      : "443",
//   secure    : "true"
// };
//
// console.log(options);
// var SCsocket = socketCluster.connect(options);
//
//
// SCsocket.on('connect', function (status) {
//
//   console.log(status);
//
//   SCsocket.on('error', function (err) {
//     console.log(err);
//   });
//
//
//   SCsocket.emit("auth", coinigyCredentials, function (err, token) {
//
//     if (!err && token) {
//
//       var scChannel = SCsocket.subscribe("TRADE-OK--BTC--CNY");
//       console.log(scChannel);
//       scChannel.watch(function (data) {
//         console.log(data);
//       });
//
//       SCsocket.emit("exchanges", null, function (err, data) {
//         if (!err) {
//           console.log(data);
//         } else {
//           console.log(err)
//         }
//       });
//
//
//       SCsocket.emit("channels", "OK", function (err, data) {
//         if (!err) {
//           console.log(data);
//         } else {
//           console.log(err)
//         }
//       });
//     } else {
//       console.log(err)
//     }
//   });
// });

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    icon: `${__dirname}/public/app-icon.png`,
    frame: false
  });

  if (!process.env.ELECTRON_DEV) {
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, '/build/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  } else {
    mainWindow.loadURL('http://localhost:3000');
  }

  mainWindow.on('closed', () => app.quit());
});

