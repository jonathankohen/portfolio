const mongoose = require('mongoose'),
    uri = `mongodb://localhost/${process.env.DB_NAME}`;

mongoose.connect(uri,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
    .then(res => console.log("You're now in the maneframe."))
    .catch(err => console.log("Uh Oh Spaghetti OOOOOOOOOOs"))