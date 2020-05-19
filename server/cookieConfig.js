const session = require('express-session');
require('dotenv').config();
const seccoo = process.env.SECURE_COOKIE;
const uac = process.env.USER_ALLOWED_COOKIES;
const coosee = process.env.COOKIE_SECRET;



const sessionConfig={
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // one day in milliseconds
        secure: false, // send the cookie only https only, should be true in production
        httpOnly: true, // true means client JS cannot access the cookie
      },
      resave: false,
      saveUninitialized: true, // in development true is fine, there are laws regarding cookies
      name: "onaccess",
      secret: 'marcssecretcookiekey',
}

module.exports={
    sessionConfig
}