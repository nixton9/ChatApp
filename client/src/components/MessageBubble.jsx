import React from 'react'
import { UserAvatar } from './UserAvatar'
import { Styled } from '../styles/MessageBubble.styles'

export const MessageBubble = ({
  msg,
  isFromOwnUser,
  user,
  timestamp,
  isImage
}) => {
  return (
    <Styled.MessageContainer isFromOwnUser={isFromOwnUser}>
      {!isFromOwnUser && (
        <UserAvatar
          size={'sm'}
          key={user.id}
          name={user.name}
          color={user.color}
        />
      )}
      <Styled.Message isFromOwnUser={isFromOwnUser}>
        {isImage ? (
          <img
            src={`data:image/jpg;base64,${msg}`}
            alt={`Sent by ${user.name}`}
            width="80px"
          />
        ) : (
          msg
        )}
        <Styled.TimeStamp className="timestamp" isFromOwnUser={isFromOwnUser}>
          {timestamp}
        </Styled.TimeStamp>
      </Styled.Message>
    </Styled.MessageContainer>
  )
}
