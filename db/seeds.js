var Schema = require("../db/schema.js");
var mongoose = require('mongoose');

var Prompt = Schema.Prompt;
var Story = Schema.Story;

Prompt.remove({}, function(err){
  console.log(err)
});

Story.remove({}, function(err){
  console.log(err)
});


var story1 = new Story({body: "This is the first story."})
var story2 = new Story({body: "This is the second story."})
var story3 = new Story({body: "This is the third story."})

var prompt1 = new Prompt({body: "This is the first prompt"})
var prompt2 = new Prompt({body: "This is the second prompt"})

var stories = [story1, story2, story3]
var prompts = [prompt1, prompt2]

for(var i=0; i < prompts.length; i++){
  prompts[i].stories.push(stories[i], stories[i+1])
  prompts[i].save(function(err,prompt){
    if(err){
      console.log(err)
    } else {
      console.log(prompt)
    }
  })
}
