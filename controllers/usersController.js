const db = require('../models')
const { helper } = require('../validators/validator_sequelize')

const user_temp = db.User



const addUser = async (req, res) => {
    const { email, mobile, username } =req.body;
    
    try{
        const user = await user_temp.create({
            email,
            mobile,
            username
        })
        res.status(200).send(user)
        console.log(user)
    }catch(err){
        if(err){
          return helper(res, err);
        }    
      return res.json({ status : 'fail'})
    }   
}


const findUser = async (req, res) => {
    let user = await user_temp.findAll({})
    res.status(200).send(user)
}

const getOneUser = async (req, res) => {
    let id = req.params.id
    let user = await user_temp.findOne({ where: { id: id }})
    res.status(200).send(user)
}

const updateUser = async (req, res) => {
    let id = req.params.id
    const user = await user_temp.update(req.body, { where: { id: id }})
    res.status(200).send(user)
}

const deleteUser = async (req, res) => {
    let id = req.params.id  
    await user_temp.destroy({ where: { id: id }} )
    res.status(200).send('User is deleted !')
}

module.exports = {
    addUser,
    findUser,
    getOneUser,
    updateUser,
    deleteUser 
}