import React, { useContext } from 'react'
import { RoomHeader } from './RoomHeader'
import { SignupModal } from './SignupModal'
import { MessageInput } from './MessageInput'
import { MessageBubble } from './MessageBubble'
import { Notification } from './Notification'
import { LoadingSpinner } from './LoadingSpinner'
import { ChatRoomContext } from '../utils/ChatRoomContext'
import { Styled } from '../styles/ChatRoom.styles'
import ScrollToBottom from 'react-scroll-to-bottom'
import { Link } from 'react-router-dom'

export const ChatRoom = ({
  userID,
  username,
  usercolor,
  setUsername,
  setUsercolor,
  sendMessage,
  connectUser,
  isLoading
}) => {
  const {
    roomID,
    messages,
    adminMessage,
    showSettings,
    setShowSettings
  } = useContext(ChatRoomContext)

  return (
    <Styled.Wrapper>
      {roomID && roomID.length === 6 ? (
        <>
          <RoomHeader username={username} usercolor={usercolor} />

          <Styled.Content>
            {username ? (
              <>
                {adminMessage && <Notification text={adminMessage} />}

                <ScrollToBottom className="messages">
                  {messages.map(message => (
                    <MessageBubble
                      key={message.id}
                      msg={message.text}
                      isFromOwnUser={userID === message.user.id}
                      user={message.user}
                      timestamp={message.timestamp}
                      isImage={message.isImage}
                    />
                  ))}
                </ScrollToBottom>

                {isLoading && <LoadingSpinner />}

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
        </>
      ) : (
        <Styled.InvalidMessage>
          <h2>Got lost?</h2>
          <p>
            This is not a valid room. Click <Link to="/">here</Link> to be
            redirect to the Home page.
          </p>
        </Styled.InvalidMessage>
      )}
    </Styled.Wrapper>
  )
}
