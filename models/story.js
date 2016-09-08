require("../db/schema");
var mongoose = require("mongoose");

var StoryModel = mongoose.model("Story");
module.exports = StoryModel
