var mongoose = require('mongoose');

if(process.env.NODE_ENV == "production"){
  mongoose.connect("mongodb://heroku_n7dw6z7t:ah5t2mlpgpv1g1meo4k1rj58j2@ds033076.mlab.com:33076/heroku_n7dw6z7t")
} else {
  mongoose.connect('mongodb://localhost/proj4');
}

var db = mongoose.connection;

db.once('open', function(){
  console.log("database has been connected")
})

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId


var StorySchema = new Schema({
  body: String
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
