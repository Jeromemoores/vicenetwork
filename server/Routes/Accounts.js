const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { Accounts } = require('../Models')
const { SECRET } = require('../Config')

router.get('/accounts', async (req, res) => {
    const listOfAccounts = await Accounts.findAll()
    res.json(listOfAccounts)
})

router.post('/signup', async (req, res) => {
    const email = await req.body.email
    const password = await req.body.password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const newAccount = {
        email: email,
        password: hashedPassword
    }
    const existingEmail = await Accounts.findOne({where: {email: email}})

    if(existingEmail) {
        res.json({
            error: 'Email already in use, did you forget your password?',
            data: {}
        })
        return
    } else {
        await Accounts.create(newAccount)
    }

    const account = await Accounts.findOne({where: {email: email}})
    req.session.loggedin = true
    req.session.user = account
    const authId = account.auth
    const token = jwt.sign(
        {
            email: account.email,
            id: account.id,
            expiresIn: '1d'
        },
        SECRET
    )
    req.header('authorization', token)
    res.header('authorization', token).json({
        error: null,
        data: {
            token: token,
            auth: true,
            authId: authId
        }
    })
})

router.post('/signin', async (req, res) => {
    const {email, password} = req.body
    const account = await Accounts.findOne({where: {email: email}})

    if(account !== null) {
        if(!account || !bcrypt.compareSync(password, account.password)) {
            res.json({
                error: 'Invalid Credentials',
                data: {}
            })
        } else {
            const authId = account.authId
            const token = jwt.sign(
                {
                    email: account.email,
                    id: account.id,
                    expiresIn: '1d'
                },
                SECRET
            )
            req.header('authorization', token)
            res.header('authorization', token).json({
                error: null,
                data: {
                    token: token,
                    auth: true,
                    authId: authId
                }
            })
            req.session.loggedin = true,
            req.session.user = account
        }
    } else {
        res.json({
            error: 'Invalid Credentials',
            data: {}
        })
    }
})

// router.get('/signout', (req, res) => {

// })


module.exports = router