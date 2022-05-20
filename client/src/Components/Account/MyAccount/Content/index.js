import {useState, useEffect} from 'react'
import { Card } from 'react-bootstrap'

import Api from '../../../axios'
import { AccountURL } from '../../../../Config'

import '../../../../Style/MyAccount.css'

const initialValues = {
    username : '',
    quote: '',
    birthDate: '',
    followers: '',
    following: '',
    role: '',
    discord: '',
    steam: '',
    about: '',
    profilephoto: '',
    coverphoto: ''
}

export function PageContent() {
    const [data, setData] = useState(initialValues)

    useEffect(() => {
        const auth = window.localStorage.getItem('authId')
        Api.get(`${AccountURL}/${auth}`)
        .then(res => {
            const data = JSON.parse(JSON.parse(JSON.stringify(res.data.data)))
            const data2 = JSON.parse(JSON.parse(JSON.stringify(res.data.role)))
            const account = {
                username: data.username,
                quote: data.quote,
                birthDate: data.birthDate,
                discord: data.discord,
                about: data.about,
                name: `${data.first_name} ${data.last_name}`,
                steam: data.steam,
                followers: data.followers,
                following: data.following,
                coverphoto: data.coverphoto,
                profilephoto: data.profilephoto,
                role: data2.roles
            }
            setData(account)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return(
        <div className='acc_wrapper'>
            <div className='acc_top'>
                <Card className='acc_card' style={{'backgroundImage': `url(${data.coverphoto})`}}>
                    <Card.Body className='acc_card_body'>
                        <div className='acc_card_left'>
                            <div className='top'>

                            </div>
                            <div className='bottom'>
                                <img
                                    src={data.profilephoto}
                                    alt='acc_img'
                                />
                                <div>
                                    <h5>{data.username}</h5>
                                    <h6>{data.role}</h6>
                                    <p>"{data.quote}"</p>
                                </div>
                            </div>
                        </div>
                        <div className='acc_card_right'>
                            <div className='top'>
                                <button className='acc_edit'><h5>Edit Profile</h5></button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div className='acc_bottom'>
                <div className='acc_bottom_left'>
                    <Card className='acc_bottom_left_card'>
                        <Card className='acc_followers'>
                            <div className='card_body'>
                                <h6>{data.followers} Followers</h6>
                                <hr className='no_padding'/>
                                <p>List of all followers here</p>
                            </div>
                        </Card>
                        <Card className='acc_following'>
                            <div className='card_body'>
                                <h6>Following {data.following} </h6>
                                <hr className='no_padding'/>
                                <p>List of all following here</p>
                            </div>
                        </Card>
                        <Card className='acc_contact'>
                            <div className='card_header'>
                                <h6>Contact Methods</h6>
                            </div>
                            <hr className='no_padding'/>
                            <div className='card_body2'>
                                <div className='card_inner_item'>
                                    <strong>Discord</strong> <p>{data.discord}</p>
                                </div>
                                <hr />
                                <div className='card_inner_item'>
                                    <strong>Steam</strong> <p className='second2 test'>{data.steam}</p>
                                </div>
                            </div>
                        </Card>
                        <Card className='acc_about'>
                            <div className='card_header'>
                                <h5>About {' '}
                                    {
                                        data.name ? `${data.name}` : `${data.username}`
                                    }
                                </h5>
                            </div>
                            <hr className='no_padding'/>
                            <div className='card_body'>
                                <p>{data.about}</p>
                            </div>
                        </Card>
                    </Card>
                </div>
                <div className='acc_bottom_right'>
                    <Card className='acc_bottom_right_card'>
                        <Card className='post_card'>
                            <div className='card_body'>
                                <div className='post_card_header'>
                                    <img src={data.profilephoto} alt='acc_img' />
                                    <p>Post Title Goes Here</p>
                                </div>
                                <div className='post_card_body'>
                                    <img src='http://picsum.photos/180/200' alt='idk' />
                                    <p className='second_item'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet commodo nulla. Amet porttitor eget dolor morbi. Donec enim diam vulputate ut pharetra. Tincidunt augue interdum velit euismod in pellentesque. Nisl tincidunt eget nullam non nisi est. Rhoncus dolor purus non enim praesent elementum facilisis leo. Lorem donec massa sapien faucibus et molestie. Mi bibendum neque egestas congue quisque. Tortor dignissim convallis aenean et tortor. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Amet venenatis urna cursus eget nunc scelerisque. Ac tortor dignissim convallis aenean et. Condimentum id venenatis a condimentum.
                                        Id consectetur purus ut faucibus pulvinar. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Malesuada proin libero nunc consequat interdum. Morbi tristique senectus et netus et malesuada fames. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Dolor sit amet consectetur adipiscing elit. Massa tincidunt nunc pulvinar sapien et. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Erat velit scelerisque in dictum non. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Eu non diam phasellus vestibulum. Massa massa ultricies mi quis hendrerit dolor magna. Faucibus scelerisque eleifend donec pretium. Urna nunc id cursus metus. Vel orci porta non pulvinar neque laoreet suspendisse. Tempus iaculis urna id volutpat lacus. Justo eget magna fermentum iaculis eu non diam.
                                    </p>
                                </div>
                                <div className='post_card_footer'>
                                    <p>May 19, 2022</p>
                                    <p>8 Comments</p>
                                </div>
                            </div>
                        </Card>
                        <Card className='post_card'>
                            <div className='card_body'>
                                <div className='post_card_header'>
                                    <img src={data.profilephoto} alt='acc_img' />
                                    <p>Post Title Goes Here</p>
                                </div>
                                <div className='post_card_body'>
                                    <img src='http://picsum.photos/180/200' alt='idk' />
                                    <p className='second_item'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet commodo nulla. Amet porttitor eget dolor morbi. Donec enim diam vulputate ut pharetra. Tincidunt augue interdum velit euismod in pellentesque. Nisl tincidunt eget nullam non nisi est. Rhoncus dolor purus non enim praesent elementum facilisis leo. Lorem donec massa sapien faucibus et molestie. Mi bibendum neque egestas congue quisque. Tortor dignissim convallis aenean et tortor. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Amet venenatis urna cursus eget nunc scelerisque. Ac tortor dignissim convallis aenean et. Condimentum id venenatis a condimentum.
                                        Id consectetur purus ut faucibus pulvinar. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Malesuada proin libero nunc consequat interdum. Morbi tristique senectus et netus et malesuada fames. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Dolor sit amet consectetur adipiscing elit. Massa tincidunt nunc pulvinar sapien et. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Erat velit scelerisque in dictum non. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Eu non diam phasellus vestibulum. Massa massa ultricies mi quis hendrerit dolor magna. Faucibus scelerisque eleifend donec pretium. Urna nunc id cursus metus. Vel orci porta non pulvinar neque laoreet suspendisse. Tempus iaculis urna id volutpat lacus. Justo eget magna fermentum iaculis eu non diam.
                                    </p>
                                </div>
                                <div className='post_card_footer'>
                                    <p>May 19, 2022</p>
                                    <p>8 Comments</p>
                                </div>
                            </div>
                        </Card>
                    </Card>
                </div>
            </div>
        </div>
    )
}
