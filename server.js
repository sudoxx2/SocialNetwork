const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Connect Database
connectDB();

const PORT = process.env.PORT  || 5000

// Init Middleware
app.use(express.json({ extended: false}))

app.get('/', (req, res) => {
    res.send("Testing endpoint home")
})

// Define Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})