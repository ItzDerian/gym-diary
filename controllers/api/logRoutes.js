const router = require('express').Router();
const { User, Log, Exercise } = require('../../models');
const withAuth = require('../../utils/auth');

// user login routes: 'http://localhost:PORT/

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
    // const _ = await _.destroy({
    //   where: {
    //     id: req.params.id,
    //     user_id: req.session.user_id,
    //   },
    // });

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