const express = require('express');
const router = express.Router();
const {registerUser, loginUser, getMe} = require('../controllers/userController');

// router.post('/', (req, res)=> {
//   res.send('Register Route')
// })

// router.post('/login', (req, res)=> {
//   res.send('Login Route')
// })

router.post('/', registerUser)

router.post('/login', loginUser)

router.get('/me', getMe);

module.exports = router;