const router = require('express').Router();
const {User, Log, Exercise } = require('../../models'); // models to be imported
const sequelize = require('../../config/connection');

// Create new user profile:

router.post('/', async (req, res) => {
  try {
    // Expect req.body:
    // {
    //   id: Int,
    //   name: String,
    //   email: String,
    //   password: String,
    //   dateofBirth: Date,
    //   weight: Int,
    //   height: Int
    // }
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Query User, associated Logs, and Exercises
router.get('/user/:id', async (req, res) => {
  try {
    const userLog = await User.findByPk(req.params.id, {
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
    
    res.status(200).json(userLog);
    // // Expect: 
    // {
    //   "id": int,
	  //   "name": String,
	  //   "email": String,
	  //   "dateOfBirth": Date,
	  //   "weight": int,
	  //   "height": int,
	  //   "logs": [
    //     {
    //       "id": int,
    //       "log_date": Date,
    //       "sets": int,
    //       "reps": int,
    //       "exercise": {
    //         "exercise": String,
    //         "targetArea": String
    //       }
    //     },
    //   ]
    // }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Query log by user_id and date (url formated for testing)
router.get('/log/:id/:date', async (req, res) => {
 
  // // url options:
  // req.params.id: int
  // req.params.date: yyyy-mm-dd

  try {
    const dailyLog = await Log.findAll({
      attributes: [
        'id',
        'user_id',
        'log_date', 
        'sets', 
        'reps'
      ],
      include: {
        model: Exercise,
        attributes: ['exercise', 'targetArea'],
      },
      where: [
        sequelize.where(sequelize.fn('DATE', sequelize.col('log_date')), req.params.date), 
        // // for when session is set up
        // {user_id: req.session.user_id},

        // for testing:
        {user_id: req.params.id}
      ]
    });

    res.status(200).json(dailyLog);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update User profile
router.put('/', async (req, res) => {
  try {
    // req.body OPTIONS:
    // req.body: {
    //   id: Int,
    //   name: String,
    //   email: String,
    //   password: String,
    //   dateofBirth: Date,
    //   weight: Int,
    //   height: Int
    // }
    const update = await User.update({
      weight: req.body.weight,
      // other_Attribute: req.body.other_Attribute,
      }, 
      {where: {id: req.body.id}}
    );

    const updatedUser = await User.findByPk(req.body.id);
    
    res.status(200)
    // for testing
    .json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a log by id
router.delete('/log/:id', async (req, res) => {
  try {
    const deleteLog = Log.destroy({where: {id: req.body.id}});

    res.status(200).json(`Log ${req.params.id} deleted`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;