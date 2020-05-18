const router = require('express').Router();
const Users = require('./users-model.js');

function restricted(req, res, next){
    if (req.session && req.session.loggedIn){
      next();
    } else{
      res.status(401).json({
        message: "unauthorized"
      })
    }
  }
  router.use(restricted);

router.get('/', (req, res) => {
    Users.getAllUsers()
        .then(users => {
            res.status(200).json({
                data: users
            })
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Error retrieving users",
                error
            })
        })
})

router.get('/:id', (req, res) => {
    Users.getUserById(req.params.id)
        .then(user => {
            res.status(200).json({
                data: user
            })
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Error retrieving user",
                error
            })
        })
})

module.exports=router;