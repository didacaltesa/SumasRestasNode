var express = require("express"),
app = express();

app.get("/suma",function(req,res){
  var num1 = req.query.num1;
  var num2 = req.query.num2;
  var result = num1 +num2;
  res.end("Result is: " + result);

});
app.get("/resta",function(req,res){
  var num1 = req.query.num1;
  var num2 = req.query.num2;
  var result = num1 - num2;
  res.end("Result is: " + result);

});

app.listen(8080);
