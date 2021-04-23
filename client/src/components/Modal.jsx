import React from 'react'
import { Styled } from '../styles/Modal.styles'

export const Modal = ({ children, title, closeModal, setMinHeight }) => {
  return (
    <>
      <Styled.ModalOverlay onClick={closeModal} />
      <Styled.ModalContainer>
        <Styled.ModalTitle
          dangerouslySetInnerHTML={{
            __html: title
          }}
        />
        <Styled.ModalContent setMinHeight={setMinHeight}>
          {children}
        </Styled.ModalContent>
      </Styled.ModalContainer>
    </>
  )
}
