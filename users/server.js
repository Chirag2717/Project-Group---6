const express = require('express');
const app = express();
 
// Sample Users Data
const users = [
    { id: 1, username: "Chirag", name: "Marceline Singer", bio: "Cyclist, musician" },
    { id: 2, username: "Kamal", name: "Finn Alberts", bio: "Adventurer and hero, defender of good" },
    { id: 3, username: "Kunal", name: "Paul Barium", bio: "Scientist, cake lover" },
    { id: 4, username: "Khurana", name: "Jake Storm", bio: "Soccer fan, skydiver" }
];
 
// Get all users
app.get('/users', (req, res) => {
    res.json(users);
});
 
// Get user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send("User not found");
    res.json(user);
});
 
// Start the server
app.listen(4002, () => console.log('Users Service running on port 4002'));
