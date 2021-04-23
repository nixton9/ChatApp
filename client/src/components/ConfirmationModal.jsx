import React from 'react'
import { Modal } from './Modal'
import { MainButton } from './MainButton'
import { Styled } from '../styles/Modal.styles'

export const ConfirmationModal = ({
  children,
  title,
  onSubmit,
  closeModal
}) => {
  return (
    <Modal title={title} closeModal={closeModal}>
      <Styled.ModalText>{children}</Styled.ModalText>

      <Styled.ButtonsContainer>
        <MainButton small onClick={onSubmit}>
          Yes
        </MainButton>
        <MainButton small ghost onClick={closeModal}>
          Cancel
        </MainButton>
      </Styled.ButtonsContainer>
    </Modal>
  )
}
