const express = require('express');
const router = express.Router();
const UserLogin = require('../models/userLogin');

router.get('/login', (req, res, next) => {
   res.render('index', { title: 'Express' });
});

router.post('/register', (req, res) => {
   // Ask pw
   const username = req.body.username;
   const password = req.body.password;
   // create user
   const newuser = new UserLogin();
   newuser.username = username;
   newuser.password = password;

   newuser.save((err, savedUser) => {
      if (err) {
         console.error(err);
         return res.status(500).send();
      }

      return res.status(200).send();
   })
})

module.exports = router;