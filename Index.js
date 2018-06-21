const express = require ('express')
const app = express()
var bodyParser = require('body-parser')
var jwt = require('jsonwebtoken')
var secretkey = "wkwkwkwwkwkwk"

app.use(bodyParser.json())

app.get('/', (req, res) => {
    let obj = {
        'username':'reza',
        'pass':'aabbcc'
    }
    res.status(404).end('error')
})

app.get('/aaaaaa', (req, res) => {
    var token = req.headers['authorization']
    jwt.verify(token, secretkey, function(err, decode){
    if(decode == undefined){
        res.status(403).end('FORBIDDEN')
    }else{
        res.status(200).end(ok)
    }
});
})


app.get('/MyProfile/:userid', (req, res) => {
    let userid = req.params.userid
    res.send('Reza' + userid)
})

app.post('/User', (req, res) => {
    let body = req.body
    res.json(body)
})

app.post('/Login', (req, res) => {
    let body = req.body
    if (body.username = 'Reza'&& body.password=='aabbcc'){
    let token = jwt.sign({'Hello':'World'}, secretkey)
    res.send(token)
    }else{
        res.status(403).end('Forbidden')
    }
})

app.listen(3000)