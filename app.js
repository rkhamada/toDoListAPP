const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()
app.set('view engine', 'ejs');
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))
let items = []



let today = new Date()
let options = {year: 'numeric', month: 'long', day: 'numeric'}
let day = today.toLocaleDateString('pt-BR', options)

app.get('/', function(req, res){

  res.render('todolist', {kindOfDay: day, newListItems: items})
})

app.post('/', function(req,res){
  let item = req.body.newItem
  items.push(item)
  res.redirect('/')

})

app.listen(3000, function(){
  console.log('server runing on port 3000');
})
