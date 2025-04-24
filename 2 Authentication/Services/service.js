const JWT = require('jsonwebtoken');
const secretKey = 'Utkarsh$123#321';

function setUser(user){
    return JWT.sign({
        id: user._id,
        name: user.name,
        email:user.email
    },secretKey);
}

function getUser(token){
    try{
        return JWT.verify(token,secretKey);
    }catch(err){
        return null;
    }
}

module.exports = {setUser,getUser};