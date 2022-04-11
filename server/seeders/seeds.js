const faker = require("faker");

const db = require("../config/connection");
const { User, Post, Comment, Reply } = require("../models");

db.once("open", async () => {
  await Reply.deleteMany({});
  await Comment.deleteMany({});
  await Post.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);
  // console.log(userData);

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

    const randomCommentIndex = Math.floor(Math.random() * createdComments.length);
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

  // console.log(createdReplys);
  console.log(createdComments);

  console.log("all done!");
  process.exit(0);
});
