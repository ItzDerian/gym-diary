const router = require('express').Router();
const { User, Log, Exercise } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');

// user login routes: 'http://localhost:PORT/
router.get('/:date', withAuth, async (req, res) => {
  try {
    console.log('test1');
    // get single day
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

        sequelize.where(sequelize.fn('DATE', sequelize.col('log_date')), req.params.date),

        // for when session is set up
        {user_id: req.session.user_id},

      ]
    });
    console.log(logs)

    // serialize the data
    const dailyLog = logs.map(log => log.get({ plain: true }));

    console.log(dailyLog);

    // // render in handlebars

    res.render('log', {
      ...dailyLog,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    // create new row 
    console.log(req.body);
    console.log("test1");
    const newLog = await Log.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    console.log("test2")
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