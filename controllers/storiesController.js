var PromptModel = require("../models/prompt")
var StoryModel = require("../models/story")

var storiesController = {
  index: function(req,res){
    PromptModel.find({}, function(err,docs){
      var stories = []
      for(i=0;i<docs.length;i++){
        console.log(docs[i])
        stories.push(docs[i].stories)
      }

      var merged = [].concat.apply([], stories);
      res.json(merged)

    })
}
}

module.exports = storiesController
