import React, { useContext } from 'react'
import { SideBar } from './SideBar'
import { RoomHeader } from './RoomHeader'
import { SignupModal } from './SignupModal'
import { MessageInput } from './MessageInput'
import { MessageBubble } from './MessageBubble'
import { Notification } from './Notification'
import { GenericModal } from './GenericModal'
import { LoadingSpinner } from './LoadingSpinner'
import { ChatRoomContext } from '../utils/ChatRoomContext'
import { Styled } from '../styles/ChatRoom.styles'
import ScrollToBottom from 'react-scroll-to-bottom'
import { Link, useHistory } from 'react-router-dom'

export const ChatRoom = ({
  userID,
  username,
  usercolor,
  setUsername,
  setUsercolor,
  sendMessage,
  connectUser,
  setUserID
}) => {
  const {
    roomID,
    messages,
    adminMessage,
    showSettings,
    setShowSettings,
    isLoading,
    showIsDisconnected,
    setShowIsDisconnected,
    connectError,
    setConnectError,
    showUsersBar,
    setShowUsersBar
  } = useContext(ChatRoomContext)

  const history = useHistory()

  return (
    <Styled.Wrapper>
      <SideBar
        userID={userID}
        isOpen={showUsersBar}
        setIsOpen={setShowUsersBar}
      />

      <Styled.Container>
        {roomID && roomID.length === 6 ? (
          <>
            <RoomHeader username={username} usercolor={usercolor} />

            <Styled.Content data-test-id="chartRoom-content">
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

                  {connectError && (
                    <SignupModal
                      username={username}
                      setUsername={setUsername}
                      usercolor={usercolor}
                      setUsercolor={setUsercolor}
                      setUserID={setUserID}
                      onSubmit={(name, color) =>
                        connectUser(false, name, color)
                      }
                      closeModal={() => setConnectError(false)}
                      errorMsg={connectError}
                    />
                  )}

                  {showSettings && (
                    <SignupModal
                      username={username}
                      setUsername={setUsername}
                      usercolor={usercolor}
                      setUsercolor={setUsercolor}
                      setUserID={setUserID}
                      onSubmit={(name, color) => connectUser(true, name, color)}
                      closeModal={() => setShowSettings(false)}
                    />
                  )}
                </>
              ) : (
                <SignupModal
                  setUsername={setUsername}
                  setUsercolor={setUsercolor}
                  setUserID={setUserID}
                  usercolor={usercolor}
                  onSubmit={(name, color) => connectUser(false, name, color)}
                />
              )}
            </Styled.Content>

            {showIsDisconnected && (
              <GenericModal
                title="Connection lost"
                closeModal={() => setShowIsDisconnected(false)}
                buttons={[
                  {
                    text: 'Reload',
                    onClick: () => history.go(0),
                    props: { small: true }
                  }
                ]}
              >
                Seems like you're disconnected from the server so all the chat
                functionalities won't work. Reload the page on the button below.
              </GenericModal>
            )}
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
      </Styled.Container>
    </Styled.Wrapper>
  )
}
