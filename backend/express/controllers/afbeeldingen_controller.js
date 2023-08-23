const prisma = require("../db/prisma");
const { validationResult } = require('express-validator');

const afbeeldingen_controller = {
    add: async (req,res) => {
        try {
            // Extract the data from the request body
            const {
              url,
              pandenId,
              createdAt,
              updatedAt,
            } = req.body;
        
            // Create a new pand using Prisma
            const newAfbeelding = await prisma.afbeeldingen.create({
              data: {
                url,
                pandenId,
                createdAt,
                updatedAt,
              },
            });
        
            // Return the created pand object as the response
            return res.status(200).json(newAfbeelding);
          } catch (error) {
            // Return an error response if there's an issue saving to the database
            return res.status(500).json({ error: 'Failed to add afbeelding.' });
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