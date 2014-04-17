var express = require('express'),
    util = require('util'),
    config = require("./config.js");

// TODO: Need to use Connect for auth / sessions
    
var app = express();

/*
{
    id: 0,
    name: "Victor",
    map: "Victor NY"
}
*/
app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/location', function(req, res) {
});

app.post('/location', function(req, res) {
});

app.put('/location', function(req, res) {
});

app.delete('/location', function(req, res) {
});

/*
{
    id: 0,
    name: "Chilis",
    description: "",
    map: "123 Fake Street",
    location: 0,
    picture: http://example.com,
    menuLink: http://example.com
}
*/
app.get('/resturant', function(req, res) {
});

app.post('/resturant', function(req, res) {
});

app.put('/resturant', function(req, res) {
});

app.delete('/resturant', function(req, res) {
});

/*
{
    id: 0,
    name: "Fancy Friday",
    description: "",
    resturant: 0,
    time: new Date(),
    invitees: [0] // Need to handle invitees { isGoing: true, voteChoice: 0, userId: 0 }
}
*/
app.get('/event', function(req, res) {
});

app.post('/event', function(req, res) {
});

app.put('/event', function(req, res) {
});

app.delete('/event', function(req, res) {
});

/*
{
    id: 0,
    name: "wwenzel",
    password: "MD5",
    role: 0
}
*/
app.get('/users', function(req, res) {
    res.send("POST IT!");
});

app.post('/users', function(req, res) {
    res.send("POST IT!");
});

app.delete('/users', function(req, res) {
});


app.listen(config.port);
console.log("Listening on port " + config.port);