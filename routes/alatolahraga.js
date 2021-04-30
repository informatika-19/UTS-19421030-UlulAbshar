const router = require('express').Router()
const alatolahragaController = require('../controller/alatolahraga')

router.post('/create/', (req, res)=> {
    alatolahragaController.create(req.body)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.get('/showalldata/', (req, res)=> {
    alatolahragaController.showAllData()
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.get('/showdatabyid/:id', (req, res)=> {
    alatolahragaController.showbyID(req.params.id)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.put('/update/:id', (req, res)=> {
    alatolahragaController.update(req.params.id, req.body)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.delete('/delete/:id', (req, res)=> {
    alatolahragaController.delete(req.params.id)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  module.exports = router