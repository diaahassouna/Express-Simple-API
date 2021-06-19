/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    //console.log(server);
    console.log(`running on localhost: ${port}`);
  };

// GET route
app.get('/', sendData);

function sendData (request, response) {
   response.send(projectData);
};

// POST route
/*app.post('/add', callBack);

function callBack(req,res){
  res.send('POST received');
}*/

// POST an answer
const data = [];

app.post('/add', addAnswer);

function addAnswer (req,res){
    data.push(req.body);
    res.send(data);
};
//console.log(data);

app.get('/add', (req, res)=> {
  res.send(data);
  console.log(data);
});