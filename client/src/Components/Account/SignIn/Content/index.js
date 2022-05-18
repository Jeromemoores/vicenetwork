import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AccountURL } from '../../../../Config'
import Api from '../../../axios'

const initialState = {
    email: '',
    password: '',
    data: {}
}

function handleInputChange (e) {
    initialState[e.target.name] = e.target.value
}

export function PageContent() {
    const [status, setStatus] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem('token') !== null) {
            navigate('/home')
        }
    })

    function onSubmit (e) {
        e.preventDefault()
        const {email, password} = initialState
        const account = {
            email,
            password
        }
        Api.post(`${AccountURL}/signin`, account)
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
                setStatus('Logged in successfully! Redirecting...')
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
        <div className='si_wrapper'>
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
                <button type='submit'>Sign In</button>
            </form>
        </div>
    )
}
