const prisma = require("../db/prisma");
const { validationResult } = require('express-validator');

const TypePandController = {
    findAll: async(req,res) => {
        try {
            const panden = await prisma.typePand.findMany({
                select: {
                    id:true,
                    naam:true,
                },

            });
            res.status(200).json(panden);
        } catch (error) {
            console.error(error);
            res.status(500).json({message:error});
        }
    },
};

module.exports = TypePandController;