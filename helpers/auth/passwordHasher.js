const bcryptjs= require('bcryptjs');
require('dotenv').config();



const rounds = process.env.ROUNDS;

function passHash(req){

    const pass = req;
    const hash = bcryptjs.hashSync(pass.password, 8)
    pass.password = hash;
    return pass;
}

module.exports={
    passHash
}