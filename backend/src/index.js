const { PrismaClient } = require("@prisma/client");
const faker = require("faker");

const prisma = new PrismaClient();

async function main() {
  for(i=0 ; i< 100 ; i++){
    await prisma.job.create({
      data: {
        title: faker.name.jobTitle(),
        position: faker.name.jobArea(),
        companyName: faker.company.companyName() ,
        companyLogo: faker.image.imageUrl(),
        companyLocation: faker.address.city(),
        url: faker.internet.url(),
        createdAt:new Date(faker.time.recent()),
        userId: 1,
        categoryId: 32,
        typeId: 1,
      },
    });
  }

  const roles = await prisma.job.findMany();
  console.log(roles);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
