import React, { useEffect, useContext } from 'react'
import { ChatRoom } from '../components/ChatRoom'
import { ChatRoomContext } from '../utils/ChatRoomContext'
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
  const {
    setRoomID,
    setMessages,
    setUsers,
    adminMessage,
    setAdminMessage
  } = useContext(ChatRoomContext)

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
    if (id) {
      setRoomID(id)
    }
    if (username && id) {
      connectUser(false, username, usercolor)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ENDPOINT, id])

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
  }, [setUsers, setAdminMessage, setMessages])

  useEffect(() => {
    if (adminMessage) {
      setTimeout(() => setAdminMessage(''), 3000)
    }
  }, [adminMessage, setAdminMessage])

  useEffect(() => {
    const messagesDiv = document.querySelector('.messages')

    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    )
    const gap = 260

    if (messagesDiv) {
      messagesDiv.style.height = `${vh - messagesDiv.offsetTop - gap}px`
    }
  })

  return (
    <ChatRoom
      username={username}
      usercolor={usercolor}
      setUsername={setUsername}
      setUsercolor={setUsercolor}
      sendMessage={sendMessage}
      connectUser={connectUser}
    />
  )
}

export default ChatRoomContainer
