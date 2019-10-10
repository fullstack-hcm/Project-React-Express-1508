const express = require('express');
const app = express();
const expressSession            = require('express-session');
const bodyParser                = require('body-parser');
const { comparePwd }            = require('./utils/bcrypt.promise');
const { signPromise }           = require('./utils/jwt');
const cors = require('cors');
// password: password1508
const users = [
    { username: 'mern1508', password: '$2b$10$hD7A/gGtcp5ZcEoe/ifUVOSxgkQHwe3ysJd6ooyQjdLWh1.XIaHDG'}
];

app.use(expressSession({
    secret: 'MERN_STACK_1508 AAA',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        maxAge: 300000   
    }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: true
}));

app.use(cors({}))

app.get('/', (req, res) => {
    res.json({ message: 'helloworld' });
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    let isExistUsername = users.find(item => item.username === username);

    if (!isExistUsername) return res.json({ error: true, message: 'username_not_exist' });

    let signalCompare = await comparePwd(password, isExistUsername.password);

    console.log({ signalCompare });
    if (signalCompare.error) return res.json({ error: true, message: 'password_not_matching' });

    delete isExistUsername.password;

    let signalSignToken = await signPromise(isExistUsername);
    
    if (signalSignToken.error) return res.json({ error: true, message: 'something_wrong' });
    console.log({ signalSignToken })

    const { token } = signalSignToken;

    return res.json({ error: false, data: {
        username: isExistUsername.username,
        token: token
    }});
})

app.listen(3000, () => console.log(`server started at port 3000`));