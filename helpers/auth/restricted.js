module.exports = {
    restricted,
    isValid
}

function restricted(req, res, next){
    console.log('restricted req', req.session)
    if(req.Session && req.Session.loggedIn){
        next();
    } else {
        res.status(401).json({
            message: "Unauthorized Access"
        })
    }
}

function isValid(user){
    return Boolean(user.username && user.password && typeof user.password === 'string')
}