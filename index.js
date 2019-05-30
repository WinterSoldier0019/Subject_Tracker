const Express = require("express")
const App = Express()
const {router} = require("./routes/user")
const DB = require("./models/db").DB

App.use(Express.json())
App.use(Express.urlencoded({extended: true}))
App.use("/",Express.static(__dirname + "/public"))

App.use("/user",router)

DB.sync().then(() => {
    App.listen(4567, () => {
        console.log("started on http://localhost:4567")
    })
})
.catch((err) => {
    console.log(err)
})
