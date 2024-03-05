const { Post } = require('../models');

const postData = [
    {
        title: "Test Post 1",
        post_text: "This is a test post",
        user_id: 1
    },
    {
        title: "Test Post 2",
        post_text: "This is another test post",
        user_id: 2
    },
    {
        title: "Test Post 3",
        post_text: "This is a third test post",
        user_id: 3
    },
    {
        title: "Test Post 4",
        post_text: "This is a fourth test post",
        user_id: 4
    },
    {
        title: "Test Post 5",
        post_text: "This is a fifth test post",
        user_id: 5
    },
    {
        title: "Test Post 6",
        post_text: "This is a sixth test post",
        user_id: 6
    },
    {
        title: "Test Post 7",
        post_text: "This is a seventh test post",
        user_id: 7
    },
    {
        title: "Test Post 8",
        post_text: "This is an eighth test post",
        user_id: 8
    },
    {
        title: "Test Post 9",
        post_text: "This is a ninth test post",
        user_id: 9
    },
    {
        title: "Test Post 10",
        post_text: "This is a tenth test post",
        user_id: 10
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;