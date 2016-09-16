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


var story1 = new Story({body: "Fury came to visit and she welcomed it in Serpents enveloped her aura Fire stares from her eyes Metal quenches her thirst Course skin crawls, In spite of her hospitality Flush wet nape Muscles clench In the small of her back Restlessness to unleash fury Heart pounds with excruciating thumps", tags: ["Poetry", "Fury"]})
var story2 = new Story({body: "There are bad things out there. There’s always one wolf or another growling at the door, and active-duty military personnel and veterans are proud to have had some part in holding it at bay for another year each Independence Day. That’s what I discovered when I gave some deep thought to this issue. This day isn’t about what I did in Iraq, but what I came home to. My service overseas allowed me to appreciate the life I now lead in a very special way. Nothing in life is free, not even freedom.So watch a fireworks display. Eat way too much. Drink too many beers. Kiss someone you love. Try not to blow off a finger with a firecracker. Don’t take any of it for granted. This is your Independence Day. Appreciate. Celebrate..", tags: ["July 4th", "Iraq"]})
var story3 = new Story({body: "On May 21, 2009 I woke up, put on my uniform, grabbed my weapon and made my short trek to the hospital. It was the same routine I had kept every day for 6 months as a surgical tech in the United States Army. I was attached to a combat support hospital called Ibn Sina, an Iraqi-built, American-run hospital in Baghdad, Iraq. I spent most of the morning taking inventory in the 3rd floor operating room and launching myself down our long hallway on a rolling stool. Around 11 a.m we, the operating room, got a call from the emergency room downstairs. When the OR nurse answered the phone, the look on her face told me all I needed to know: it was time to get ready.", tags: ["Iraq", "Surgery"]})

var prompt1 = new Prompt({body: "The things they carry: write about something you carry with you. It can be something you took with you from downrange, whether a physical object or an experience."})
var prompt2 = new Prompt({body: "Write about a place that's important to you - what it looks like, what it smells like, what it feels like."})

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
