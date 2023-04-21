const express = require('express')
const app = express()
const cors = require('cors') //Allows code to run on server AND localstorage.
const PORT = 8000
const path = require('path')
const router = express.Router();

app.use(cors())

const golfers = {
    'jon rahm': {
        'name': 'Jon Rahm',
        'age': 28,
        'nationality': 'Spanish',
        'height': `6'2''`
    },
    'scottie scheffler': {
        'name': 'Scottie Scheffler',
        'age': 26,
        'nationality': 'American',
        'height': `6'3''`
    },
    'max homa': {
        'name': 'Max Homa',
        'age': 32,
        'nationality': 'American',
        'height': `6'1''`
    },
    'dan smith': {
        'name': 'Dan Smith',
        'age': 25,
        'nationality': 'American',
        'height': `6'3''`
    }
}

router.get('/', (request, response)=>{
    response.sendFile(path.join(__dirname, '..', '/index.html')) //index.html
})

router.get('/api/:golferName', (request, response)=>{
    const golfersName = request.params.golferName.toLowerCase()
    if(golfers[golfersName]){
        response.json(golfers[golfersName])
    }else{
        response.json(golfers['dan smith'])
    }
}) 

module.exports = router;