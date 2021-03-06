// import {useState, useEffect} from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

// import Api from '../axios'
// import { AccountURL } from '../../Config'

export function CaNavbar() {
    // const [role, setRole] = useState('')

    // useEffect(() => {
    //     Api.get(`${AccountURL}/${localStorage.getItem('authId')}`)
    //     .then(res => {
    //         setRole(res.data.role)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }, [])

    return(
        <Navbar className='ca_navbar'>
            <Nav className='m-auto'>
                <NavDropdown title='JOIN US'>
                    <div className='ca_dd_wrapper'>
                        <div className='ca_dd_item'>
                            <NavDropdown.ItemText>JOIN THE COMMUNITY</NavDropdown.ItemText>
                            <hr />
                            <NavDropdown.Item>Community Application</NavDropdown.Item>
                        </div>
                        <div className='ca_dd_item'>
                            <NavDropdown.ItemText>JOIN A DEPARTMENT</NavDropdown.ItemText>
                            <hr />
                            <NavDropdown.Item>Join LAPD</NavDropdown.Item>
                            <NavDropdown.Item>Join LASD</NavDropdown.Item>
                            <NavDropdown.Item>Join CHP</NavDropdown.Item>
                        </div>
                        <div className='ca_dd_item'>
                            <NavDropdown.ItemText>JOIN A SUBDIVISION</NavDropdown.ItemText>
                            <hr />
                            <NavDropdown.Item>Human Resources Application</NavDropdown.Item>
                            <NavDropdown.Item>Staff Application</NavDropdown.Item>
                            <NavDropdown.Item>Development Team Application</NavDropdown.Item>
                            <NavDropdown.Item>Twitch Team Application</NavDropdown.Item>
                        </div>
                    </div>
                </NavDropdown>
                <NavDropdown title='RESOURCES' className='rss_dd'>
                    <div className='ca_dd_wrapper'>
                        <div className='ca_dd_item'>
                            <NavDropdown.ItemText>COMMUNITY RESOURCES</NavDropdown.ItemText>
                            <hr />
                            <NavDropdown.Item>Terms of Service</NavDropdown.Item>
                        </div>
                    </div>
                    <div className='ca_dd_wrapper'>
                        <div className='ca_dd_item'>
                            <NavDropdown.ItemText>COMMUNITY RESOURCES</NavDropdown.ItemText>
                            <hr />
                            <NavDropdown.Item>LOA Form</NavDropdown.Item>
                            <NavDropdown.Item>Terms of Service</NavDropdown.Item>
                        </div>
                        <div className='ca_dd_item'>
                            <NavDropdown.ItemText>STAFF RESOURCES</NavDropdown.ItemText>
                            <hr />
                            <NavDropdown.Item>FTO Evaluation</NavDropdown.Item>
                            <NavDropdown.Item>HR Interview DB</NavDropdown.Item>
                            <NavDropdown.Item>Command Discipline Log</NavDropdown.Item>
                        </div>
                    </div>
                </NavDropdown>
                <NavDropdown title='EMERGENCY SERVICES' className='es_dd'>
                    <div className='ca_dd_wrapper'>
                        <div className='ca_dd_item'>
                            <NavDropdown.ItemText>DEPARTMENTS</NavDropdown.ItemText>
                            <hr />
                            <NavDropdown.Item href='/ca/lapd'>LAPD</NavDropdown.Item>
                            <NavDropdown.Item href='/ca/lasd'>LASD</NavDropdown.Item>
                            <NavDropdown.Item href='/ca/chp'>CHP</NavDropdown.Item>
                        </div>
                        <div className='ca_dd_item'>
                            <NavDropdown.ItemText>INTERNAL</NavDropdown.ItemText>
                            <hr />
                            <NavDropdown.Item>FTO Application</NavDropdown.Item>
                        </div>
                        <div className='ca_dd_item'>
                            <NavDropdown.ItemText>RESOURCES</NavDropdown.ItemText>
                            <hr />
                            <NavDropdown.Item>Warrant Requests</NavDropdown.Item>
                            <NavDropdown.Item>LEO Reports</NavDropdown.Item>
                            <NavDropdown.Item>Firearm Permit Log</NavDropdown.Item>
                        </div>
                    </div>
                </NavDropdown>
                <NavDropdown title='CHAMBER OF COMMERCE' className='coc_dd'>
                    <div className='ca_dd_wrapper'>
                        <div className='ca_dd_item'>
                            <NavDropdown.ItemText>BUSINESSES</NavDropdown.ItemText>
                            <hr />
                        </div>
                        <div className='ca_dd_item'>
                            <NavDropdown.ItemText>REGISTRAR'S OFFICE</NavDropdown.ItemText>
                            <hr />
                            <NavDropdown.Item>Business Application</NavDropdown.Item>
                        </div>
                    </div>
                </NavDropdown>
                <NavDropdown title='CIVILIAN' className='c_dd'>
                    <div className='ca_dd_wrapper'>
                        <div className='ca_dd_item'>
                            <NavDropdown.ItemText>DEPARTMENTS</NavDropdown.ItemText>
                            <hr />
                            <NavDropdown.Item>Civilian Department</NavDropdown.Item>
                        </div>
                        <div className='ca_dd_item'>
                            <NavDropdown.ItemText>RESOURCES</NavDropdown.ItemText>
                            <hr />
                            <NavDropdown.Item>Firearm Permit Application</NavDropdown.Item>
                            <NavDropdown.Item>Firearm Purchase Application</NavDropdown.Item>
                            <NavDropdown.Item>Account Modification Form</NavDropdown.Item>
                        </div>
                        <div className='ca_dd_item'>
                            <NavDropdown.ItemText>INTERNAL</NavDropdown.ItemText>
                            <hr />
                            <NavDropdown.Item>Civilian Staff Application</NavDropdown.Item>
                        </div>
                    </div>
                </NavDropdown>
            </Nav>
        </Navbar>
    )
}
