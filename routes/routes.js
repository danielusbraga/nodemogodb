const express = require('express')
const Produto = require('../models/Produto')
const { models } = require('mongoose')
const router = express.Router()

router.get('/', function(req, res){
        res.json({})
})
router.get('/produtos', async function(req, res){
        
        res.json(await Produto.find())
})
router.post('/produtos', async function(req, res){
        
        res.json(await Produto.create({nome:'Pizza'}))
})
router.post('/produtos/:id', async function(req, res){
        
        res.json(await Produto.findById(req.params.id    ))
})
router.delete ('/produtos/:id', async function(req, res){
        
        res.json(await Produto.findById(req.params.id    ))
})
router.put ('/produtos/:id', async function(req, res){
        
        res.json(await Produto.findById(req.params.id, req.body   ))
})



module.express = router