const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.set('port'  , process.env.PORT || 8000) ; 
app.use(cors());
app.use(morgan('dev'));
app.use (express.json()) ;
app.use (express.urlencoded({extended:false }));

app.use("/api/users" ,require('./routes/users.routes'))
app.use("/api/room" ,require('./routes/room.routes'))
app.use("/api/system" ,require('./routes/votingSystem.routes'))

module.exports = app; 