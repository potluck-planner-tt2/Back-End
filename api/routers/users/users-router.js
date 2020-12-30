const router = require('express').Router();

const Users = require('./users-model');
const {
  validateUserId,
  validateUserName,
} = require('../../middleware/middlewares');

router.get('/', (req, res) => {
  Users.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get('/:id', validateUserId, (req, res) => {
  const { id } = req.params;

  Users.findById(id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put('/:id', validateUserId, validateUserName, (req, res) => {
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

router.delete('/:id', validateUserId, (req, res) => {
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
