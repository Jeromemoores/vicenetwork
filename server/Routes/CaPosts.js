const express = require('express')
const router = express.Router()
const { CaPosts, Accounts } = require('../Models')

router.get('/', async (req, res) => {
    const listOfPosts = await CaPosts.findAll()
    res.json(listOfPosts)
})

router.get('/:authId', async (req, res) => {
    if(!req.params.authId) {
        res.json('Not Signed In')
    } else {
        const accountResult = await Accounts.findOne({where: {auth: req.params.authId}})
        const account = {
            id: accountResult.id
        }
        const posts = await CaPosts.findAll({where: {account_Id: account.id}})
        res.json(posts)
    }
})

router.get('/:id', async (req, res) => {
    const post = await CaPosts.findByPk(req.params.id)
    res.json(post)
})

router.post('/', async (req, res) => {
    const post = req.body
    await CaPosts.create(post)
    res.json(post)
})

module.exports = router