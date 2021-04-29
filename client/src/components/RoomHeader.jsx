import React, { useState, useEffect, useContext, useRef } from 'react'
import { UserAvatar } from './UserAvatar'
import { GenericModal } from './GenericModal'
import { ChatRoomContext } from '../utils/ChatRoomContext'
import { getUsersNamesString } from '../utils/helpers'
import { Styled } from '../styles/ChatRoom.styles'
import { ReactComponent as HomeIcon } from '../assets/icons/home.svg'
import { useHistory } from 'react-router-dom'

export const RoomHeader = ({ username, usercolor }) => {
  const [roomURL, setRoomURL] = useState('')
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const { roomID, users, setShowSettings, setAdminMessage } = useContext(
    ChatRoomContext
  )
  const textAreaRef = useRef(null)
  const history = useHistory()

  const copyRoomUrl = e => {
    textAreaRef.current.select()
    document.execCommand('copy')
    e.target.focus()
    setAdminMessage('Room link copied!')
  }

  useEffect(() => {
    if (roomID && typeof window !== 'undefined') {
      setRoomURL(`${window.location.origin}/room/${roomID}`)
    }
  }, [roomID])

  return (
    <Styled.Header>
      <Styled.RoomTitle onClick={copyRoomUrl}>
        Room {roomID}
        <span>Copy URL</span>
      </Styled.RoomTitle>

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
            <p className="users-list">{getUsersNamesString(users)}</p>
          </div>
        </>
      ) : (
        <>
          <div className="users">
            <UserAvatar size={'xs'} />
            <p className="users-list">No users on this room</p>
          </div>
        </>
      )}

      <div onClick={() => setShowConfirmModal(true)} className="home-icon">
        <HomeIcon />
      </div>

      <div className="user">
        <UserAvatar
          name={username}
          color={usercolor}
          onClick={() => setShowSettings(true)}
        />
      </div>

      {showConfirmModal && (
        <GenericModal
          title="Leave chat?"
          closeModal={() => setShowConfirmModal(false)}
          buttons={[
            {
              text: 'Yes',
              onClick: () => history.push('/'),
              props: { small: true }
            },
            {
              text: 'Cancel',
              onClick: () => setShowConfirmModal(false),
              props: { small: true, ghost: true }
            }
          ]}
        >
          Leaving this chat room will cause you to lose all the messages that
          were sent here. Sure you want to leave?
        </GenericModal>
      )}

      {roomURL && <textarea ref={textAreaRef} value={roomURL} readOnly />}
    </Styled.Header>
  )
}
