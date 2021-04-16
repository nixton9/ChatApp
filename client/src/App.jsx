import React from 'react'
import Home from './pages/Home'
import ChatRoomContainer from './pages/ChatRoomContainer'
import { useLocalStorage } from './utils/useLocalStorage'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/globalstyles'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  const [username, setUsername] = useLocalStorage('username', '')
  const [usercolor, setUsercolor] = useLocalStorage('usercolor', 'yellow')

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route
            path="/room/:id"
            render={props => (
              <ChatRoomContainer
                {...props}
                username={username}
                setUsername={setUsername}
                usercolor={usercolor}
                setUsercolor={setUsercolor}
              />
            )}
          />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  )
}

export default App
