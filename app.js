const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
var router = express.Router();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
const url = "mongodb+srv://Thiru:Thenameislevi@cluster0.96vb1.mongodb.net/ResumeDB";
mongoose.connect(url);

const formSchema = new mongoose.Schema({
    FirstName: {type:String},
    LastName:{type:String},
    dob:{type:String},
    Nationality:{type:String},
    sslcscl:{type:String},
    hscscl:{type:String},
    sslcmark:{type:Number},
    hscmark:{type:Number},
    clg:{type:String},
    clgmark:{type:Number},
    klone:{type:String},
    kltwo:{type:String},
    klthree:{type:String},
    email:{type:String},
    workexperience:{type:String}
});


const Form = new mongoose.model("Form",formSchema);


app.post("/create-resume",function(req,res){

        var FirstName = req.body.FirstName;
        var LastName = req.body.LastName;
        var FatherName = req.body.FatherName;
        var dob = req.body.dob;
        var Nationality = req.body.Nationality;
        var sslcscl = req.body.sslcscl;
        var hscscl = req.body.hscscl;
        var sslcmark = req.body.sslcmark;
        var hscmark = req.body.hscmark;
        var clg = req.body.clg;
        var clgmark = req.body.clgmark;
        var klone = req.body.klone;
    var kltwo = req.body.kltwo;
    var klthree = req.body.klthree;
    var email = req.body.email;
    var workexperience = req.body.workexperience
        
        const data = new Form({
            "FirstName": FirstName,
            "LastName":LastName,
            "FatherName":FatherName,
            "dob":dob,
            "Nationality":Nationality,
            "sslcscl":sslcscl,
            "hscscl":hscscl,
            "sslcmark":sslcmark,
            "hscmark":hscmark,
            "clg":clg,
            "clgmark":clgmark,
            "klone":klone,
            "kltwo":kltwo,
            "klthree":klthree,
            "email":email,
            "workexperience":workexperience
        });
        
data.save();
res.render("output",{FirstName:FirstName,LastName:LastName,FatherName:FatherName,dob:dob,Nationality:Nationality,sslcscl:sslcscl,sslcmark:sslcmark,hscscl:hscscl,hscmark:hscmark,clg:clg,clgmark:clgmark,klone:klone,kltwo:kltwo,klthree:klthree,email:email,workexperience:workexperience})
})

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("index");
});
app.post("/create-resume")
app.get("/create-resume",function(req,res){
    res.render("formresume");
});
app.get("/reach-us",function(req,res){
    res.render("reach")
})
let port = process.env.PORT;
if(port == null || port ==""){
    port = 8000;
}
app.listen(port);
