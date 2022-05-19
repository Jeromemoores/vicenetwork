const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { Accounts } = require('../Models')
const { SECRET } = require('../Config')


router.get('/', async(req, res) => {

})

router.get('/accounts', async (req, res) => {
    const listOfAccounts = await Accounts.findAll()
    res.json(listOfAccounts)
})


router.get('/accounts/:id' , async(req, res) => {
    const result = await Accounts.findOne({where: {id: req.params.id}})
    const account = {
        email: result.email
    }
    res.json(account)
})

router.post('/signup', async (req, res) => {
    const {email, password} = req.body
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

    const id = account.id
    const token = jwt.sign({id}, SECRET, {expiresIn: '1d'})

    Accounts.update({token: token}, {where: {email: email}})

    req.header('authorization', token)
    res.header('authorization', token).json({
        error: null,
        data: {
            token: token,
            auth: true,
            authId: account.auth
        }
    })
})

router.post('/signin', async (req, res) => {
    const {email, password} = await req.body
    const account = await Accounts.findOne({where: {email: email}})

    if(account !== null) {
        if(!account || !bcrypt.compareSync(password, account.password)) {
            res.json({
                error: 'Invalid Credentials',
                data: {}
            })
        } else {
            const id = account.id
            const token = jwt.sign({id}, SECRET, {expiresIn: '1d'})

            req.session.loggedin = true
            req.session.user = account

            Accounts.update({token: token}, {where: {email: email}})

            req.header('authorization', token)
            res.header('authorization', token).json({
                error: null,
                data: {
                    token: token,
                    auth: true,
                    authId: account.auth
                }
            })
        }
    } else {
        res.json({
            error: 'Invalid Credentials',
            data: {}
        })
    }
})


module.exports = router