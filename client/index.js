//  Websocket Client


//  Websocket dependancies
//  installed with:
//  `npm install html5-websocket reconnecting-websocket`
import ReconnectingWebSocket from 'reconnecting-websocket'


//  webscket init
    const rws = new ReconnectingWebSocket('ws://localhost:3000/ws');


//  set timeout
    rws.timout = 1000;


//  listeners
    rws.addEventListener('open', () => {
        console.log('[Client] Connection to server open.');
        rws.send('Hello, this is a message from the Client.');
    });

    rws.addEventListener('message', (e) => {
        console.log('[Client] Message recieved! \n' + e.data);
    });

    rws.addEventListener('close', () => {
        console.log('[Client] Connection closed.');
    });

    rws.onerror = (err) => {
        if(err.code = 'EHOSTDOWN'){
            console.log('[Client] Could not connect to Server');
        }
    };


//  Handlers for handling data