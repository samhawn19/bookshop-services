const express = require('express')
var cors = require('cors')
var getJsonbaseConfig = require('../Config/jsonbaseconfig')


const app = express()
const port = 3001
const store = getJsonbaseConfig.getJsonbaseConfig().store;



app.use(cors())
app.use(express.json())

app.post('/favorites', (req, res) => {
  store.write(req.body.userName, {bookId: req.body.id}).then(console.log)
  // store.write(myJson.title, {userName: myJson.userName}).then(console.log)
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})