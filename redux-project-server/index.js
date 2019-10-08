const express = require('express');
const app = express();
const expressSession = require('express-session');
const bcrypt = require('bcrypt');


const users = [
    { username: 'abc', password: '$2b$08$N8CY5SxGdfm7OlkHG7F9XeuEd5HS3.p/MqrUUW1Aieh.X9m66aDQi'}
];

app.use(expressSession({
    secret: 'MERN_STACK_1508 AAA',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        maxAge: 300000   
    }
}));

app.get('/', (req, res) => {
    res.json({ message: 'helloworld' });
});

app.listen(3000, () => console.log(`server started at port 3000`));