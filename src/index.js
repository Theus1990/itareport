// white a simple server to serve the hello world message on port 4000 in json
const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.json({ message: "Hello World!" })
})

app.listen(4000, () => {
    console.log("Server is listening on port 4000")
})
