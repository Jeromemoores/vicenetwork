const express = require('express')
const session = require('express-session')
const app = express()
const cors = require('cors')
const db = require('./Models')
const { SECRET, PORT } = require('./Config')


app.use(express.json())
app.use(cors())
app.use(session({
    secret: SECRET,
    resave: true,
    saveUninitialized: false,
}))

app.use(express.urlencoded({extended: true}))

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With,GET,POST,content-type,Origin,Accept")
    req.header("Access-Control-Allow-Origin", "*")
    req.header("Access-Control-Allow-Headers", "X-Requested-With,GET,POST,content-type,Origin,Accept")
    next()
})


// Routers
const AccountsRouter = require('./Routes/Accounts')
app.use('/account', AccountsRouter)

const CaPostsRouter = require('./Routes/CaPosts')
app.use('/CaPosts', CaPostsRouter)

const NyPostsRouter = require('./Routes/NyPosts')
app.use('/NyPosts', NyPostsRouter)

const ApplicationRouter = require('./Routes/Application')
app.use('/apps', ApplicationRouter)

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Running on ${PORT}`)
    })
})