const express = require('express')
const router = express.Router()
const { NyPosts, Accounts } = require('../Models')

router.get('/', async (req, res) => {
    const listOfPosts = await NyPosts.findAll()
    res.json(listOfPosts)
})

router.get('/:authId', async (req, res) => {
    if(!req.params.authId) {
        res.json('Not Signed in')
    } else {
        const accountResult = await Accounts.findOne({where: {auth: req.params.authId}})
        const account = {
            id: accountResult.id
        }
        const posts = await NyPosts.findAll({where: {account_Id: account.id}})
        res.json(posts)
    }
})

router.get('/:id', async (req, res) => {
    const post = await NyPosts.findByPk(req.params.id)
    res.json(post)
})

router.post('/', async (req, res) => {
    const post = req.body
    await NyPosts.create(post)
    res.json(post)
})

module.exports = router