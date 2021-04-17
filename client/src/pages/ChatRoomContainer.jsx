import React, { useState, useEffect } from 'react'
import { ChatRoom } from '../components/ChatRoom'
import { getCurrentHour } from '../utils/helpers'
import { useParams } from 'react-router-dom'
import io from 'socket.io-client'

let socket

const ChatRoomContainer = ({
  username,
  setUsername,
  usercolor,
  setUsercolor
}) => {
  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState([])
  const [adminMessage, setAdminMessage] = useState('')
  const [showSettings, setShowSettings] = useState(false)

  const ENDPOINT = '/'

  const { id } = useParams()

  const sendMessage = (msg, isImage = false) =>
    socket.emit('sendMessage', msg, getCurrentHour(), isImage, () => null)

  const connectUser = (isUpdate, name, color) => {
    const type = isUpdate ? 'update' : 'join'

    return new Promise((resolve, reject) => {
      socket.emit(type, { name: name, color: color, room: id }, err => {
        if (err) {
          reject({ err })
        } else {
          resolve()
        }
      })
    })
  }

  useEffect(() => {
    socket = io(ENDPOINT)
    if (username && id) {
      connectUser(false, username, usercolor)
    }
  }, [ENDPOINT, id])

  useEffect(() => {
    const messagesDiv = document.querySelector('.messages')

    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    )
    const gap = 290

    if (messagesDiv) {
      messagesDiv.style.height = `${vh - messagesDiv.offsetTop - gap}px`
    }
  })

  useEffect(() => {
    socket.on('message', message => {
      if (message.isAdmin) {
        setAdminMessage(message.text)
      } else {
        setMessages(messages => [...messages, message])
      }
    })

    socket.on('roomData', ({ users }) => {
      setUsers(users)
    })
  }, [])

  useEffect(() => {
    if (adminMessage) {
      setTimeout(() => setAdminMessage(''), 3000)
    }
  }, [adminMessage])

  return (
    <ChatRoom
      username={username}
      usercolor={usercolor}
      users={users}
      messages={messages}
      sendMessage={sendMessage}
      adminMessage={adminMessage}
      showSettings={showSettings}
      connectUser={connectUser}
      setUsername={setUsername}
      setUsercolor={setUsercolor}
      setShowSettings={setShowSettings}
    />
  )
}

export default ChatRoomContainer
