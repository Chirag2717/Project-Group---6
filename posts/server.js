const express = require('express');

const app = express();
 
// Sample Posts Data

const posts = [

    { thread: 1, text: "That last goal was awesome!", user: 4 },

    { thread: 1, text: "Yes, the way the ball swerved... What talent!", user: 2 },

    { thread: 2, text: "I have to try their tarts!", user: 3 },

    { thread: 2, text: "I'm planning to stop by in the morning to try their croissants.", user: 2 },

    { thread: 2, text: "I could go for a chocolate éclair!", user: 1 },

    { thread: 3, text: "I need a new acoustic guitar at a good price.", user: 1 }

];
 
// Get all posts

app.get('/posts', (req, res) => {

    res.json(posts);

});
 
// Get posts by thread ID

app.get('/posts/:thread', (req, res) => {

    const threadPosts = posts.filter(p => p.thread === parseInt(req.params.thread));

    if (threadPosts.length === 0) return res.status(404).send("No posts found for this thread");

    res.json(threadPosts);

});
 
// Start the server

app.listen(4003, () => console.log('Posts Service running on port 4003'));

 
