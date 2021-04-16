import React, { useState, useEffect } from 'react'
import { MainButton } from './MainButton'
import { ColorSelect } from './ColorSelect'
import { LoadingSpinner } from './LoadingSpinner'
import { ErrorMessage } from './ErrorMessage'
import { Styled } from '../styles/Modal.styles'

export const SignupModal = ({
  username,
  usercolor,
  setUsername,
  setUsercolor,
  onSubmit,
  closeModal
}) => {
  const [name, setName] = useState('')
  const [color, setColor] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    if (name) {
      setIsLoading(true)
      onSubmit(name, color)
        .then(res => {
          setIsLoading(false)
          setUsername(name)
          setUsercolor(color)

          if (closeModal) {
            closeModal()
          }
        })
        .catch(error => {
          setError(error.err)
          setName(username || '')
          setIsLoading(false)
        })
    }
  }

  useEffect(() => {
    if (username) {
      setName(username)
    }
  }, [username])

  useEffect(() => {
    if (usercolor) {
      setColor(usercolor)
    }
  }, [usercolor])

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(''), 3000)
    }
  }, [error])

  return (
    <>
      <Styled.ModalOverlay onClick={closeModal} />
      <Styled.ModalContainer>
        {closeModal ? (
          <Styled.ModalTitle>Your settings</Styled.ModalTitle>
        ) : (
          <Styled.ModalTitle>
            Ready to start
            <br />
            chatting?
          </Styled.ModalTitle>
        )}
        <Styled.ModalContent>
          {isLoading ? (
            <LoadingSpinner />
          ) : error ? (
            <ErrorMessage error={error} />
          ) : (
            <Styled.ModalForm onSubmit={handleSubmit}>
              <Styled.InputWrapper>
                <Styled.ModalLabel>Nickname</Styled.ModalLabel>
                <Styled.ModalInput
                  type="text"
                  placeholder="Name that others will see"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </Styled.InputWrapper>
              <Styled.InputWrapper>
                <Styled.ModalLabel>Color</Styled.ModalLabel>
                <ColorSelect color={color} setColor={setColor} />
              </Styled.InputWrapper>

              <Styled.ButtonContainer>
                <MainButton disabled={!name}>
                  {closeModal ? 'Save settings' : 'Enter chat'}
                </MainButton>
              </Styled.ButtonContainer>
            </Styled.ModalForm>
          )}
        </Styled.ModalContent>
      </Styled.ModalContainer>
    </>
  )
}
