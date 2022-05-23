import { useState, useEffect } from 'react'
import Api from '../../../axios'
import { MyApps } from '../../../../Config'



export function PageContent() {
    const [data, setData] = useState([])

    useEffect(() => {
        const auth = window.localStorage.getItem('authId')

    }, [])

    return(
        <>

        </>
    )
}
