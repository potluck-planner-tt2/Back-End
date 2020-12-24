const router = require('express').Router()

const Potluck = require('./potlucks-model')

router.get('/', (req, res) => {
    Potluck.findPotluck()
        .then(potlucks => {
            res.status(200).json(potlucks)
        })
        .catch(err => {
            res.status(500).json({message: 'There was a problem getting the potlucks.'})
        })
})

router.get('/:id', validId, (req, res) => {
    const {id} = req.params

    Potluck.findPotluckById(id)
        .then(potluck => {
            res.status(200).json(potluck)
        })
        .catch(err => {
            res.status(404).json({message: 'Potluck not found.'})
        })
})

router.post('/', (req, res) => {
    const potluck = req.body
    const {pl_id, name, organizer_id} = req.body 

    if(pl_id && name && organizer_id){
        Potluck.addPotluck(potluck)
            .then(potluck => {
                res.status(201).json({message: 'Potluck added successfully.'})
            })
            .catch(err => {
                res.status(500).json({message: 'Something went wrong.'})
            })
        } else {
            res.status(400).json({message: 'Please make sure all required fields are valid.'})
        }
})

router.put('/:id', validId, (req, res) => {
    const potluck = req.body
    const {id} = req.params

    Potluck.editPotluck(potluck, id)
        .then(potluck => {
            res.status(201).json({message: 'Potluck updated successfully'})
        })
        .catch(err => {
            res.status(500).json({message: 'There was a problem updating the potluck.'})
        })
})

router.delete(':id', validId, (req, res) => {
    const {id} = req.params

    Potluck.deletePotluck(id)
        .then(potluck => {
            res.status(200).json({message: 'Potluck deleted successfully.'})
        })
        .catch(err => {
            res.status(500).json({message: 'There was a problem deleting this potluck.'})
        })
})

module.exports = router

function validId(req, res, next){
    const {id} = req.params

    Potluck.findPotluckById(id)
        .then(potluck => {
            if(potluck){
                next()
            } else {
                res.status(404).json({message: 'Potluck not found.'})
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
}