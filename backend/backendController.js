const express = require('express');

let mainController = express.Router();

mainController.route('/')
    .get((req,res)=>{
        res.json({
            name:'Ashish Paudel',
            rollNo:506,
            address:'Balaju'
        });
    });

module.exports = mainController;