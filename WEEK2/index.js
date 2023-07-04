const express = require('express')
const app = express()
const port = 3000

function handleSum(req, res) {
  var finalSum = 0;
  var upTo = req.query.counter;
  for(var i = 0; i<upTo; i++){
    finalSum = finalSum + i;
  }
  var ans = `Sum is ${finalSum}`
  res.send(ans);
}

app.get('/handelSum', handleSum)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, ()  => {
  console.log(`Example app listening on port ${port}`)
})