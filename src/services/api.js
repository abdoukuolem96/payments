const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const Payment = require('./Models/payment')
//express app
const app = express()
app.use(bodyParser.json())
app.use(
  cors({
    origin: 'http://localhost:8080',
  })
)

const dbURI = 'mongodb://127.0.0.1/billing'
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Running on 4000')
    app.listen(4000)
  })

app.post('/payments', (request, response) => {
  const payment = new Payment(request.body)
  payment
    .save()
    .then((data) => {
      // response.json(data)
      response.json({
        status: 'success',
        id: data._id,
      })
    })
    .catch((err) => {
      console.log(err)
    })
})

app.get('/payments', (request, response) => {
  Payment.find()
    .then((data) => {
      // response.set('Access-Control-Allow-Origin', 'http://localhost:8080')
      response.json(data)
    })
    .catch((err) => {
      console.log(err)
      response.end()
      return
    })
})

app.get('/payments/:id', (request, response) => {
  Payment.findById(request.params.id)
    .then((data) => {
      response.json(data)
    })
    .catch((err) => {
      console.log(err)
      response.end()
      return
    })
})

app.delete('/payments/:id', (request, response) => {
  Payment.deleteOne({ _id: request.params.id })
    .then(() => {
      console.log('Deleted with success')
      response.json({
        status: 'successful delete',
      })
    })
    .catch((err) => {
      console.log(err)
      response.end()
      return
    })
})
