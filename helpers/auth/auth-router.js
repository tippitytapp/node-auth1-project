const router = require('express').Router();
const bcryptjs = require('bcryptjs');
const {passHash} = require('./passwordHasher.js')
const Users = require('../users/users-model.js');
const {isValid} = require('./restricted.js')
require('dotenv').config();



router.post('/register', (req, res) => {
    const pass = req.body
    console.log(pass)
    let newPass = passHash(pass)
        Users.add(newPass)
            .then(user => {
                res.status(201).json({
                    data: user
                })
            })
            .catch(error => {
                res.status(500).json({
                    errorMessage: "Error creating user",
                    error
                })
            })
    })

router.post('/login', (req, res) => {
    const {username, password} = req.body;
    if(isValid(req.body)){
        Users.findBy({username})
            .then(([user]) => {
                if(user && bcryptjs.compareSync(password, user.password)){
                    req.session.loggedIn = true;
                    req.session.user = user;
                    console.log(req.session)
                    res.status(200).json({
                        message: "Logged in successfully",
                        user
                    })
                } else {
                    res.status(401).json({
                        errorMessage: "Invalid Username or password"
                    })
                }
            })
            .catch(error => {
                res.status(500).json({
                    errorMessage: "Server Error",
                    error
                })
            })
    }
})

router.get('/logout', (req, res) => {
    if(req.session){
        req.session.destroy(err => {
            if(err){
                res.status(500).json({
                    message: "Error Logging Out",
                    err
                })
            } else {
                res.status(204).end();
            }
        })
    }
})

module.exports=router;