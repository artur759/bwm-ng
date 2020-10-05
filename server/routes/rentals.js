const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');

//Pierwszy endpoint zwracający wszyskie dane
router.get('', function(req,res){
    Rental.find({},function (err, foundRentals) {
        res.json(foundRentals);
        
    })
});

//Drugi endpoint zwracajacy tylko po id
router.get('/:id', function(req,res){
    const rentalId = req.params.id;
    Rental.findById(rentalId, function (err,foundRental) {
        if(err){
            res.status(422).send({errors:[{title: 'Rental Error!', detail: 'Could not find Renral!'}]});
        }
        res.json(foundRental);
    })
})
module.exports = router;