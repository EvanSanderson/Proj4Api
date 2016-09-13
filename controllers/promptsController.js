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
  },
  delete: function(req,res){
      PromptModel.findByIdAndRemove(req.params.id, function(err,docs){
        docs.save(function(err){
          if(err){
            return handleError(err)
          }
          res.json(docs)
        })
      })
  },
  updateStory: function(req,res){
    console.log(req.params.story_id)
    console.log(req.body.body)
    PromptModel.findById(req.params.id, function(err, docs){
      for(i=0;i<docs.stories.length;i++){
        console.log(docs.stories[i]._id)
        console.log("this is the req params story id" + req.params.story_id)
        if(docs.stories[i]._id == req.params.story_id){
          docs.stories[i].body = req.body.body
          docs.save(function(err){
            if(err){
              return handleError(err)
            }
            res.json(docs);
          })
        }
      }
    })
  },
  deleteStory: function(req,res){
    console.log(req.params.story_id)
    var storyId = req.params.story_id
    var promptId = req.params.id
    console.log(promptId)
    PromptModel.findById(req.params.id, function(err,docs){
      for(i=0; i<docs.stories.length; i++){
        if(docs.stories[i]._id == storyId){
          console.log("GOT YA")
          docs.stories.splice(i, 1)
          docs.save(function(err){
            if(err){
              return handleError(err)
            }
            res.json(docs)
          })
        }
      }
    })
  }

}
module.exports = promptsController
