const express = require('express');

var app = express();

app.get('/', (req,res)=>{
    // res.send("hello");
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req,res)=>{
    res.send([{
        name: 'bharat',
        age: 22
    },
    {
        name: 'bhaskar',
        age: 23
    }])
});

app.listen(3000);

module.exports.app = app;