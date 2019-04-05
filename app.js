// Include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTalk = require('./trash_talk')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const target = req.body
  const trashTalk = generateTalk(target)
  res.render('index', { target, trashTalk })
})

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}.`)
})