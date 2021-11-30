const express = require('express');
const userRouter = express.Router();

const {resgister,getUsers,login} = require('../controllers/user')

userRouter.post('/resgister',resgister);
userRouter.get('/users',getUsers);
userRouter.post('/login',login);

module.exports = userRouter;