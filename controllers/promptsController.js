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
  createStory: function(prompt, story){
    PromptModel.findOne({_id: prompt._id}, function(err,docs){
      docs.stories.push(new StoryModel({body: story}))
      docs.save(function(err,results){
        if(err){
          console.log(err)
        }
        else {
          console.log(results)
        }
      })
    })
  }
}

module.exports = promptsController
