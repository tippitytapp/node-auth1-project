const session = reqire('express-session');
require('dotenv').config();

module.exports={
    sessionConfig
}

const sessionConfig={
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // one day in milliseconds
        secure: process.env.SECURE_COOKIE, // send the cookie only https only, should be true in production
        httpOnly: true, // true means client JS cannot access the cookie
      },
      resave: false,
      saveUninitialized: process.env.USER_ALLOWED_COOKIES, // in development true is fine, there are laws regarding cookies
      name: "onaccess",
      secret: process.env.COOKIE_SECRET,
}