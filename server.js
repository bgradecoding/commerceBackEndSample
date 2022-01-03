require('dotenv').config()
const express = require('express')
const app = express()

const jwt = require('jsonwebtoken')

app.use(express.json())

const posts =[
    {"username": "jinho",
"title":"Post 1"},
{"username": "neo",
"title":"Post 2"}
]


app.get('/posts',authenticateToken, (req, res)=> {
    res.json(posts.filter(post=>post.username===req.user.name))
})

let refreshTokens = []

app.post('/token',(req, res)=>{
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user)=>{
        if(err) return res.sendStatus(403)
        const accesToken = generateToken({ name : user.name })
        res.json(accesToken)
    })

})


app.delete('/logout', (req, res)=>{
    refreshTokens = refreshTokens.filter( (token=>token !== req.body.token) )
    res.sendStatus(204)
} )

app.post('/login',(req, res)=> {
    //Authenticate User
    const username = req.body.username
    const user ={name : username}
    const accesToken = generateToken(user)
    const refreshToken = jwt.sign( user, process.env.REFRESH_TOKEN_SECRET)
    refreshTokens.push(refreshToken)
    res.json({accessToken : accesToken, refreshToken:refreshToken})
})


function generateToken(user){
    return jwt.sign( user, process.env.ACCESS_TOKEN_SECRET, {expiresIn : '15m'} )
}

function authenticateToken(req, res, nex){
    const authHeader = req.headers['authorization']
    
    const token = authHeader && authHeader.split(' ')[1]
    if ( token == null ) return res.sendStatus(401)
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if(err) return res.sendStatus(403)
        req.user = user
        nex()
    })
}

app.listen(5000)