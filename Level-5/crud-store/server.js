const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
require("dotenv").config();

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));

app.use(express.json())
app.use(morgan('dev'))

app.use('/api/items', require("./routes/inventoryRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log('the server is running on port 9000')
})