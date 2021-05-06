import React, { useContext } from 'react'
import { UserAvatar } from './UserAvatar'
import { CloseButton } from './CloseButton'
import { ChatRoomContext } from '../utils/ChatRoomContext'
import { Styled } from '../styles/SideBar.styles'
import { capitalize } from '../utils/helpers'

export const SideBar = ({ userID, isOpen, setIsOpen }) => {
  const { roomID, users } = useContext(ChatRoomContext)
  return (
    <>
      <Styled.Overlay open={isOpen} onClick={() => setIsOpen(false)} />

      <Styled.Container open={isOpen} data-test-id="sidebar">
        <CloseButton onClick={() => setIsOpen(false)} />

        <Styled.Title>Users in Room {roomID}</Styled.Title>

        <Styled.UsersList>
          {users.map(user => (
            <Styled.User key={user.id}>
              <UserAvatar key={user.id} name={user.name} color={user.color} />
              <p>{capitalize(user.name)}</p>
              {userID === user.id && <span>(You)</span>}
            </Styled.User>
          ))}
        </Styled.UsersList>
      </Styled.Container>
    </>
  )
}
