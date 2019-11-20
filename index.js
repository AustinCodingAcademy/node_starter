const express = require('express')
const app = express()
const port = process.env.PORT || 4000

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.use(express.json())

app.get('/hello', (req, res) => {
    res.json('Hello world')
})

app.listen(port, () => {
    console.log('Application is running on port:', port)
})