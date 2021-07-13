const path = require('path')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const ACTION = require('./src/soceket/actions')
const { default: socket } = require('./src/soceket')
const PORT = process.env.PORT || 3001

function getClientRooms () {
    const {rooms} = io.sockets.adapter

    return Array.from(rooms.keys())
}

function shareRoomsInfo () {
    io.emmit('ACTION.SHARE_ROOM', {
        rooms: getClientRooms()
    })
}

io.on('connection', socet => {
    shareRoomsInfo()
    
    socket.on(ACTION.JOIN, config => {
        const {room: roomID} = config
        const {rooms: joinedRooms} = socket

        if(Array.from(joinedRooms).includes(roomID)) {
            return console.warn(`Already joinned to ${roomID}`)
        }

        const clients = Array.from(io.sockets.adapter.rooms.get(roomID) || [])

        clients.forEach(clientID => {
            io.to(clientID => {
                
            })
        })

    })
})

server.listen(PORT, () => console.log('Server started..'))