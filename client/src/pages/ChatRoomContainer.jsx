import React, { useEffect, useContext } from 'react'
import { ChatRoom } from '../components/ChatRoom'
import { ChatRoomContext } from '../utils/ChatRoomContext'
import { getCurrentHour } from '../utils/helpers'
import { useParams } from 'react-router-dom'

const ChatRoomContainer = ({
  socket,
  userID,
  setUserID,
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

  const { id } = useParams()

  const sendMessage = (msg, isImage = false) => {
    console.log('msg', msg)
    socket.emit('sendMessage', msg, getCurrentHour(), isImage, () => null)
  }

  const connectUser = (isUpdate, name, color) => {
    const type = isUpdate ? 'update' : 'join'
    return new Promise((resolve, reject) => {
      socket.emit(type, { name: name, color: color, room: id }, res => {
        if (res.error) {
          reject({ err: res.error })
        } else {
          resolve({ id: res.id })
        }
      })
    })
  }

  useEffect(() => {
    if (id) {
      setRoomID(id)
    }
    if (socket && username && id) {
      connectUser(false, username, usercolor).then(res => setUserID(res.id))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, socket])

  useEffect(() => {
    if (socket) {
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
    }
  }, [socket, setUsers, setAdminMessage, setMessages])

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
      userID={userID}
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
