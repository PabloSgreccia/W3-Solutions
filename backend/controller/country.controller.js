require('dotenv').config();
const Country = require('../database/models/').country
const sequelize = require('sequelize');
const { Op, and, where } = require('sequelize');

const getFiveCountries = async (req, res) => {
    try {
        // Valido que exista el atributo "valor" en el query
        if (!req.query.valor) {
            return res.status(400).json({
                status: 400,
                message: "You should define 'valor' in queryParams"
            })
        }

        // Valido que sea mayor o igual a 3, sino devolver 204
        if (req.query.valor.length < 3) {
            return res.status(204).json({
                status: 204,
                message: "You must give at least 3 characters"
            })
        }
        
        const valor = req.query.valor.toLowerCase()
        
        // Obtengo la totalidad de habitantes
        const maxPopulation = await Country.sum('population')
        // console.log(maxPopulation);

        // Obtengo los primeros 5 paises que contengan el valor solicitado (filtrado desde la BD)
        const countries = await Country.findAll({
            limit: 5,
            attributes: ['name', 'population', [sequelize.literal(`population / ${maxPopulation} * 100`), 'avg_population'],],
            where: {
                name: {
                    [Op.like]: '%' + valor + '%'
                }
            }
        })

        // console.log(countries);
        return res.status(200).json({
            status: 200,
            countries
        })

    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: error.message
        })
    }
}

module.exports = {getFiveCountries}

