
const express = require("express");
const app = express();
const PORT=4000;

app.get("/",function (request,response){
    response.send("hi ❤🤞");
});

app.get("/currenttimestamp",function (request,response){
    response.send(hi);
});

console.log(process.argv);


app.listen(PORT,()=>console.log(`server started in ${PORT}`));

const fs = require('fs');

//const time  = Math.floor(Date.now() / 1000)

var currentdate = new Date(); 
var datetime = "Last Sync:📅 DATE: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @TIME ⏰"  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
console.log(datetime);

const hi = `Hi welcome 🤞❤ \nCurrent Timestamp ${datetime}`;



//creating file and writing content
fs.writeFile("./current data-time.txt", hi, err => {
    console.log(" Text file created successfully!!!👌❤✌")
});

//reading all the files in newfolder
 fs.readdir("./newfolder",(err,files)=>{
    console.log(files);
});





 
