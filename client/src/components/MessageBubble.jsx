import React, { useState } from 'react'
import { UserAvatar } from './UserAvatar'
import { Lightbox } from './Lightbox'
import { Styled } from '../styles/MessageBubble.styles'
import { ReactComponent as GlassIcon } from '../assets/icons/glass.svg'

export const MessageBubble = ({
  msg,
  isFromOwnUser,
  user,
  timestamp,
  isImage
}) => {
  const [lightboxImage, setLightboxImage] = useState('')

  return (
    <>
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
            <Styled.ImageWrapper
              onClick={() => setLightboxImage(`data:image/jpg;base64,${msg}`)}
            >
              <img
                src={`data:image/jpg;base64,${msg}`}
                alt={`Sent by ${user.name}`}
              />
              <GlassIcon />
            </Styled.ImageWrapper>
          ) : (
            msg
          )}
          <Styled.TimeStamp className="timestamp" isFromOwnUser={isFromOwnUser}>
            {timestamp}
          </Styled.TimeStamp>
        </Styled.Message>
      </Styled.MessageContainer>
      {lightboxImage && (
        <Lightbox
          image={lightboxImage}
          closeLightbox={() => setLightboxImage('')}
        />
      )}
    </>
  )
}
