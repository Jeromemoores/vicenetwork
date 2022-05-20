import { useState, useEffect } from 'react'
import { Card, Modal, Form, Button } from 'react-bootstrap'
import Api from '../../../axios'

import { AccountURL, CaPostsURL, NyPostsURL } from '../../../../Config'

import '../../../../Style/MyAccount.css'

const initialValues = {
    username : '',
    quote: '',
    birth_Date: '',
    followers: '',
    following: '',
    role: '',
    profile_primary: '',
    profile_secondary: '',
    discord: '',
    steam: '',
    about: '',
    profile_photo: '',
    cover_photo: ''
}


export function PageContent() {
    const [data, setData] = useState(initialValues)
    const [caPosts, setCaPosts] = useState([])
    const [nyPosts, setNyPosts] = useState([])

    const [open, setOpen] = useState(false)

    const initialFormValues = {
        username: data.username,
        quote: data.quote,
        birthDate: data.birthDate,
        discord: data.discord,
        about: data.about,
        first_name: data.first_name,
        last_name: data.last_name,
        profile_primary: data.profile_primary,
        profile_secondary: data.profile_secondary,
        font_color: data.font_color,
        steam: data.steam,
        cover_photo: data.cover_photo,
        profile_photo: data.profile_photo,
    }

    function handleInputChange (e) {
        initialFormValues[e.target.name] = e.target.value
    }
    function handleOpen() {
        setOpen(true)
    }
    function handleClose() {
        setOpen(false)
    }
    function onSubmit (e) {
        const auth = window.localStorage.getItem('authId')
        const {username, quote, discord, about, first_name, last_name, profile_primary, profile_secondary, steam, profile_photo, cover_photo, font_color} = initialFormValues
        const update = {
            account_data: {
                "username": username,
                "quote": quote,
                "discord": discord,
                "about": about,
                "first_name": first_name,
                "last_name" : last_name,
                "profile_primary": profile_primary,
                "profile_secondary": profile_secondary,
                "font_color": font_color,
                "steam": steam,
                "profile_photo": profile_photo,
                "cover_photo": cover_photo
            }
        }
        Api.put(`${AccountURL}/${auth}`, update)
        .then((res => res.data))
        .catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        const auth = window.localStorage.getItem('authId')
        Api.get(`${AccountURL}/${auth}`)
        .then(res => {
            const data = JSON.parse(JSON.parse(JSON.stringify(res.data.data)))
            const data2 = JSON.parse(JSON.parse(JSON.stringify(res.data.role)))
            const account = {
                username: data.username,
                quote: data.quote,
                birth_date: data.birth_date,
                discord: data.discord,
                about: data.about,
                first_name: data.first_name,
                last_name: data.last_name,
                profile_primary: data.profile_primary,
                profile_secondary: data.profile_secondary,
                font_color: data.font_color,
                steam: data.steam,
                followers: data.followers,
                following: data.following,
                cover_photo: data.cover_photo,
                profile_photo: data.profile_photo,
                role: data2.roles
            }
            setData(account)
        })
        .catch(err => {
            console.log(err)
        })
        Api.get(`${CaPostsURL}/${auth}`)
        .then(res => {
            const post = res.data
            setCaPosts(post)
        })
        .catch(err => {
            console.log(err)
        })
        Api.get(`${NyPostsURL}/${auth}`)
        .then(res => {
            const post = res.data
            setNyPosts(post)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return(
        <div className='acc_wrapper' style={{'color': `${data.font_color}`}}>
            <Modal show={open} onHide={handleClose} size='lg'>
                <Form onSubmit={onSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Edit Your Account
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId='username' className='form_group'>
                            <Form.Label>Username: </Form.Label>
                            <Form.Control type='text' name='username' placeholder={data.username} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId='name' className='form_group2'>
                            <Form.Label>Name: </Form.Label>
                            <div>
                                <Form.Control type='text' name='first_name' placeholder={data.first_name} onChange={handleInputChange} />
                                <Form.Control type='text' name='last_name' placeholder={data.last_name} onChange={handleInputChange} className='second_f' />
                            </div>
                        </Form.Group>
                        <Form.Group controlId='steam' className='form_group'>
                            <Form.Label>Steam: </Form.Label>
                            <Form.Control type='text' name='steam' placeholder={data.steam} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId='discord' className='form_group'>
                            <Form.Label>Discord: </Form.Label>
                            <Form.Control type='text' name='discord' placeholder={data.discord} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId='profile_primary' className='form_group2'>
                            <Form.Label>Primary Color: </Form.Label>
                            <div>
                                <Form.Control type='text' name='profile_primary' placeholder={data.profile_primary} onChange={handleInputChange} />
                                <Form.Control type='color' name='profile_primary' defaultValue={data.profile_primary} onChange={handleInputChange} className='second_f'/>
                            </div>
                        </Form.Group>
                        <Form.Group controlId='profile_secondary' className='form_group2'>
                            <Form.Label>Secondary Color: </Form.Label>
                            <div>
                                <Form.Control type='text' name='profile_secondary' placeholder={data.profile_secondary} onChange={handleInputChange} />
                                <Form.Control type='color' name='profile_secondary' defaultValue={data.profile_secondary} onChange={handleInputChange} className='second_f'/>
                            </div>
                        </Form.Group>
                        <Form.Group controlId='profile_secondary' className='form_group2'>
                            <Form.Label>Font Color: </Form.Label>
                            <div>
                                <Form.Control type='text' name='font_color' placeholder={data.font_color} onChange={handleInputChange} />
                                <Form.Control type='color' name='font_color' defaultValue={data.font_color} onChange={handleInputChange} className='second_f'/>
                            </div>
                        </Form.Group>
                        <Form.Group controlId='profile_photo' className='form_group2'>
                            <Form.Label>Profile Picture: </Form.Label>
                            <div>
                                <Form.Control type='text' name='profile_photo' placeholder={data.profile_photo} onChange={handleInputChange}/>
                                <button className='upload_button'>^</button>
                            </div>
                        </Form.Group>
                        <Form.Group controlId='cover_photo' className='form_group2'>
                            <Form.Label>Cover Picture: </Form.Label>
                            <div>
                                <Form.Control type='text' name='cover_photo' placeholder={data.cover_photo} onChange={handleInputChange} />
                                <Form.Control type='file' />
                            </div>
                        </Form.Group>
                        <Form.Group controlId='quote' className='form_group'>
                            <Form.Label>Quote: </Form.Label>
                            <Form.Control type='text' name='quote' placeholder={data.quote} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId='about' className='form_group'>
                            <Form.Label>About: </Form.Label>
                            <Form.Control as='textarea' name='about' placeholder={data.about} onChange={handleInputChange} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='primary' type='submit'>
                            Update
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
            <div className='acc_top'>
                <Card className='acc_card' style={{'backgroundImage': `url(${data.cover_photo})`}}>
                    <Card.Body className='acc_card_body'>
                        <div className='acc_card_left'>
                            <div className='top'>

                            </div>
                            <div className='bottom'>
                                <img
                                    src={data.profile_photo}
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
                                <button className='acc_edit' onClick={handleOpen}><h5>Edit Profile</h5></button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div className='acc_bottom'>
                <div className='acc_bottom_left'>
                    <Card className='acc_bottom_left_card'>
                        <Card className='acc_followers' style={{'backgroundColor' : `${data.profile_primary}`}}>
                            <div className='card_body' style={{'backgroundColor' : `${data.profile_primary}`}}>
                                <h6>{data.followers} Followers</h6>
                                <hr className='no_padding'  style={{'color': `${data.profile_secondary}`, 'opacity': '100'}}/>
                                <p>List of all followers here</p>
                            </div>
                        </Card>
                        <Card className='acc_following' style={{'backgroundColor' : `${data.profile_primary}`}}>
                            <div className='card_body' style={{'backgroundColor' : `${data.profile_primary}`}}>
                                <h6>Following {data.following} </h6>
                                <hr className='no_padding'  style={{'color': `${data.profile_secondary}`, 'opacity': '100'}}/>
                                <p>List of all following here</p>
                            </div>
                        </Card>
                        <Card className='acc_contact' style={{'backgroundColor' : `${data.profile_primary}`}}>
                            <div className='card_header' style={{'backgroundColor' : `${data.profile_primary}`}}>
                                <h6>Contact Methods</h6>
                                <hr className='no_padding' style={{'color': `${data.profile_secondary}`, 'opacity': '100'}}/>
                            </div>
                            <div className='card_body2' style={{'backgroundColor' : `${data.profile_primary}`}}>
                                <div className='card_inner_item'>
                                    <strong>Discord</strong> <p>{data.discord}</p>
                                </div>
                                <hr  style={{'color': `${data.profile_secondary}`, 'opacity': '100'}}/>
                                <div className='card_inner_item'>
                                    <strong>Steam</strong> <p className='second2 steam'>{data.steam}</p>
                                </div>
                            </div>
                        </Card>
                        <Card className='acc_about' style={{'backgroundColor' : `${data.profile_primary}`}}>
                            <div className='card_header' style={{'backgroundColor' : `${data.profile_primary}`}}>
                                <h5>About {' '}
                                    {
                                        data.first_name ? `${data.first_name} ${data.last_name}` : `${data.username}`
                                    }
                                </h5>
                                <hr className='no_padding'  style={{'color': `${data.profile_secondary}`, 'opacity': '100'}}/>
                            </div>
                            <div className='card_body' style={{'backgroundColor' : `${data.profile_primary}`}}>
                                <p>{data.about}</p>
                            </div>
                        </Card>
                    </Card>
                </div>
                <div className='acc_bottom_right'>
                    <Card className='acc_bottom_right_card'>
                        {caPosts.map((post) => {
                            return  <div key={post.id} >
                                        <Card className='post_card' style={{'backgroundColor' : `${data.profile_primary}`}}>
                                            <div className='card_body' style={{'backgroundColor' : `${data.profile_primary}`}}>
                                                <div className='post_card_header' >
                                                    <img src={data.profile_photo} alt='acc_img' />
                                                    <div className='test'>
                                                        <p>{post.post_title}</p>
                                                        <p>California Forum Post</p>
                                                    </div>
                                                </div>
                                                {post.post_picture ?
                                                    <div className='post_card_body' >
                                                        <img src={post.post_picture} alt='idk' />
                                                        <p className='second_item'>
                                                        {post.post_description}
                                                        </p>
                                                    </div>
                                                    :
                                                    <div className='post_card_body'>
                                                        <p className='second_item'>
                                                            {post.post_description}
                                                        </p>
                                                    </div>
                                                }
                                                <div className='post_card_footer'>
                                                    <p>{post.createdAt.slice(0, 10)}</p>
                                                    <p>8 Comments</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                        })}
                        {nyPosts.map((post) => {
                            return  <div key={post.id} >
                                        <Card className='post_card' style={{'backgroundColor' : `${data.profile_primary}`}}>
                                            <div className='card_body' style={{'backgroundColor' : `${data.profile_primary}`}}>
                                                <div className='post_card_header' >
                                                    <img src={data.profile_photo} alt='acc_img' />
                                                    <div className='test'>
                                                        <p>{post.post_title}</p>
                                                        <p>New York Forum Post</p>
                                                    </div>
                                                </div>
                                                {post.post_picture ?
                                                    <div className='post_card_body' >
                                                        <img src={post.post_picture} alt='idk' />
                                                        <p className='second_item'>
                                                        {post.post_description}
                                                        </p>
                                                    </div>
                                                    :
                                                    <div className='post_card_body'>
                                                        <p className='second_item'>
                                                            {post.post_description}
                                                        </p>
                                                    </div>
                                                }
                                                <div className='post_card_footer'>
                                                    <p>{post.createdAt.slice(0, 10)}</p>
                                                    <p>8 Comments</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                        })}
                    </Card>
                </div>
            </div>
        </div>
    )
}
