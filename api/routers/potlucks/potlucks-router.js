const router = require('express').Router();

const Potluck = require('./potlucks-model');
const {
  validatePLCreds,
  validatePLID,
} = require('../../middleware/middlewares');

router.get('/', (req, res) => {
  Potluck.findPotluck()
    .then((potlucks) => {
      res.status(200).json(potlucks);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'There was a problem getting the potlucks.' });
    });
});

router.get('/:id', validatePLID, (req, res) => {
  const { id } = req.params;

  Potluck.findPotluckById(id)
    .then((potluck) => {
      res.status(200).json(potluck);
    })
    .catch((err) => {
      res.status(404).json({ message: 'Potluck not found.' });
    });
});

router.post('/', validatePLCreds, async (req, res) => {
  const potluck = req.body;
  try {
    const addedPotluckID = await Potluck.addPotluck(potluck);
    //Grab new potluck data to return to user
    const addedPotluck = await Potluck.findPotluckById(addedPotluckID[0]);
    res.status(200).json(addedPotluck);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', validatePLID, (req, res) => {
  const potluck = req.body;
  const { id } = req.params;

  Potluck.editPotluck(potluck, id)
    .then((potluck) => {
      res.status(201).json({ message: 'Potluck updated successfully' });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'There was a problem updating the potluck.' });
    });
});

router.delete('/:id', validatePLID, (req, res) => {
  const { id } = req.params;

  Potluck.deletePotluck(id)
    .then((potluck) => {
      res.status(200).json({ message: 'Potluck deleted successfully.' });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'There was a problem deleting this potluck.' });
    });
});

module.exports = router;

// function validId(req, res, next) {
//   const { id } = req.params;

//   Potluck.findPotluckById(id)
//     .then((potluck) => {
//       if (potluck) {
//         next();
//       } else {
//         res.status(404).json({ message: 'Potluck not found.' });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// }
