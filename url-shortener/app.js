const express = require("express")
const mongoose = require("mongoose")
const ejs = require("ejs")
const bodyParser = require("body-parser")
const shortid = require("shortid")


require("dotenv").config()
const app = express()
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended: false}))

mongoose.connect("mongodb://localhost:27017/url", {useNewUrlParser: true, useUnifiedTopology: true})

const urlSchema = new mongoose.Schema({
    full: {type: String, required: true},
    short: {type: String, required: true, default: shortid.generate},
    clicks: {type: Number, required: true, default: 0}
})
const URL = new mongoose.model("URL", urlSchema)



app.get("/", async (req, res) => {
    const shortURLs = await URL.find()
    res.render("index", {shorturl: shortURLs})
})

app.post("/shorten", async (req, res) => {
    await URL.create({full: req.body.url})
    res.redirect("/")
})

app.get("/:short", async (req, res) => {
    shortURL = await URL.findOne({short: req.params.short})
    if(shortURL == null) return res.status(404)
    shortURL.clicks++
    shortURL.save()
    res.redirect(shortURL.full)
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is up and running on port 3000")
})