const router = require('express').Router();
const {User, Log, Exercise } = require('../models'); // models to be imported
const withAuth = require('../utils/auth');

// main page routes: 'http://localhost:PORT/'
// 'req.session.logged_in = true' required (withAuth)

// // uses withAuth()
router.get('/', withAuth, async (req, res) => {
  try {
    console.log('test1');
    // get all rows by user_id
    // const userLog = await User.findByPk(req.session.user_id, {
    //   attributes: { exclude: ['password'] },
    //   include: [
    //     {
    //       model: Log,
    //       attributes: [
    //         'id',
    //         [
    //           sequelize.fn('DATE', sequelize.col('log_date')),
    //           'log_date',
    //         ], 
    //         'sets', 
    //         'reps'
    //       ],
    //       include: {
    //         model: Exercise,
    //         attributes: ['exercise', 'targetArea'],
    //       }
    //     },
    //   ],
    // })
    console.log('test2');
    // // Serialize data so the template can read it
    // const logs = userLog.map((log) => log.get({ plain: true }));
    // console.log(logs);
    // render data in handlebars
    res.render('homepage', 
    { 
      // logs, 
    }
    );
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
    console.log('test1');
    // Find the logged in user based on the session ID
   const userLog = await User.findByPk(req.sessions.user_id, {
    attributes: { exclude: ['password'] },
    include: [
      {
        model: Log,
        attributes: [
          'id',
          [
            sequelize.fn('DATE', sequelize.col('log_date')),
            'log_date',
          ], 
          'sets', 
          'reps'
        ],
        include: {
          model: Exercise,
          attributes: ['exercise', 'targetArea'],
        }
      },
    ],
  })
  console.log('test2');
  // // Serialize data so the template can read it
  const logs = userLog.map((log) => log.get({ plain: true }));
  console.log(logs);
  // render data in handlebars
  res.render('homepage', { 
    logs, 
  });
  } catch (err) {
    res.status(500).json(err);
  }
});

// render login page - from handlebars?
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  // render login page
  res.render('login');
});

module.exports = router;