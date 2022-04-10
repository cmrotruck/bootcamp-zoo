const seedAnimals = require("./animal_seeds");
const seedPosts = require("./post_seeds");
const seedComments = require("./comment_seeds");
const seedUsers = require("./user_seeds");
const seedReplys = require("./reply_seeds");

const sequelize = require("../config/connection");

const seedDb = async () => {
  await sequelize.sync({ force: true });
  console.log(`\n----- Database Synced -----\n`);

  await seedUsers();
  console.log(`\n----- Users Seeded -----\n`);

  await seedAnimals();
  console.log(`\n----- Groups Seeded -----\n`);

  await seedPosts();
  console.log(`\n----- Posts Seeded -----\n`);

  await seedComments();
  console.log(`\n----- Comments Seeded -----\n`);

  await seedReplys();
  console.log(`\n----- Replys Seeded -----\n`);

  process.exit(0);
};

seedDb();
