//  Websocket Client

//  Websocket dependancies
//  installed with:
//  `npm install html5-websocket reconnecting-websocket`
const Html5WebSocket = require('html5-websocket')
const ReconnectingWebSocket = require('reconnecting-websocket')


//  webscket init
    let ws_host  = 'localhost'
    let ws_port  = '3000'
    const options = { WebSocket: Html5WebSocket }
    const rws = new ReconnectingWebSocket('ws://' + ws_host + ':' + ws_port, undefined, options)


//  set timeout
    rws.timout = 20


//  listeners
    rws.addEventListener('open', () => {
        console.log('[Client] Connection to server open.')
        rws.send('Hello, this is a message from the Client.')
        rws.send(JSON.stringify({
            method: 'set-background-color',
            params: {
                color: 'blue'
            }
        }))
    })

    rws.addEventListener('message', (e) => {
        console.log('[Client] Message recieved: \n' + e.data)

        try{
            let m = JSON.parse(e.data)
            handleMessage(m)
        } catch (err) {
            console.log('[Client] Message is not parsable to JSON.')
        }
    })

    rws.addEventListener('close', () => {
        console.log('[Client] Connection closed.')
    })

    rws.onerror = (err) => {
        if(err.code = 'EHOSTDOWN'){
            console.log('[Client] Could not connect to Server')
        }
    }

//  Handlers for handling data

let handlers = {
    "set-background-color" : function(m) {
        console.log('[Client] Set background color handler.')
        console.log('[Client] Background Color: ' + m.params.color)
    }
}

function handleMessage(m) {

    if(m.method == undefined){
        return
    }

    let method = m.method

    if(method) {

        if(handlers[method]) {
            let handler = handlers[method]
            handler(m)
        } else {
            console.log('[Client] No handler defined for ' + method + '.')
        }
    }
}