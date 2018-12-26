const express = require('express');
const app = express();

const debug = require('debug')('app');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');

const backendController = require('./backend/backendController');
//module level constant declarations
const PORT = process.env.PORT || 8000;
//setting constants for the entire application
app.set('PORT',PORT);
//middleware setup
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'frontend','dist','frontend')));

//give control of all calls to /api to the backend controller
app.use('/api',backendController);

app.get('*',(req,res)=>{
   res.sendFile(path.join(__dirname,'frontend','dist','frontend','index.html'))
});
app.listen(PORT, ()=>{
    debug(`Server listening on port: ${PORT}`);
});