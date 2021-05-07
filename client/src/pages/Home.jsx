import React, { useState, useEffect } from 'react'
import { MainButton } from '../components/MainButton'
import { SendButton } from '../components/SendButton'
import { ErrorMessage } from '../components/ErrorMessage'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { GenericModal } from '../components/GenericModal'
import { Styled } from '../styles/Home.styles'
import { ReactComponent as Logo } from '../assets/logo.svg'
import { generateRandomString } from '../utils/helpers'
import { useHistory } from 'react-router-dom'

const Home = ({ socket }) => {
  const [inputVal, setInputVal] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showHelpModal, setShowHelpModal] = useState(false)

  const history = useHistory()

  const checkIfRoomExists = room =>
    new Promise((resolve, reject) => {
      socket.emit('roomExists', { room: room }, err => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    })

  const createRoom = (e, roomID) => {
    const room = roomID || generateRandomString()
    checkIfRoomExists(room)
      .then(res => {
        createRoom()
        setIsLoading(false)
      })
      .catch(err => {
        if (err.error === "This room doesn't exist.") {
          history.push(`/room/${room}`)
        }
        setIsLoading(false)
      })
  }

  const enterRoom = e => {
    e.preventDefault()
    setIsLoading(true)
    checkIfRoomExists(inputVal)
      .then(res => {
        history.push(`/room/${inputVal.toLowerCase()}`)
        setIsLoading(false)
      })
      .catch(err => {
        setError(err.error)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(''), 3000)
    }
  }, [error, setError])

  return (
    <Styled.Container>
      <Styled.HelpButton
        onClick={() => setShowHelpModal(true)}
        role="button"
        data-test-id="help-button"
      >
        ?
      </Styled.HelpButton>

      <Styled.Content>
        <Logo />

        <Styled.Slogan>
          Free, fast and anonymous chat app with no traces whatsoever.
        </Styled.Slogan>

        <div className="buttons">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <MainButton onClick={createRoom}>Create new room</MainButton>
              <Styled.InputContainer onSubmit={enterRoom}>
                <div className="wrapper">
                  <input
                    type="text"
                    placeholder="Enter room ID"
                    value={inputVal}
                    onChange={e => setInputVal(e.target.value)}
                    data-test-id="room-input"
                  />
                  {inputVal && <SendButton />}
                </div>
              </Styled.InputContainer>
            </>
          )}
        </div>

        {error && <ErrorMessage error={error} />}
      </Styled.Content>

      {showHelpModal && (
        <GenericModal
          title="How to use"
          closeModal={() => setShowHelpModal(false)}
          buttons={[
            {
              text: 'Close',
              onClick: () => setShowHelpModal(false),
              props: { small: true }
            }
          ]}
        >
          Welcome! If you want to start a chat with friends, just click on
          'Create new room', look for the Room ID on the top of the page, and
          give them this ID so they can enter it on this page. Alternatively,
          you can also hover your mouse on the Room ID and a 'Copy link' button
          will appear. Just click on it to copy and send the link to your
          friends!
        </GenericModal>
      )}
    </Styled.Container>
  )
}

export default Home
