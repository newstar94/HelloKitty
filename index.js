var express = require("express");
var app = express();
var port = process.env.PORT || 5000;
app.listen(port,function (){
    console.log("Chay roi");
});
app.use(express.static("public"));
app.set("view engine","ejs");
app.get("/", function (reg, res){
    res.render("home");
});
app.get("/do-uong", function (reg, res){
    res.render("listrecipes");
});
app.get("/news", function (reg, res){
    res.render("news");
});
app.get("/cookingrecipes", function (reg, res){
    res.render("cookingrecipes");
});
app.get("/do-uong/tralipton", function (reg, res){
    res.render("tralipton");
});
app.get("/news/news-1", function (reg, res){
    res.render("news-1");
});