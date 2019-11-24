const express = require('express')
const apiRouter = require('./routers')

const app = express()
const port = process.env.PORT || 4000

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.use(express.json())
app.use('/api', apiRouter)

app.get('/', (req, res) => {
    res.send(`
        <div>
            <h2>Welcome to the backend</h2>
            <p>Try exploring the apiRouter by nagivating to
            <a href="/api">/api</a> or <a href="/api/users">/api/users</a></p>
            <p>You can find the logic in the "routers" and
            "controllers" folders for this application"
        </div>
    `)
})

app.listen(port, () => {
    console.log('Application is running on port:', port)
})