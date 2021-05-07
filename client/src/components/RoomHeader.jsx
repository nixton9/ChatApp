import React, { useState, useEffect, useContext, useRef } from 'react'
import { UserAvatar } from './UserAvatar'
import { GenericModal } from './GenericModal'
import { Tooltip } from './Tooltip'
import { ChatRoomContext } from '../utils/ChatRoomContext'
import { Styled } from '../styles/ChatRoom.styles'
import { ReactComponent as ChevronIcon } from '../assets/icons/chevron.svg'
import { ReactComponent as UsersIcon } from '../assets/icons/users.svg'
import { useHistory } from 'react-router-dom'

export const RoomHeader = ({ username, usercolor }) => {
  const [roomURL, setRoomURL] = useState('')
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const {
    roomID,
    setShowSettings,
    setAdminMessage,
    setShowUsersBar
  } = useContext(ChatRoomContext)
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
      <Styled.TopBar>
        <Styled.BackButton
          onClick={() => setShowConfirmModal(true)}
          className="mbl-click mbl-click-inv"
          role="button"
          data-test-id="back-button"
        >
          <ChevronIcon />
        </Styled.BackButton>

        <Styled.RoomTitle onClick={copyRoomUrl}>
          Room {roomID}
          <p>Copy URL</p>
        </Styled.RoomTitle>

        <Styled.User>
          <Tooltip text={'Online Users'} alignRight className="users-tooltip">
            <Styled.UsersButton
              onClick={() => setShowUsersBar(true)}
              className="mbl-click mbl-click-inv"
              role="button"
              data-test-id="users-button"
            >
              <UsersIcon />
            </Styled.UsersButton>
          </Tooltip>

          <Tooltip alignRight text={'Settings'}>
            <UserAvatar
              name={username}
              color={usercolor}
              onClick={() => setShowSettings(true)}
            />
          </Tooltip>
        </Styled.User>
      </Styled.TopBar>

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
