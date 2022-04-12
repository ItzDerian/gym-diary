const router = require('express').Router();
const { User, Log, Exercise } = require('../../models');
const withAuth = require('../../utils/auth');

// user login routes: 'http://localhost:PORT/
router.get('/log', withAuth, async (req, res) => {
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
  res.render('logentry', { 
    logs, 
  });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    // // create new row 
    // const _ = await _.create({
    //   ...req.body,
    //   user_id: req.session.user_id,
    // });

    // either reroute or render

    res.status(200).json();
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    // // delete row
    const deleteLog = await Log.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    // if (!) {
    //   res.status(404).json({ message: 'No _ found with this id!' });
    //   return;
    // }

    // either reroute or render

    res.status(200).json();
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;