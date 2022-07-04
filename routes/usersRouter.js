const usersController = require('../controllers/usersController.js')
const validateRegisterInput = require('../validators/register');
const router = require('express').Router()

router.post('/register',async (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
  
    if (!isValid) {
      return res.status(400).json(errors);
    }

router.post('/register', usersController.register)

router.post('/add_user', usersController.addUser)

router.get('/all_user', usersController.findUser)

router.get('/:id', usersController.getOneUser)

router.put('/:id', usersController.updateUser)

router.delete('/:id', usersController.deleteUser)

})

module.exports = router
