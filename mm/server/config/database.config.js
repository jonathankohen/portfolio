const mongoose = require('mongoose'),
    uri = `mongodb://localhost/${process.env.DB_NAME}`;

mongoose
    .connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(res =>
        console.log(
            "You're all clear kid, now let's blow this thing and go home!",
        ),
    )
    .catch(err =>
        console.log(
            'I sense a disturbance in the force. Like suddenly a million servers cried out in pain, and were suddenly silenced.',
        ),
    );
