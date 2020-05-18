const users = require('../../data/dbconfig.js')

module.exports={
    add,
    findById,
    findBy,
    getAllUsers
}

async function add(user){
    const [id] = await users('users')
                        .insert(user, "id")
            return findById(id)
}

function findById(id){
    return users('users')
            .where({id})
            .first()
}

function findBy(filter) {
    return users("users").where(filter);
  }
function getAllUsers(){
    return users('users')
}