const express = require('express')

const app = express()

const PORT = process.env.PORT  || 5000

app.get('/', (req, res) => {
    res.send("Testing endpoint home")
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})