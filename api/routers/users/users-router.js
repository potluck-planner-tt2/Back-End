const router = require('express').Router();

const Users = require('./users-model');

router.get('/', (req, res) => {
  Users.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get('/:id', validId, (req, res) => {
  const { id } = req.params;

  Users.findById(id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put('/:id', validId, (req, res) => {
  const { id } = req.params;
  const change = req.body;

  Users.editUser(change, id)
    .then((user) => {
      res.status(200).json({ message: 'User updated successfully' });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.delete('/:id', validId, (req, res) => {
  const { id } = req.params;

  Users.deleteUser(id)
    .then((user) => {
      res.status(200).json({ message: 'user succuessfully deleted' });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;

async function validId(req, res, next) {
  const { id } = req.params;

  await Users.findById(id)
    .then((user) => {
      if (user) {
        next();
      } else {
        res.status(400).json({ message: 'ID is invalid.' });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}
