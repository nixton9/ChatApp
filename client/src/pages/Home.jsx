import React, { useState } from 'react'
import { MainButton } from '../components/MainButton'
import { Styled } from '../styles/Home.styles'
import { ReactComponent as Logo } from '../assets/logo.svg'
import { generateRandomString } from '../utils/helpers'
import { useHistory } from 'react-router-dom'

const Home = () => {
  const [inputVal, setInputVal] = useState('')
  const history = useHistory()

  const createRoom = () => history.push(`/room/${generateRandomString()}`)

  const enterRoom = e => {
    e.preventDefault()
    console.log(inputVal)
  }

  return (
    <Styled.Container>
      <Styled.Content>
        <Logo />
        <p>Free, fast and anonymous chat app with no traces whatsoever.</p>
        <div className="buttons">
          <MainButton onClick={createRoom}>Create new room</MainButton>
          <Styled.InputContainer onSubmit={enterRoom}>
            <div className="wrapper">
              <input
                type="text"
                placeholder="Enter room ID"
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
              />
            </div>
          </Styled.InputContainer>
        </div>
      </Styled.Content>
    </Styled.Container>
  )
}

export default Home
