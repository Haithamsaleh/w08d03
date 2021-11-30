const userModel = require('../../db/models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SALT = Number(process.env.SALT);

const resgister =async (req, res) =>{
    const { name, password, role} = req.body;

    const savedName = name.toLowerCase();
    const savedPassword = await bcrypt.hash(password, SALT);

    const newUser = new userModel({
      name: savedName,
      password: savedPassword,
      role,
    });
    newUser
    .save()
    .then((result) =>{
        res.json(result);
    })
.catch((err) =>{
    res.status(400).json(err);
})
}
const getUsers = (req, res) => {
    userModel
      .find({})
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };

  const login = (req, res) => {
      const {name, password} = req.body;
      const SECRET_KEY = process.env.SECRET_KEY;

      const savedName = name.toLowerCase();

      userModel
      .findOne({ name: savedName })
    .then(async (result) => {
      if (result) {
        if (result.name == name) {
          const savedPassword = await bcrypt.compare(password, result.password);
          const payload = {
            name,
          };
          if (savedPassword) {
            let token = jwt.sign(payload, SECRET_KEY);
            res.status(200).json({ result, token });
          } else {
            res.status(400).json("wrong name or password");
          }
        } else {
          res.status(400).json("wrong name or password");
        }
      } else {
        res.status(404).json("name not exist");
      }
    })
    .catch((err) => {
      res.send(err);
    });
};
module.exports ={resgister,getUsers,login}