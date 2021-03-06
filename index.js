var mongoose = require('mongoose');
var Schema = require('./db/schema');
var express = require('express');
var parser = require("body-parser");
var cors = require('cors');
var methodOverride = require("method-override");

var app = express();
var promptsController = require("./controllers/promptsController");
var storiesController = require("./controllers/storiesController");

app.use(cors());
app.use(methodOverride('_method'));

var Story = mongoose.model("Story");
var Prompt = mongoose.model("Prompt");

app.set("port", process.env.PORT || 3002);

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.get("/", function(req,res){
  res.send("Working")
})

app.get("/prompts", promptsController.index)
app.get("/prompts/:id", promptsController.show)
app.post("/prompts", promptsController.create)
app.post("/prompts/:id/stories", promptsController.addStory)
app.put("/prompts/:id", promptsController.update)
app.delete("/prompts/:id", promptsController.delete)
app.put("/prompts/:id/stories/:story_id", promptsController.updateStory)
app.put("/prompts/:id/stories/:story_id/addtag", promptsController.addTag)
app.delete("/prompts/:id/stories/:story_id", promptsController.deleteStory)

app.get("/stories", storiesController.index)

app.listen(app.get("port"), function(){
  console.log("Hey Im awake!");
})
