const express = require('express');
const cors = require('cors'); // fetch api to front-end
const userRoute = require('./routes/user')
require('./db/database')


const app = express();
app.listen(3000);
console.log("Server is running");
 
// middle ware 
app.use(express.json() );
app.use(cors());

// route
app.use('/user',userRoute); 

