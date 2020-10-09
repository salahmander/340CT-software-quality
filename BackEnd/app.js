const user = require('./models/user/user');
const items = require('./models/items/items');
const authentication = require('./models/authentication/authentication')
const db = require('./database');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const auth = require('basic-auth');

app.use(bodyParser.json())
app.use(cors());
app.options('*', cors());
app.use(express.static('public'));

const databaseData = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'acerreseller'
};

app.get('/api/v1.0/computers', (req, res) => {

    items.getAll(databaseData, function (err, computerData) {

        res.status(201);
        res.json(computerData)
    })
});

app.post('/api/v1.0/purchase', (req, res) => {

    let itemData = {
        userID: req.body['userID'],
        title: req.body['title'],
        device: req.body['device'],
        type: req.body['type'],
        CPU: req.body['CPU'],
        RAM: req.body['RAM'],
        GPU: req.body['GPU'],
        storage: req.body['storage'],
        size: req.body['size'],
        price: req.body['price']
    }

    items.add(databaseData, itemData, function () {

        res.status(201);
        res.end(JSON.stringify({ message: "purchases added successfully" }));
    })
});


app.post('/api/v1.0/users', (req, res) => {

    let userData = {
        firstName: req.body['firstName'],
        surname: req.body['surname'],
        email: req.body['email'],
        username: req.body['username'],
        password: req.body['password']
    }

    user.add(databaseData, userData, function () {

        res.status(201);
        res.end(JSON.stringify({ message: "user added successfully" }));
    })



});

app.get('/api/v1.0/users', (req, res) => {

    user.getAll(databaseData, function (err, result) {

        res.status(201);
        res.json(result)
    })
});



app.post('/api/v1.0/login', (req, res) => {

    const loginData = auth(req);

    authentication.loginUser(databaseData, req, loginData, (err, result) => {

        if (err) {
            res.status(err.code);
            res.end(JSON.stringify(err))
            return;
        }
        res.end(JSON.stringify(result))
    });
});

module.exports = app;



