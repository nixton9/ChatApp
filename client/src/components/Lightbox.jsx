import React from 'react'
import { CloseButton } from './CloseButton'
import styled from 'styled-components/macro'
import { fadeIn } from '../styles/animations'

const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.3s ease;
`

const LightboxContainer = styled.div`
  position: fixed;
  max-width: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;

  img {
    width: auto;
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: ${({ theme }) => theme.mainBorderRadius};
    box-shadow: ${({ theme }) => theme.bigBoxShadow};
  }
`

export const Lightbox = ({ image, closeLightbox }) => {
  return (
    <>
      <LightboxOverlay onClick={closeLightbox} />
      <LightboxContainer>
        <CloseButton onClick={closeLightbox} transparency />
        <img src={image} alt={'Sent on chat'} />
      </LightboxContainer>
    </>
  )
}
