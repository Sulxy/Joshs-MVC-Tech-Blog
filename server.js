// required packages & dependencies
const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const sequelize = require('./config/connection');
const expressHandlebars = require('express-handlebars');
const helpers = expressHandlebars.create({ helpers: require('./utils/helpers') });

// create the express app and setting the port #
const app = express();
const PORT = process.env.PORT || 3001;

// setting up the session and the sequelize store 
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// session middleware 
app.use(session(sess));

// middleware to parse the incoming request object
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware to serve the static files in the public directory
app.use(express.static('public'));
app.engine('handlebars', helpers.engine);
app.set('view engine', 'handlebars');

// session middleware with a different session object for the express-session
app.use(
    session({
        secret: process.env.SECRET,
        store: new SequelizeStore({ db: sequelize }),
        resave: false,
        saveUninitialized: false,
    })
);

// turn on routes from the controllers folder
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});