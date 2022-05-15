import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

import '../../Style/Navbar.css'

export function MainNavbar() {
    return(
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
                    </Nav>
                    <Nav className='offset-left dark-theme-nav'>
                        <NavDropdown title='ACCOUNT' align='end'>
                            <NavDropdown.Item>View Account</NavDropdown.Item>
                            <NavDropdown.Item>View Applications</NavDropdown.Item>
                            <NavDropdown.Item>View Messages</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Sign Out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <hr className='main_navbar_hr'/>
        </>
    )
}
