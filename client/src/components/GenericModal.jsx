import React from 'react'
import { Modal } from './Modal'
import { MainButton } from './MainButton'
import { Styled } from '../styles/Modal.styles'

export const GenericModal = ({ children, title, closeModal, buttons }) => {
  return (
    <Modal title={title} closeModal={closeModal}>
      <Styled.ModalText>{children}</Styled.ModalText>

      <Styled.ButtonsContainer>
        {buttons.map(btn => (
          <MainButton
            key={`btn-${btn.text}`}
            onClick={btn.onClick}
            {...btn.props}
          >
            {btn.text}
          </MainButton>
        ))}
      </Styled.ButtonsContainer>
    </Modal>
  )
}
