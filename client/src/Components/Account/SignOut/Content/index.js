import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function PageContent() {
    const navigate = useNavigate()
    useEffect(() => {
        if(window.localStorage.getItem('token') === null) {
            navigate('/home')
        } else {
            window.localStorage.clear()
            window.localStorage.removeItem('token')
        }
    })
    return(
        <>
            Sign Out
        </>
    )
}
