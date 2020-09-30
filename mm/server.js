require('dotenv').config();

const express = require('express'),
    app = express(),
    cors = require('cors'),
    cookieParser = require('cookie-parser'),
    port = process.env.PORT,
    server = app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cookieParser());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/config/database.config');
require('./server/routes/user.routes')(app);
