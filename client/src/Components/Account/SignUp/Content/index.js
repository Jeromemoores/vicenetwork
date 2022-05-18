import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AccountURL } from '../../../../Config'
import Api from '../../../axios'


const initialState = {
    email: '',
    password: ''
}

function handleInputChange (e) {
    initialState[e.target.name] = e.target.value
}


export function PageContent() {
    const navigate = useNavigate()
    const [status, setStatus] = useState()

    useEffect(() => {
        if(localStorage.getItem('token') !== null) {
            navigate('/home')
        }
    })

    const onSubmit = (e) => {
        e.preventDefault()
        const {email, password} = initialState

        const newAccount = {
            email,
            password
        }
        Api.post(`${AccountURL}/signup`, newAccount)
        .then((res) => res.data)
        .then(({error, data}) => {
            const hasError = error !== null
            if(hasError) {
                setStatus(error)
                setTimeout(() => {
                    localStorage.clear()
                    setStatus('')
                }, 3000)
            } else {
                setStatus('Registered Successfully! Redirecting...')
                setTimeout(() => {
                    localStorage.clear()
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('authId', data.authId)
                    setStatus('')
                    navigate('/home')
                }, 3000)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }


    return(
        <div className='su_wrapper'>
            {status}
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Email</label>
                    <input type='email' name='email' placeholder='Enter Email...' onChange={handleInputChange} />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type='password' name='password' placeholder='Enter Password...' onChange={handleInputChange} />
                </div>
                <button type='submit'>Sign up</button>
            </form>
        </div>
    )
}
