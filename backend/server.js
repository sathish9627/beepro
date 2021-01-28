let express = require('express'),
   path = require('path'),
   mongoose = require('mongoose'),
   cors = require('cors'),
   bodyParser = require('body-parser'),
   dbConfig = require('./database/db');

// Connecting with mongo db
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
   useNewUrlParser: true
}).then(() => {
      console.log('Database sucessfully connected')
   },
   error => {
      console.log('Database could not connected: ' + error)
   }
)

console.log('lable 1')
// Setting up port with express js


const infoRoute = require('../backend/routes/info.route')

const beesRoute = require('../backend/routes/bees.route')

const beeboxRoute = require('../backend/routes/beebox.route')

const beestandRoute = require('../backend/routes/beestand.route')

const honeyRoute = require('../backend/routes/honey.route')

const honeyextractorRoute = require('../backend/routes/honeyextractor.route')

const glovesRoute = require('../backend/routes/gloves.route')

const maskRoute = require('../backend/routes/mask.route')

const framesRoute = require('../backend/routes/frames.route')

const smokerRoute = require('../backend/routes/smoker.route')

const knifeRoute = require('../backend/routes/knife.route')

const fullbeesetupRoute = require('../backend/routes/fullbeesetup.route')



console.log('lable 2')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));

console.log('lable 3')
app.use(cors()); 
app.use(express.static(path.join(__dirname, 'dist/mean-stack-crud-app')));
app.use('/', express.static(path.join(__dirname, 'dist/mean-stack-crud-app')));

app.use('/api/db1', infoRoute)

app.use('/api/db2', beesRoute)

app.use('/api/db3', beeboxRoute)

app.use('/api/db4', beestandRoute)

app.use('/api/db5', honeyRoute)

app.use('/api/db6', honeyextractorRoute)

app.use('/api/db7', glovesRoute)

app.use('/api/db8', maskRoute)

app.use('/api/db9', framesRoute)

app.use('/api/db10', smokerRoute)

app.use('/api/db11', knifeRoute)

app.use('/api/db12', fullbeesetupRoute)

console.log('lable 4')
// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
   next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message); // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});
