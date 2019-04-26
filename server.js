// This is Stocks Data Repo Application for Hackathon
// Authon : Abhinish Raj <abhinish.gecr@gmail.com
//

const app = require('express')();
const fs = require('fs');
let bodyParser = require('bodyParser');
app.use(bodyParser.json());

app.get('/', (req, res) => {

    get_attributes();

    res.status(200)
        .send('helloworld');

});

app.listen(8000);