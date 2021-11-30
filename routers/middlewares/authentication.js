require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY
const jwt = require('jsonwebtoken')
const authentication = (req, res, next) => {
    try{ 
        console.log(req.headers.authorization.split(' ')[1])
        if (!req.headers.authorizathion)
        return res.status(403).json("forbidden")
        const token = req.headers.authorizathion.split(" ")[1]


   const porsedToken = jwt.verify(token, SECRET_KEY)
   req.token = porsedToken 
   next();
} catch(error){
    res.status(403).json(error)
}
};
module.exports = authentication