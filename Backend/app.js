const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors") // juste pour la sécurité
const cookieParser = require("cookie-parser")

const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())

const port = 5000

app.get("/", (req, res) => {
  res.send("Hello Rouaa!")
})

//Route
const excursionRoute = require("./Routes/excursion.js")
app.use("/excursions", excursionRoute)

const userRoute = require("./Routes/users.js")
app.use("/users", userRoute)

const authRoute = require("./Routes/auth.js")
app.use("/auth", authRoute)

// cnx DB
mongoose.connect("mongodb://localhost:27017/pfadb", {
  useNewUrlParser: true,
})

const db = mongoose.connection

db.on("error", console.error.bind(console, "connection error"))
db.once("open", function () {
  console.log("Database connected successfully")
})

// execution de l'application
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
