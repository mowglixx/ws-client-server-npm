// dependencies
const express = require('express')
const WebSocket = require('ws')
const SocketServer = require('ws').Server

var socketNum = 3000

const server =  express().listen(socketNum)
console.log('Websocket now open on port:' + socketNum)

const wss = new SocketServer({server})

wss.on('connection', (ws) => {
    console.log('[Server] A client has connected.')

    ws.on('close', () => {console.log('[Server] Client disconnected.')})

    ws.on('message', (message) => {

        console.log('[Server] Recieved message: %s', message)

        //broadcast to everyone else connnected
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN)

                client.send(message)

        })
    })
})
