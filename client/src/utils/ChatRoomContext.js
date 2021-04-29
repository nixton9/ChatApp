import React, { useState, createContext } from 'react'

export const ChatRoomContext = createContext()

export const ChatRoomProvider = ({ children }) => {
  const [roomID, setRoomID] = useState(0)
  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState([])
  const [adminMessage, setAdminMessage] = useState('')
  const [showSettings, setShowSettings] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showIsDisconnected, setShowIsDisconnected] = useState(false)

  const contextProps = {
    roomID,
    setRoomID,
    messages,
    setMessages,
    users,
    setUsers,
    adminMessage,
    setAdminMessage,
    showSettings,
    setShowSettings,
    isLoading,
    setIsLoading,
    showIsDisconnected,
    setShowIsDisconnected
  }

  return (
    <ChatRoomContext.Provider value={contextProps}>
      {children}
    </ChatRoomContext.Provider>
  )
}
