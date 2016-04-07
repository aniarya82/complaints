var express = require('express')
var router = express.Router()
var COMP = require('../config/compModel.js')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Form' })
})

router.post('/submit', function (req, res, next) {
  COMP.create({
    name: req.body.name,
    room_no: req.body.room_no,
    floor: req.body.floor,
    wing: req.body.wing,
    type: req.body.type,
    desc: req.body.desc,
    date: Date.now()
  }, function (err, one) {
    if (err) {
      res.send(err)
    }
    res.render('submitted', {title: 'Submitted', one: one})
  })
})

router.get('/detail/:id', function (req, res, next) {
  COMP.findOne({_id: req.params.id}, function (err, one) {
    if (err) {
      res.send(err)
    }
    res.render('detail', {title: 'Details', one: one})
  })
})

router.get('/admin', function (req, res, next) {
  COMP.find(function (err, all) {
    if (err) {
      res.send(err)
    }
    res.render('admin', {title: 'All', data: all})
  })
})

module.exports = router
