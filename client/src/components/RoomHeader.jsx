import React, { useState, useEffect, useContext, useRef } from 'react'
import { UserAvatar } from '../components/UserAvatar'
import { ChatRoomContext } from '../utils/ChatRoomContext'
import { getUsersNamesString } from '../utils/helpers'
import { Styled } from '../styles/ChatRoom.styles'

export const RoomHeader = ({ username, usercolor }) => {
  const [roomURL, setRoomURL] = useState('')
  const { roomID, users, setShowSettings, setAdminMessage } = useContext(
    ChatRoomContext
  )
  const textAreaRef = useRef(null)

  const copyRoomUrl = e => {
    textAreaRef.current.select()
    document.execCommand('copy')
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
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
      <h2 onClick={copyRoomUrl}>
        Room {roomID}
        <span>Copy URL</span>
      </h2>

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

      {username && (
        <div className="user">
          <UserAvatar
            name={username}
            color={usercolor}
            onClick={() => setShowSettings(true)}
          />
        </div>
      )}

      {roomURL && <textarea ref={textAreaRef} value={roomURL} readOnly />}
    </Styled.Header>
  )
}
