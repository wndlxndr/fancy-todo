const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const { router } = require('./routes/index.js')
const errorHandler = require('./middleware/errorHandler')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', router)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})