const express = require('express')
const router = express.Router()
const { CaPosts } = require('../Models')

router.get('/', async (req, res) => {
    const listOfPosts = await CaPosts.findAll()
    res.json(listOfPosts)
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const post = await CaPosts.findByPk(id)
    res.json(post)
})

router.post('/', async (req, res) => {
    const post = req.body
    await CaPosts.create(post)
    res.json(post)
})

module.exports = router