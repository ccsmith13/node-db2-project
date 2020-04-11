const express = require("express");
const router = express.Router();
const db = require('../data/dbConfig.js');

//Retrieve all cars
router.get('/', (req, res) => {
    //console.log('i am 100 percent positive it gets here');
    db('cars')
    .then(results => {
      res.json(results);
    }) 
    .catch (err => {
      res.status(500).json({ message: 'Failed to get cars' });
    });
  });

//Find car by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    db('cars').where({ id })
    .then(results => {
      if (results.length) {
        res.json(results);
      } else {
        res.status(404).json({ message: 'Could not find car with given id.' })
        }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to get car' });
    })
  });

//Create new car 
router.post('/',(req,res)=>{
    //console.log('in the post');
    const newCar = req.body;
    db('cars').insert( newCar )
    .then (results => {
        if(results.length){
            res.status(201).json(results)
        }
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({ error: "There was an error while saving the new car to the database" })
    })
})

module.exports = router; 