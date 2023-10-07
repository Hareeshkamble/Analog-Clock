console.log("Hii We ar going to live");
let express= require("express")
let app= express()
let path=require("path")
let port=80;

app.set("view engine","pug")
app.set("views",express.static(path.join(__dirname,"views")))
// app.use("")

app.get("/",(req,res)=>{
res.render("index.pug")
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})