const router = require('express').Router();
const { User, Ticket } = require('../../Models');
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

// router.get('/username/:username', (req, res) => {
//   console.log('searching for username');
//   User.findOne({where: 
//     { username: req.params.username}
//   }).then(dbUserData => {
//     console.log(dbUserData);
//     if(!dbUserData){
//       res.status(404).json({message: 'no user with that username'});
//     }
//     res.status(200);
//   }).catch(err => {
//     res.status(500).json({message: err});
//   });
// });

// router.get('/email/:email', (req, res) => {
//   console.log('searching for email');
//   User.findOne({where: 
//     {email: req.params.email}
//   }).then(dbUserData => {
//     console.log(dbUserData);
//     if(!dbUserData){
//       res.status(404).json({message: 'no user with that email'});
//     }
//     res.status(200)
//   }).catch(err => {
//     res.status(500).json({message: err})
//   });
// })

router.post('/', (req, res) => {

  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  }).then(dbUserData => {
    const user = dbUserData.dataValues
    console.log('starting login');
    req.login(user, async function (err) {
      if (err) { return next(err); }
      console.log(req.session);
      res.redirect('/homepage')
    });
  });
});

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/',
  successRedirect: '/homepage',
  failureFlash: true
}), async (req, res) => {
  res.status(200).json({message: 'logout successful'});
});

router.get('/logout', (req, res) => {
  console.log('logged out');
  res.json({message: 'logged out'});
  req.session.destroy();
  // res.redirect('/');
});

router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.json(dbUserData);
  }).catch(err => {
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