'use strict';


var sequelize = require('../../database/connexion')
const { Sequelize } = require('sequelize');


var Geolocalisation = sequelize.define('geolocalisations', {
    annee: Sequelize.STRING,
    projet: Sequelize.STRING,
    date_debut: Sequelize.STRING,
    date_fin: Sequelize.STRING,
    region: Sequelize.STRING,
    prefecture: Sequelize.STRING,
    sous_prefecture: Sequelize.STRING,
    village_quartier: Sequelize.STRING,
    longitude: Sequelize.STRING,
    latitude: Sequelize.STRING, 
    cout_projet: Sequelize.STRING,
    nombre_personne_beneficiaire:Sequelize.STRING,
    type_projet: Sequelize.STRING,
    point_depart_arrive: Sequelize.STRING,
    distance: Sequelize.STRING,
    surface: Sequelize.STRING
  }); 
  

module.exports = Geolocalisation;


