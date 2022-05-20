import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import Api from '../axios'
import { AccountURL } from '../../Config'
import '../../Style/Navbar.css'

export function MainNavbar() {
    const [username, setUsername] = useState('')

    useEffect(() => {
        if(!window.localStorage.getItem('authId')) {
            console.log('Sign IN')
        } else {
            Api.get(`${AccountURL}/${window.localStorage.getItem('authId')}`)
            .then(res => {
                const data = JSON.parse(JSON.parse(JSON.stringify(res.data.data)))
                setUsername(data.username)
            })
            .catch(err => {
                console.log(err)
            })
        }
    })

    return(
        <>
            {localStorage.getItem('token') ? // signed in
                <>
                    <Navbar className='main_navbar'>
                        <Navbar.Toggle aria-controls='main_navbar' />
                        <Navbar.Collapse id='main_navbar'>
                            <Nav className='me-auto offset-right dark-theme-nav'>
                                <Nav.Link href='/'>HOME</Nav.Link>
                                <NavDropdown title='SERVER'>
                                    <NavDropdown.Item href='/ca'>California Life RP</NavDropdown.Item>
                                    <hr className='main_navbar_break'/>
                                    <NavDropdown.Item href='/ny'>New York Life RP</NavDropdown.Item>
                                    <hr className='main_navbar_break'/>
                                    <NavDropdown.Item href='/fl'>Florida Life RP</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href='/forum'>FORUM</Nav.Link>
                                <Nav.Link>DISCORD</Nav.Link>
                                <Nav.Link href='https://www.patreon.com/ViceNetwork'>PATREON</Nav.Link>
                            </Nav>
                            <Nav className='offset-left dark-theme-nav'>
                                <NavDropdown

                                    title={
                                        username ? `${username}` : 'Account'
                                    }

                                    align='end'>
                                    <NavDropdown.Item href='/myaccount'>View Account</NavDropdown.Item>
                                    <NavDropdown.Item>View Applications</NavDropdown.Item>
                                    <NavDropdown.Item>View Messages</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href='/signout'>Sign Out</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </>
                : // signed out
                <>
                    <Navbar className='main_navbar'>
                        <Navbar.Toggle aria-controls='main_navbar' />
                        <Navbar.Collapse id='main_navbar'>
                            <Nav className='me-auto offset-right dark-theme-nav'>
                                <Nav.Link href='/'>HOME</Nav.Link>
                                <NavDropdown title='SERVER'>
                                    <NavDropdown.Item href='/ca'>California Life RP</NavDropdown.Item>
                                    <hr className='main_navbar_break'/>
                                    <NavDropdown.Item href='/ny'>New York Life RP</NavDropdown.Item>
                                    <hr className='main_navbar_break'/>
                                    <NavDropdown.Item href='/fl'>Florida Life RP</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href='/forum'>FORUM</Nav.Link>
                                <Nav.Link>DISCORD</Nav.Link>
                                <Nav.Link href='https://www.patreon.com/ViceNetwork'>PATREON</Nav.Link>
                            </Nav>
                            <Nav className='offset-left dark-theme-nav'>
                                <NavDropdown title={`ACCOUNT`} align='end'>
                                    <NavDropdown.Item href='/signin'>Sign In</NavDropdown.Item>
                                    <NavDropdown.Item href='/signup'>Sign Up</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </>
            }
            <hr className='main_navbar_hr'/>
        </>
    )
}
