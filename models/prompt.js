require("../db/schema");
var mongoose = require("mongoose");

var PromptModel = mongoose.model("Prompt");
module.exports = PromptModel;
