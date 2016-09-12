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
  create: function(req, res){
    console.log(req.body.body)
    var prompt = new PromptModel({body: req.body.body})
    prompt.save(function(err, docs){
      if(err){
        console.log("errrored!!");
        return handleError(err);
      }
      console.log("saved and responding with json next");
    res.json(docs);
    })
  },
  addStory: function(req, res){
    PromptModel.findById(req.params.id, function(err,docs){
      docs.stories.push(new StoryModel({body: req.body.body}))
      docs.save(function(err){
        if(err){
          return handleError(err)
        }
        console.log(docs)
        res.json(docs)
      })
    })
  },
  update: function(req,res){
    PromptModel.findById(req.params.id, function(err,docs){
      docs.body = req.body.body
      docs.save(function(err){
        if(err){
          return handleError(err)
        }
        res.json(docs)
      })
    })
  }

}
module.exports = promptsController
