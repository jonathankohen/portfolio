const mongoose = require('mongoose'),
    uri = `mongodb://localhost/${process.env.DB_NAME}`;

mongoose
    .connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(res => console.log("Great shot kid, don't get cocky!"))
    .catch(err => console.log('I have a bad feeling about this.', err));
