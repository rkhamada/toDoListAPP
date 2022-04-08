const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const date = require(__dirname + '/date.js')

const app = express()
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('public'))

const items = ['buy food', 'cook food', 'eat food']
const workItems = ['do this', 'do that', 'do all']


app.get('/', function(req, res) {

  let day = date.getDate()
  res.render('todolist', {
    listTitle: day,
    newListItems: items
  })
})

app.post('/', function(req, res) {

  let item = req.body.newItem

  if (req.body.list === 'Work') {
    workItems.push(item)
    res.redirect('/work')
  } else {
    items.push(item)
    res.redirect('/')
  }
})

app.get('/work', function(req, res) {
  res.render('todolist', {
    listTitle: 'Work List',
    newListItems: workItems
  })
})

app.get('/about', function(req, res) {
  res.render('about')
})

app.listen(3000, function() {
  console.log('server runing on port 3000');
})
