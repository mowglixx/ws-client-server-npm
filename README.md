# Websocket tutorial repo

This is a small project to help me understand websockets and get a more directed approach to adapting my already existing skills to Javascript of which I have very little experience

## tech in this project used
- NodeJS
- Javascript
- Websocket
- node modules: 
    - `express`
    - `ws`
    - `html5-websocket`
    - `reconnecting-websocket`

## Guide used
this [Youtube Video]('https://www.youtube.com/watch?v=3IKUKDf7mA0')

### sidenote
The pinned comment on the video from "David Látal" showed me that `./client/index.js:14` needs to be `WebSocket` instead of using `constuctor` since `reconnecting-websocket@3.2.2` that was used in the video