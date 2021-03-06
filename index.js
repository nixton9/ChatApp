const express = require('express')
const path = require('path')
const http = require('http')
const socketIO = require('socket.io')
const cors = require('cors')

const router = require('./router')
const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
  updateUser,
  checkIfRoomExists
} = require('./userActions')

const app = express()
const server = http.createServer(app)
const io = socketIO(server, {
  maxHttpBufferSize: 1e8
})

const PORT = 5000

app.use(cors())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
} else {
  app.use(router)
}

io.on('connect', socket => {
  socket.on('join', ({ name, color, room }, callback) => {
    const { error, errorCode, user } = addUser({
      id: socket.id,
      name,
      color,
      room
    })

    if (error) return callback({ error, errorCode })

    socket.join(user.room)

    socket.broadcast.to(user.room).emit('message', {
      user: 'admin',
      isAdmin: true,
      text: `${user.name} has joined!`
    })

    io.to(user.room).emit('roomData', {
      room: user.room,
      users: getUsersInRoom(user.room)
    })

    callback({ id: socket.id })
  })

  socket.on('update', ({ name, color, room }, callback) => {
    const { error, errorCode, user } = updateUser({
      id: socket.id,
      name,
      color,
      room
    })
    if (error) return callback({ error, errorCode })

    io.to(user.room).emit('roomData', {
      room: user.room,
      users: getUsersInRoom(user.room)
    })

    callback({})
  })

  socket.on('sendMessage', (message, timestamp, isImage, callback) => {
    const user = getUser(socket.id)
    io.to(user.room).emit('message', {
      user,
      text: message,
      timestamp,
      isImage
    })

    callback()
  })

  socket.on('roomExists', ({ room }, callback) => {
    if (checkIfRoomExists(room)) {
      return callback()
    }
    return callback({ error: "This room doesn't exist.", errorCode: 4 })
  })

  socket.on('disconnect', reason => {
    const user = removeUser(socket.id)
    if (user) {
      io.to(user.room).emit('message', {
        user: 'admin',
        isAdmin: true,
        text: `${user.name} has left.`
      })
      io.to(user.room).emit('roomData', {
        room: user.room,
        users: getUsersInRoom(user.room)
      })
    }
  })
})

server.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
