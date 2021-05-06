import React, { useEffect, useContext } from 'react'
import { ChatRoom } from '../components/ChatRoom'
import { ChatRoomContext } from '../utils/ChatRoomContext'
import { getCurrentHour } from '../utils/helpers'
import { updateAccentColor } from '../styles/theme'
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
    setAdminMessage,
    setIsLoading,
    setShowIsDisconnected,
    setConnectError
  } = useContext(ChatRoomContext)

  const { id } = useParams()

  const sendMessage = (msg, isImage = false) => {
    if (isImage) {
      setIsLoading(true)
    }
    socket.emit('sendMessage', msg, getCurrentHour(), isImage, () =>
      setIsLoading(false)
    )
  }

  const connectUser = (isUpdate, name, color) => {
    const type = isUpdate ? 'update' : 'join'
    return new Promise((resolve, reject) => {
      socket.emit(type, { name: name, color: color, room: id }, res => {
        if (res.error) {
          reject(res)
        } else {
          resolve({ id: res.id })
          updateAccentColor(color)
        }
      })
    })
  }

  useEffect(() => {
    if (id) {
      setRoomID(id)
    }
    if (socket && username && id) {
      connectUser(false, username, usercolor)
        .then(res => {
          setUserID(res.id)
          setConnectError(null)
        })
        .catch(err => {
          console.log(err)
          if (err.errorCode && err.errorCode === 2) {
            setConnectError(err.error)
          }
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, socket])

  useEffect(() => {
    if (socket) {
      socket.on('message', message => {
        if (message.isAdmin) {
          setAdminMessage(message.text)
        } else {
          message.id = `${new Date().getTime()}${new Date().getMilliseconds()}`
          setMessages(messages => [...messages, message])
        }
      })

      socket.on('disconnect', () => setShowIsDisconnected(true))

      socket.on('roomData', ({ users }) => {
        setUsers(users)
      })
    }
  }, [socket, setUsers, setAdminMessage, setMessages, setShowIsDisconnected])

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
    const gap = 190

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
      setUserID={setUserID}
    />
  )
}

export default ChatRoomContainer
