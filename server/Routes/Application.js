const express = require('express')
const router = express.Router()
const { Application, Accounts } = require('../Models')


router.post('/', async (req, res) => {
    res.json(await Application.create(req.body))
})
router.get('/', async (req, res) => {
    res.json(await Application.findAll())
})
router.get('/:id', async (req, res) => {
    res.json(await Application.findOne({where: {id: req.params.id}}))
})
router.get('/apps/:application_group', async (req, res) => {
    res.json(await Application.findAll({where: {application_group: req.params.application_group}}))
})
router.get('/apps/:application_group/:application_type', async (req, res) => {
    res.json(await Application.findAll({where: {application_group: req.params.application_group, application_type: req.params.application_type}}))
})
router.get('/user/:authId', async (req, res) => {
    if(!req.params.authId) {
        res.json('Not Signed In')
    } else {
        const result = await Accounts.findOne({where: {auth: req.params.authId}})
        const acc = {
            id: result.id
        }
        res.json(await Application.findAll({where: {account_Id: acc.id}}))
    }
})



module.exports = router