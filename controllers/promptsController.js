var PromptModel = require("../models/prompt")
var StoryModel = require("../models/story")

var promptsController = {
  index: function(req,res){
    PromptModel.find({}, function(err, docs){
      res.json(docs)
    })
  },
  show: function(req,res){
    PromptModel.findById(req.params.id, function(err,docs){
      res.json(docs)
    })
  },
  create: function(prompt){
    console.log(prompt.body.body)
    var prompt = new PromptModel({body: prompt.body.body})
    prompt.save(function(err){
      if(err){
        return handleError(err);
      }
    })
  },
  addStory: function(prompt, story){
    var promptId = prompt.params.id;
    var storyText = story.req.body.body;
    PromptModel.findById(promptId, function(err,docs){
      docs.stories.push(new StoryModel({body: storyText}))
      docs.save(function(err){
        if(err){
          return handleError(err)
        }
      })
    })
  }

}
module.exports = promptsController
