var mongoose = require('mongoose');
var Schema = require('./db/schema');
var express = require('express');
var parser = require("body-parser");

var app = express();
var promptsController = require("./controllers/promptsController");

var Story = mongoose.model("Story");
var Prompt = mongoose.model("Prompt");

app.set("port", process.env.PORT || 3002);

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.get("/prompts", promptsController.index)

app.listen(app.get("port"), function(){
  console.log("Hey Im awake!");
})
