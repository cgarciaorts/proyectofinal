const express = require('express');
const router = express.Router();

const datauser = require('../models/datauser')
const wellness = require('../models/wellness')
const tienda = require('../models/tienda')
const deporte = require('../models/deporte')

/* GET home page. */

router.get('/Inicio', function(req, res, next) {
  res.render('inicio', { title: 'Inicio' });
});

router.get('/Perfil', function(req, res, next) {
  res.render('perfil', { title: 'Perfil' });
});

router.get('/creargraficawellness', async (req,res) => {
  const obtenergraficaswellness = await wellness.find({});
  console.log(obtenergraficaswellness)
  res.render('creargraficawellness', {obtenergraficaswellness});
});

router.get('/creargraficawellness' , (req, res) => {
  res.render('creargraficawellness')
})

router.post('/creargraficawellness', async (req, res, next) => {
  const enviargraficawellness = new wellness(req.body); 
  await enviargraficawellness.save();
  res.redirect('/creargraficawellness',)
});
/////////////////////////////////
router.get('/editargraficawellness/:id', async (req, res, next) => {
  const graficaeditadowellness = await wellness.findById(req.params.id)
  res.render('editargraficawellness', {graficaeditadowellness})
})
router.put('/graficaEditadowellness/:id', async (req, res, next) => {
  await wellness.findByIdAndUpdate(req.params.id, req.body)
  res.redirect('/Perfil')
})

router.delete('/eliminargraficawellness/:id', async (req, res) => {
  await wellness.findByIdAndDelete(req.params.id)
  res.redirect('/Perfil')
})
///////////////////////
router.get('/Tienda', async (req,res) => {
  const obtenertienda = await tienda.find({});
  res.render('tienda', {obtenertienda});
});


router.get('/Tienda' , (req, res) => {
  res.render('tienda')
})

router.get('/Deporte', async(req, res, ) => {
  const obtenerdeporte = await deporte.find({})
  console.log(obtenerdeporte)
  res.render('deporte', {obtenerdeporte});
});

router.get('/Deporte', function(req, res, next) {
  res.render('deporte');
});

router.get('/Login', function(req, res, next) {
  res.render('signin', { title: 'Login' });
});


module.exports = router;