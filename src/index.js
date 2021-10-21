require("dotenv").config()

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const app = express()


const artistsRouter = require("./resources/artists/router");

/* SETUP MIDDLEWARE */

app.disable("x-powered-by")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

/* SETUP ROUTES */

app.use("/artists", artistsRouter);

app.get("*", (req, res) => {
  res.json({ ok: true })
})

/* START SERVER */

const port = process.env.PORT || 3030

app.listen(port, () => {
  console.log(`\n🚀 Server is running on http://localhost:${port}/\n`)
})
