const router = require('express').Router();
const Food = require('./foods-model');

router.get('/', (req, res) => {
  Food.findFood()
    .then((foods) => {
      res.status(200).json(foods);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'there was a problem finding the foods.' });
    });
});

router.get('/:id', (req, res) => {
  Food.findFoodById(id)
    .then((food) => {
      res.status(200).json(food);
    })
    .catch((err) => {
      res.status(404).json({ message: 'food not found.' });
    });
});

router.post('/', (req, res) => {
  const food = req.body;
  const { food_id, name } = req.body;

  if (food_id && name) {
    Food.addFood(food)
      .then((food) => {
        res.status(201).json({ message: 'food added successfully.' });
      })
      .catch((err) => {
        res.status(500).json({ message: 'food could not be added.' });
      });
  } else {
    res
      .status(400)
      .json({ message: 'please make sure all required fields are valid.' });
  }
});

router.put('/:id', validId, (req, res) => {
  const food = req.body;
  const { id } = req.params;

  Food.editFood(food, id)
    .then((food) => {
      res.status(201).json({ message: 'Food updated successfully.' });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'There was a problem updating the food.' });
    });
});

router.delete('/:id', validId, (req, res) => {
  const { id } = req.params;

  Food.deleteFood(id)
    .then((food) => {
      res.status(200).json({ message: 'food deleted successfully' });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;

function validId(req, res, next) {
  const { id } = req.params;

  Food.findFoodById(id)
    .then((food) => {
      if (food) {
        next();
      } else {
        res.status(404).json({ message: 'Food not found.' });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}
