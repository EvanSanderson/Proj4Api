var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/proj4');
var db = mongoose.connection;

db.once('open', function(){
  console.log("database has been connected")
})

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId


var StorySchema = new Schema({
  body: String,
  tags: [String]
})

var PromptSchema = new Schema({
  body: String,
  stories: [StorySchema]
})

var Prompt = mongoose.model("Prompt", PromptSchema);
var Story = mongoose.model("Story", StorySchema);

module.exports = {
  Story: Story,
  Prompt: Prompt
};
