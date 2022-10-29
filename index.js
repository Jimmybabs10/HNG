const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/home', (req, res)=>{
    res.json({ 
        slackUsername: 'Jimoh Habib', 
        backend: true, 
        age: 22, 
        bio: 'A passionate backend developer seeking to up his skill with every opportunity' 
    })
});

app.listen(port, ()=>{
    console.log('app is running')
});