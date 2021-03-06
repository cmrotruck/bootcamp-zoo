const faker = require("faker");

const db = require("../config/connection");
const { User, Post, Comment, Reply, Animal } = require("../models");

db.once("open", async () => {
  await Reply.deleteMany({});
  await Comment.deleteMany({});
  await Post.deleteMany({});
  await User.deleteMany({});
  await Animal.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);
  console.log(userData);

  // create posts
  let createdPosts = [];
  for (let i = 0; i < 100; i += 1) {
    const postBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdPost = await Post.create({ postBody, username });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { posts: createdPosts._id } }
    );

    createdPosts.push(createdPost);
  }
  // console.log(createdPosts);

  // create comments
  let createdComments = [];
  for (let i = 0; i < 100; i += 1) {
    const commentBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomPostIndex = Math.floor(Math.random() * createdPosts.length);
    const { _id: postId } = createdPosts[randomPostIndex];

    //we need to add to comment (comment.create)
    const createdComment = await Comment.create({ commentBody, username });

    //update post with _ID from comment
    await Post.updateOne(
      { _id: postId },
      { $push: { comments: createdComment._id } },
      { runValidators: true }
    );

    createdComments.push(createdComment);
  }

  // console.log(createdComments);

  // create replys
  let createdReplys = [];
  for (let i = 0; i < 100; i += 1) {
    const replyBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomCommentIndex = Math.floor(
      Math.random() * createdComments.length
    );
    const { _id: commentId } = createdComments[randomCommentIndex];

    //we need to add to reply (reply.create)
    const createdReply = await Reply.create({ replyBody, username });

    //update post with _ID from reply
    await Comment.updateOne(
      { _id: commentId },
      { $push: { replys: createdReply._id } },
      { runValidators: true }
    );

    createdReplys.push(createdReply);
  }

  const seedAnimals = [
    {
      breed: "American Alligator",
      animalText:
        "Population status is least concern. With protection from hunting, and protection of habitat provided to the alligators in the early 1970s, alligator populations are no longer threatened. However, they are still protected due to the similarity of appearance to the American crocodile, but regulated hunting is allowed in many states.",
      quantity: "1",
    },
    {
      breed: "Camel",
      animalText:
        "Population status least concern/endangered. While the dromedary camel is common with 15 million worldwide, the wild bactrian camel is concidered endangered with only 950.",
      quantity: "6",
    },
    {
      breed: "Cheeta",
      animalText:
        "Population status is vulnerable. Cheetahs are the most endangered cat in Africa, only an estimated 7,000-10,000 remain. Molecular genetic studies on free-ranging and captive cheetahs have shown that the species lacks genetic variation, probably due to past inbreeding. The consequences of such genetic uniformity have led to reproductive abnormalities, high infant mortality, and greater susceptibility to disease, causing the species to be less adaptable and more vulnerable to ecological and environmental changes.",
      quantity: "5",
    },
    {
      breed: "Bald Eagle",
      animalText:
        "Population status is least concern. Bald eagles are protected under the Migratory Bird Treaty Act and Bald and Golden Eagle Protection Act. Bald eagles became endangered due to the use of DDT. They were down-listed from the endangered species list in 2000. Bald eagles no longer need protection from the Endangered Species Act as their populations are healthy and growing.",
      quantity: "3",
    },
    {
      breed: "Flamingo",
      animalText:
        "Population status is least concern, however all the species of flamingo are vulnerable to habitat change and exploitation. The brilliant red colors of flamingo plumage are derived from the rich sources of carotenoid pigments in the algae and other food substances that the birds eat.",
      quantity: "17",
    },
    {
      breed: "Reticulated Giraffe",
      animalText:
        "Population status is endangered. While some giraffe populations are stable, others are shrinking. On-going efforts to measure giraffe populations will allow more accurate assessment of the species' overall conservation status. Habitat destruction and human encroachment continue to threaten giraffe populations. In addition, they are hunted for their skin, meat and tail.",
      quantity: "13",
    },
    {
      breed: "Gorilla",
      animalText:
        "Population status is critically endangered. According to the World Wildlife Fund, the exact number of these gorillas is not known, since they inhabit dense and remote rainforests. Numbers have decreased more than 60% over the last 20-25 years. Outside of predators other great threats to these gorillas include the Ebola virus and the loss of habitat. Humans are consuming the forest for lumber and cultivating the land to meet the needs of ever-increasing human population.",
      quantity: "20",
    },
    {
      breed: "Jaguar",
      animalText:
        "Population status is endangered. Jaguars are being killed because of perceived conflicts with livestock and overhunted for trophies and as a substitute for tiger bones in Asia. Habitat loss is also a big problem for the northern population.",
      quantity: "",
    },
    {
      breed: "Polar Bear",
      animalText:
        "Population status is vulnerable. In May 2006, the IUCN added the polar bear to its Red List of the world???s most imperiled animals, predicting a 30% reduction in the polar bear population in the next 45 years. Polar bears are a vulnerable species rather than an endangered one. A vulnerable species is one that could easily become endangered in the foreseeable future.",
      quantity: "4",
    },
    {
      breed: "Red Panda",
      animalText:
        "Population status is endangered. Red pandas are declining throughout their range as a result of deforestation, increased agriculture, hunting and pressure from growing human populations. There are less than 10,000 red pandas in the wild today; scattered throughout south-east Asia.",
      quantity: "5",
    },
    {
      breed: "Tortoise",
      animalText:
        "Population status critically endangered. Today there are only two living species of giant tortoises, the Aldabra giant tortoise and the several species/subspecies of Galapagos giant tortoise. However, until very recently giant tortoises could be found on nearly every major island group, including the Bahamas, the Greater Antilles (including Cuba and Hispaniola), the Lesser Antilles, the Canary Islands, Malta, the Seychelles, the Mascarene Islands (including Mauritius and Reunion), and Madagascar. Most of these tortoises were wiped out by human arrival.",
      quantity: "2",
    },
    {
      breed: "Toucan",
      animalText:
        "Population status is least concern. For the most part the toucans are forest species, and restricted to primary forests. They will enter secondary forests to forage, but are limited to forests with large old trees that have holes large enough to breed in. Toucans are poor dispersers, particularly across water, and have not reached the West Indies.",
      quantity: "1",
    },
  ];

  let animals = [];

  for (let i = 0; i < seedAnimals.length; i += 1) {
    const animal = seedAnimals[i];
    const { breed, animalText, quantity } = animal;
    const createdAnimal = await Animal.create({ breed, animalText, quantity });

    animals.push(createdAnimal);
  }

  console.log(animals);

  console.log("all done!");
  process.exit(0);
});
