const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

async function main(){
    // Middlewares en dergelijke definiëren
    // Seeds maken
}
main().then(async()=>{
    await prisma.$disconnect();
}).catch(async(err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
});

module.exports = prisma;