const router = require('express').Router();
const { User } = require('../../Models');
const bcrypt = require('bcryptjs');
const passport = require('passport');

router.get('/', (req, res) => {
  // Access our User model and run .findAll() method)
  User.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {

      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {

  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  }).then(dbUserData => {
    const user = dbUserData.dataValues
    console.log('starting login');
    req.login(user, async function(err) {
      if (err) { return next(err); }
      console.log(req.session);
      res.redirect('/homepage')
    });
  });
});

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/',
  failureFlash: true
}), async (req, res) => {
  console.log(req.session);
  res.redirect('/homepage');
});

router.get('/logout', (req, res) => {
  console.log('logged out');
  req.logout();
  res.redirect('/');
});

router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {

      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {

  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  }).then(dbUserData => {
    if (!dbUserData[0]) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.json(dbUserData);
  }).catch(err => {
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {

      res.status(500).json(err);
    });
});

module.exports = router;