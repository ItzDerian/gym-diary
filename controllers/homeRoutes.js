const router = require('express').Router();
const { User, Log, Exercise } = require('../models'); // models to be imported
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');

// main page routes: 'http://localhost:PORT/'
// 'req.session.logged_in = true' required (withAuth)

router.get('/', async (req, res) => {
  try {
// render homepage
    res.render('homepage', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/diary', withAuth, async (req, res) => {
  try {
    // get all rows by user_id
    const user = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Log,
          attributes: [
            'id',
            [sequelize.fn('DATE', sequelize.col('log_date')), 'log_date'],
            'sets',
            'reps',
          ],
          include: {
            model: Exercise,
            attributes: ['exercise'],
          },
        },
      ],
    });
    console.log('test1');
    // Serialize data so the template can read it
    const userLog = user.get({ plain: true });

    // render data in handlebars
    res.render('diary', {
      userLog,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/log', withAuth, async (req, res) => {
  try {
    // console.log('test1');
    // get today's logs
    const d = new Date();

    const logs = await Log.findAll({
      attributes: [
        'id',
        'user_id',
        'log_date',
        'sets',
        'reps',
        'calBurned'
      ],
      include: {
        model: Exercise,
        attributes: ['exercise', 'targetArea'],
      },
      where: [
        sequelize.where(sequelize.fn('DATE', sequelize.col('log_date')), d),
        // for when session is set up
        {user_id: req.session.user_id},

        // // for testing:
        // {user_id: req.params.id}
      ]
    });
    // console.log(logs)

    // // serialize the data
    const dailyLog = logs.map(log => log.get({ plain: true }));

    // console.log(dailyLog);

    const exercise = await Exercise.findAll();
    // console.log('exercise111', exercise.length);
    
    // render in handlebars
    
    console.log({
      ...dailyLog,
      logged_in: req.session.logged_in,
      exercise,
    });

    res.render('logentry', {
      ...dailyLog,
      logged_in: req.session.logged_in,
      exercise,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// render login page - from handlebars?
router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  // render login page
  res.render('signup');
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
