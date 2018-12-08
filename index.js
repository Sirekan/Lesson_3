// console.log("Hello Node");
// var os = require("os");
// var message = "The platform is ";

// function main() {
//     console.log(message + os.platform());
// }
// main(); 




// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
//    res.send("Hello world");
// });

// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });



// var express = require("express");
// var app = express();

// app.get("/", function (req, res) {
//     res.send("<h1>Hello world</h1>");
// });
// app.get("/:name/:surname", function (req, res) {
//     var name = req.params.name;
//     var surname = req.params.surname;

//     res.send("<h1>Hello " + name + " "+surname+ "</h1>");
// });
// app.listen(3001, function () {
//     console.log("Example is running on port 3000");
// });



// var Square = require("./module");
// var mySquareObject = new Square(5);

// function main() {
//    console.log(mySquareObject.getArea(5));
// }
// main(); 
/////////////////////////////////
// var fs = require('fs');

// function main(){
//    var file  = "hello.txt";
//    fs.appendFileSync(file, "Hello world\n");
// }
// main();

// var fs = require('fs');

// function main(){
//    fs.writeFile("hello.txt", "hello world\n",function(err){
//    console.log("fs.writeFile ended");
// });
// console.log("fs.writeFile");

// }
// main();
// var fs = require('fs');
// var dummyText = "Apple yep";

// function main() {
//    fs.writeFileSync("dummytext.txt", dummyText);
//    var text = fs.readFileSync("dummytext.txt").toString();
//    console.log(dummyText == text);
//    console.log(text);
//    fs.writeFileSync("undummytext.txt",
//        text.replace("Apple", "Microsoft")
//    );
// }
// main();

var fs = require('fs');
var dummyText = "obj";
var obj = 
{ 
  "first_name": "Vardan",
  "last_name": "Hovsepyan",
  "age": 13,
  "tumo_student":true
}

