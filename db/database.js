const mongoose = require('mongoose');



mongoose.connect('mongodb+srv://dara:Shadow11@cluster0.mvmkk6u.mongodb.net/expressDB?retryWrites=true&w=majority').then((response)=>{
    console.log('DB is connected');
}).catch((err)=>{
    console.log(err);
})
module.exports = mongoose;