import { useEffect } from 'react'
import { AccountURL } from '../../../Config'
import Api from '../../axios'

export function PageContent() {
    useEffect(() => {
        Api.get(`${AccountURL}`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return(
        <>
            <h1>Hello</h1>
        </>
    )
}
