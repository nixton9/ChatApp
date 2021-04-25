import React, { useContext } from 'react'
import { RoomHeader } from '../components/RoomHeader'
import { SignupModal } from '../components/SignupModal'
import { MessageInput } from '../components/MessageInput'
import { MessageBubble } from '../components/MessageBubble'
import { Notification } from '../components/Notification'
import { ChatRoomContext } from '../utils/ChatRoomContext'
import { Styled } from '../styles/ChatRoom.styles'
import ScrollToBottom from 'react-scroll-to-bottom'

export const ChatRoom = ({
  userID,
  username,
  usercolor,
  setUsername,
  setUsercolor,
  sendMessage,
  connectUser
}) => {
  const { messages, adminMessage, showSettings, setShowSettings } = useContext(
    ChatRoomContext
  )

  return (
    <Styled.Wrapper>
      <RoomHeader username={username} usercolor={usercolor} />

      <Styled.Content>
        {username ? (
          <>
            {adminMessage && <Notification text={adminMessage} />}

            <ScrollToBottom className="messages">
              {messages.map(message => (
                <MessageBubble
                  key={`${message.user}-${message.text}-${message.timestamp}`}
                  msg={message.text}
                  isFromOwnUser={userID === message.user.id}
                  user={message.user}
                  timestamp={message.timestamp}
                  isImage={message.isImage}
                />
              ))}
            </ScrollToBottom>
            <MessageInput sendMessage={sendMessage} />
            {showSettings && (
              <SignupModal
                username={username}
                setUsername={setUsername}
                usercolor={usercolor}
                setUsercolor={setUsercolor}
                onSubmit={(name, color) => connectUser(true, name, color)}
                closeModal={() => setShowSettings(false)}
              />
            )}
          </>
        ) : (
          <SignupModal
            setUsername={setUsername}
            setUsercolor={setUsercolor}
            usercolor={usercolor}
            onSubmit={(name, color) => connectUser(false, name, color)}
          />
        )}
      </Styled.Content>
    </Styled.Wrapper>
  )
}
