const router = require('express').Router();
const { } = require('../models'); // models to be imported
const withAuth = require('../utils/auth');

// main page routes: 'http://localhost:PORT/'
// 'req.session.logged_in = true' required (withAuth)

router.get('/', withAuth, async (req, res) => {
  try {
    // // get all rows
    // const _ = await .findAll({
    //   // // tables included for rendering
    //   // include: [
    //   //   {
    //   //     model: ,
    //   //     attributes: [''],
    //   //   },
    //   // ],
    // });

    // // Serialize data so the template can read it
    // const __ = _.map((project) => project.get({ plain: true }));

    // // render data in handlebars
    // res.render('', { 
    //   __, 
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/ /:id', withAuth, async (req, res) => {
  try {

    // // get single row
    // const _ = await .findByPk(req.params.id, {
    //   // // tables included
    //   // include: [
    //   //   {
    //   //     model: ,
    //   //     attributes: [''],
    //   //   },
    //   // ],
    // });

    // // serialize the data
    // const __ = _.get({ plain: true });

    // // render in handlebars
    // res.render('', {
    //   ...__,
    //   logged_in: req.session.logged_in
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get User - **do we need this?
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    // const userData = await User.findByPk(req.session.user_id, {
    //   attributes: { exclude: ['password'] },
    //   include: [{ model: Project }],
    // });

    // const user = userData.get({ plain: true });

    // res.render('profile', {
    //   ...user,
    //   logged_in: true
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

// render login page - from handlebars?
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/ ');
    return;
  }

  // render login page
  res.render(' ');
});

module.exports = router;
