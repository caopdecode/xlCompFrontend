import {app, BrowserWindow} from 'electron';

let mainWindow;

app.on('ready', () =>{
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 850,
        resizable: false,
        webPreferences:{
            nodeIntegration: true
        }
    });
    mainWindow.loadURL('http://localhost:5173');
})