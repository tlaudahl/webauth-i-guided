const router = require('express').Router();
const bcrypt = require('bcryptjs');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

router.post('/hash', (req, res) => {
  // read a password from the body
  // hash a password
  // return in to the user in an object that looks like
  // { password: 'original password', hash: 'hashed password' }
  const password = req.body.password;
  bcrypt.genSalt(password, salt, (err, hash) => {
    res.status(200).json({
      password: password,
      hash: hash
    })
  })
})

module.exports = router;
