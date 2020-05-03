'use strict';

var Geolocalisation = require('../models/geolocalisationModel'); 

exports.get_index = function(req, res) {
   Geolocalisation.findAll()
    .then(geolocalisations => {
      res.json(geolocalisations);
    }).catch((err)=>{
      res.send(err)
    })
};


exports.post_create = function(req, res) {
  
  res.json(req.body.geolocalisationRequest);
  var reqGeolocalisation  = JSON.parse(req.body.geolocalisationRequest); 

  console.log(reqGeolocalisation); 

  Geolocalisation.sync().then(function () {
    return Geolocalisation.create({
      annee: reqGeolocalisation.annee,
      projet: reqGeolocalisation.projet,
      date_debut: reqGeolocalisation.date_debut,
      date_fin: reqGeolocalisation.date_fin,
      region: reqGeolocalisation.region,
      prefecture: reqGeolocalisation.prefecture,
      sous_prefecture: reqGeolocalisation.sous_prefecture,
      village_quartier: reqGeolocalisation.village_quartier,
      longitude: reqGeolocalisation.longitude,
      latitude: reqGeolocalisation.latitude, 
      cout_projet: reqGeolocalisation.cout_projet,
      nombre_personne_beneficiaire:reqGeolocalisation.nombre_personne_beneficiaire,
      type_projet: reqGeolocalisation.type_projet,
      point_depart_arrive: reqGeolocalisation.point_depart_arrive,
      distance: reqGeolocalisation.distance,
      surface: reqGeolocalisation.surface
    }).then(geolocalisation => {
      res.json(geolocalisation);
    })
    .catch(err => { if (err) return res.status(500).send("There was a problem registering the geolocalisation.")})
  })
};
