const express = require('express');
var cors = require('cors');

const app = express();
app.use(cors());

const port = 5000;

let database = [];

app.get(`/user/:id`, (req, res) => {
    const loggedIn = database.find(({
        id
    }) => {
        let idMatches = id === req.params.id;
        return idMatches;
    });
    if (loggedIn) {
        res.send(JSON.stringify(loggedIn, null, "  "));
    }
    else {
        res.send(false);
    }
});

//this is called when user signs up
app.post(`/signUp/:username/:password/:email/:phoneNumber`, (req, res) => {
    let user = {
        id: database.length + 1,
        username: req.params.username,
        password: req.params.password,
        email: req.params.email,
        phoneNumber: req.params.phoneNumber
    };
    database.push(user);
    res.send("sign up worked");
    console.log(database);
});

//this is called when the user logs in
app.get(`/login/:username/:password`, (req, res) => {
    const loggedIn = database.find(({
        username, password
    }) => {
        let usernameMatches = username === req.params.username;
        let passwordMatches = password === req.params.password;
        return usernameMatches && passwordMatches;
    });
    if (loggedIn) {
        console.log(`fuckfuckfuck `, loggedIn.id);
        res.send(loggedIn.id.toString());
    }
    else {
        console.log(false);
        res.send(false);
    }
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));