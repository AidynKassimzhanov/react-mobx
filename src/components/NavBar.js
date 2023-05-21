import React, { useState } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import Header from './Header'
import { observer } from 'mobx-react-lite'
import user from '../store/user'

const NavBar = observer(() => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  return (
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home"> <Header /> </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Admin Page</Nav.Link>
              <Nav.Link href="#features">User Page</Nav.Link>
              <Nav.Link href="#pricing">Games</Nav.Link>
            </Nav>
            {user.isLogin ?
              <div>
                <Button onClick={() => user.logout()}>Log out</Button> 
              </div>
            :
              <div>
                <input 
                  type="text" 
                  value={username} 
                  onChange={e => setUsername(e.target.value)}
                  placeholder="username"
                /> 
                <input 
                  type="password" 
                  value={password} 
                  onChange={e => setPassword(e.target.value)}
                  placeholder="password"
                  style={{marginLeft: '20px'}}
                /> 
                <Button 
                  style={{marginLeft: '20px'}}
                  onClick={() => user.login(username, password)}
                >
                    Log in 
                </Button> 
                <Button 
                  onClick={() => user.register(username, password)}
                  style={{marginLeft: '20px'}}
                >
                  Register
                </Button> 
              </div>
            }
            
          </Container>
        </Navbar>
   
  )
})

export default NavBar