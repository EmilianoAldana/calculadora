const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const Result = require('./models')

const url = "mongodb+srv://Emiliano:Calculadora123@cluster0-58s7q.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(url, {}, (error) ==>{
  if (error) {
    console.log(error)
  } else {
    console.log ("Base de datos conectada")
  }
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.get('/getresults/:firstValue/:secondValue/:selectedOperator', function(req, res) {
    console.log(req.params)

    const firstValue = parseFloat(req.params.firstValue)
    const secondValue = parseFloat(req.params.secondValue)

    let result
    switch (req.params.selectedOperator) {
        case '*':
            result = firstValue * secondValue
            break;
        case '+':
            result = firstValue + secondValue
            break;
        case '-':
            result = firstValue - secondValue
            break;
        case '/':
            result = firstValue / secondValue
            break;
        default:
            break;
    }
    const newResult = new Result ({value: result})
    newResult.sav((error, result) ==>{
      if(error) {
        console.log(error)
      } else {
        console.log(result)
      }
    })
    res.status(200).send({ result: result })
})

app.listen(3000, () => {
    console.log("Server corriendo en puerto 3000")
})
