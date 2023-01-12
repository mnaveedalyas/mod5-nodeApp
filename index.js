const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');

const app = new express();

app.use(bodyParser.json());
//app.use(cors());

app.listen({ port: 3000 }, () => {
    console.log(`Listening at http://localhost:3000/ for REST API requests`);
});

app.get('/', (req, res) => {
    let response = '<h3>Welcome to My Test app</h3>';
    response += "<a href='/users'>Users</a><br>";
    response += "<a href='https://terminustech.co.nz' target='_blank'>About Us</a><br>";
    res.send(response);
})
//app.use('/', express.static('public'))

const router = require('./routes/userRoutes');
app.use('/users', router);

const calcRouter = require('./routes/calculatorRoutes')
app.use('/calculator', calcRouter);