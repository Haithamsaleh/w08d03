const roleModel = require('../../db/models/role')

const createRole = (req,res) => {
    const { role, permossion } = req.body;

    const newRole = new roleModel({
      role,
      permossion,
    });
    newRole
    .save()
    .then((result) => {
        res.status(200).json(result);
    })
.catch((err) => {
    res.status(400).json(err);
})
}
const Roles = (req, res) => {
    roleModel
    .find({})
    .then((result) => {
        res.status(200).json(result)
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}
module.exports ={createRole,Roles}