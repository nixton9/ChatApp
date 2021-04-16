import React from 'react'
import { SignupModal } from '../components/SignupModal'
import { UserAvatar } from '../components/UserAvatar'
import { MessageInput } from '../components/MessageInput'
import { MessageBubble } from '../components/MessageBubble'
import { Notification } from '../components/Notification'
import { getUsersNamesString } from '../utils/helpers'
import { Styled } from '../styles/ChatRoom.styles'
import { v4 as uuidv4 } from 'uuid'
import ScrollToBottom from 'react-scroll-to-bottom'

export const ChatRoom = ({
  username,
  usercolor,
  users,
  messages,
  sendMessage,
  adminMessage,
  connectUser,
  showSettings,
  setUsername,
  setUsercolor,
  setShowSettings
}) => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <h1>ChatApp</h1>
        {username && (
          <div className="user">
            <UserAvatar
              name={username}
              color={usercolor}
              onClick={() => setShowSettings(true)}
            />
          </div>
        )}
      </Styled.Header>

      <Styled.Content>
        {username ? (
          <>
            {adminMessage && <Notification text={adminMessage} />}

            {users && users.length ? (
              <>
                <div className="users">
                  {users.map(user => (
                    <UserAvatar
                      key={user.id}
                      name={user.name}
                      color={user.color}
                      size={'xs'}
                    />
                  ))}
                </div>
                <p className="users-list">{getUsersNamesString(users)}</p>
              </>
            ) : (
              <>
                <div className="users">
                  <UserAvatar size={'xs'} />
                </div>
                <p className="users-list">No users on this room</p>
              </>
            )}
            <ScrollToBottom className="messages">
              {messages.map(message => (
                <MessageBubble
                  key={uuidv4()}
                  msg={message.text}
                  isFromOwnUser={
                    username.trim().toLowerCase() ===
                    message.user.name.trim().toLowerCase()
                  }
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
