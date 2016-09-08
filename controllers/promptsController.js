var PromptModel = require("../models/prompt")
var StoryModel = require("../models/story")

var promptsController = {
  index: function(req,res){
    PromptModel.find({}, function(err, docs){
      res.json(docs)
    })
  }
}

module.exports = promptsController
