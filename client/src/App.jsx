import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import ChatRoomContainer from './pages/ChatRoomContainer'
import { useLocalStorage } from './utils/useLocalStorage'
import { ChatRoomProvider } from './utils/ChatRoomContext'
import { darkTheme } from './styles/theme'
import { GlobalStyle } from './styles/globalstyles'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import io from 'socket.io-client'
const ENDPOINT = '/'

const App = () => {
  const [socket, setSocket] = useState(null)
  const [username, setUsername] = useLocalStorage('username', '')
  const [usercolor, setUsercolor] = useLocalStorage('usercolor', 'yellow')

  useEffect(() => {
    setSocket(io(ENDPOINT))
  }, [])

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Switch>
          <Route
            path="/room/:id"
            render={props => (
              <ChatRoomProvider>
                <ChatRoomContainer
                  socket={socket}
                  username={username}
                  setUsername={setUsername}
                  usercolor={usercolor}
                  setUsercolor={setUsercolor}
                  {...props}
                />
              </ChatRoomProvider>
            )}
          />
          <Route
            path="/"
            render={props => <Home socket={socket} {...props} />}
          />
        </Switch>
      </ThemeProvider>
    </Router>
  )
}

export default App
