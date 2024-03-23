const express = require('express')
const app = express();
const cors = require('cors');
const connectDB = require('./database')
const bodyparser= require("body-parser")

require("dotenv").config()

console.log(process.env.DB_URL)
const port = process.env.PORT || 5000;
const usersRouter = require('./src/routes/userRoutes')
app.get("/", (req, res) => {
    res.send("i am alive")
    //console.log("call get function")
})
//app.use('/')
app.use(cors())
app.use(express.json());
app.use(bodyparser.json())
app.use('/', usersRouter)



app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
const startSession = async () => {
    try {
        await connectDB(process.env.DB_URL);
        app.listen(port, () => {
            // console.log(`Server is running on http://localhost:${PORT}`);

            console.log("server start on port", port)
        })
    } catch (error) {
        console.log("geting error", error)

    }
}
startSession()