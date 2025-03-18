const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
    res.json({ message: "Threads Service is running!" });
});
 
app.listen(4001, () => console.log('Threads Service running on port 4001'));
