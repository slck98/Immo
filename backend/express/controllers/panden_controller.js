const prisma = require("../db/prisma");
const { validationResult } = require('express-validator');

const PandenController = {
    findAll: async(req,res) => {
        try {
            const panden = await prisma.panden.findMany({
                select: {
                    id:true,
                    straat:true,
                    huisnummer:true,
                    bus:true,
                    gemeente:true,
                    postcode:true,
                    prijs:true,
                    aantalKamers:true,
                    oppervlakte:true,
                    beschrijving:true,
                    type:true,
                    isVerkochtVerhuurd:true,
                    typePand: {
                        select: {
                            id:true,
                            naam: true,
                        }
                    },
                    afbeeldingen:{
                        select: {
                            id:true,
                            url:true,
                        }
                    },
                    pandRegio:{
                        select:{
                        Regio:{
                            select:{
                                naam:true,
                            }
                        }}
                    }
                },

            });
            res.status(200).json(panden);
        } catch (error) {
            console.error(error);
            res.status(500).json({message:error});
        }
    },
    findById: async (req, res) => {
        try {
          const panden = await prisma.panden.findUnique({
            where: {
              id: parseInt(req.params.id),
            },
            select: {
                id:true,
                straat:true,
                huisnummer:true,
                bus:true,
                gemeente:true,
                postcode:true,
                prijs:true,
                aantalKamers:true,
                oppervlakte:true,
                beschrijving:true,
                type:true,
                isVerkochtVerhuurd:true,
                typePand: {
                    select: {
                        id:true,
                        naam: true,
                    }
                },
                afbeeldingen:{
                    select: {
                        id:true,
                        url:true,
                    }
                },
                pandRegio:{
                    select:{
                    Regio:{
                        select:{
                            naam:true,
                        }
                    }}
                }
            },
          });
      
          res.status(200).json(panden);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: error.message });
        }
    },
    add: async (req,res) => {
        try {
            // Extract the data from the request body
            const {
              prijs,
              straat,
              huisnummer,
              bus,
              postcode,
              gemeente,
              aantalKamers,
              oppervlakte,
              beschrijving,
              type,
              typePandId,
              isVerkochtVerhuurd,
              createdAt,
              updatedAt,
            } = req.body;
        
            // Create a new pand using Prisma
            const newPand = await prisma.panden.create({
              data: {
                prijs: parseInt(prijs),
                straat,
                huisnummer,
                bus,
                postcode: parseInt(postcode),
                gemeente,
                aantalKamers: parseInt(aantalKamers),
                oppervlakte: parseInt(oppervlakte),
                beschrijving,
                type,
                typePandId,
                isVerkochtVerhuurd,
                createdAt,
                updatedAt,
              },
            });
        
            // Return the created pand object as the response
            return res.status(200).json(newPand);
          } catch (error) {
            // Return an error response if there's an issue saving to the database
            return res.status(500).json({ error: 'Failed to save pand to the database.' });
          }
    },
    update: async(req,res) => {
        try {
            // Extract the data from the request body
            const {
              prijs,
              straat,
              huisnummer,
              bus,
              postcode,
              gemeente,
              aantalKamers,
              oppervlakte,
              beschrijving,
              type,
              typePandId,
              isVerkochtVerhuurd,
              createdAt,
              updatedAt,
            } = req.body;
        
            // Create a new pand using Prisma
            const newPand = await prisma.panden.update({
                where: {
                    id: parseInt(req.params.id),
                  },
              data: {
                prijs: parseInt(prijs),
                straat,
                huisnummer,
                bus,
                postcode: parseInt(postcode),
                gemeente,
                aantalKamers: parseInt(aantalKamers),
                oppervlakte: parseInt(oppervlakte),
                beschrijving,
                type,
                typePandId,
                isVerkochtVerhuurd,
                createdAt,
                updatedAt,
              },
            });
        
            // Return the created pand object as the response
            return res.status(200).json(newPand);
          } catch (error) {
            // Return an error response if there's an issue saving to the database
            return res.status(500).json({ error: 'Failed to save pand to the database.' });
          }
    },
    delete: async (req, res) => {
        try {
          const { isVerkochtVerhuurd } = req.body;
          // Update the isVerkochtVerhuurd field to soft delete the pand
          const updatedPand = await prisma.panden.update({
            where: {
                id: parseInt(req.params.id),
              },
            data: { isVerkochtVerhuurd},
          });
          
          return res.status(200).json(updatedPand);
        } catch (error) {
          console.error("An error occurred while updating isVerkochtVerhuurd:", error);
          return res.status(500).json({ error: "Failed to update isVerkochtVerhuurd." });
        }
      }
};

module.exports = PandenController;