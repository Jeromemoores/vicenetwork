import { useState, useEffect } from 'react'
import Api from '../../../axios'
import { MyApps } from '../../../../Config'


export function PageContent() {
    const [data, setData] = useState([])

    useEffect(() => {
        const auth = window.localStorage.getItem('authId')
        Api.get(`${MyApps}/user/${auth}`)
        .then(res => {
            const data = res.data
            const app_data = JSON.parse(JSON.parse(JSON.stringify(data[0].application_data)))
            console.log(data)
            console.log(app_data.first_name)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return(
        <>
        </>
    )
}
