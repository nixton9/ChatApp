import React from 'react'
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
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  transform: translateY(-50%);
  z-index: 11;

  img {
    width: 100%;
    max-height: 90vh;
    border-radius: ${({ theme }) => theme.mainBorderRadius};
    box-shadow: ${({ theme }) => theme.bigBoxShadow};
  }
`

const LightboxClose = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(96, 96, 96, 0.4);
  border-radius: 50%;
  transform: rotate(45deg);
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.white};
    font-size: 2.7rem;
    font-weight: ${({ theme }) => theme.fontSemiBold};
    transform: translate(0px, -3px);
  }
`

export const Lightbox = ({ image, closeLightbox }) => {
  return (
    <>
      <LightboxOverlay onClick={closeLightbox} />
      <LightboxContainer>
        <LightboxClose onClick={closeLightbox}>
          <span>+</span>
        </LightboxClose>
        <img src={image} alt={'Sent on chat'} />
      </LightboxContainer>
    </>
  )
}
