const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// database
const db = require('./app/models')

db.sequelize.sync()

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Application.' })
})

// routes
require('./app/routes/user.routes.js')(app)
require('./app/routes/testimonial.routes.js')(app)
require('./app/routes/company.routes.js')(app)

// set port, listen for requests
const PORT = process.env.PORT || '8080'
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})

