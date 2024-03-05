const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "This is a comment",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "This is another comment",
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: "This is a third comment",
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: "This is a fourth comment",
        user_id: 4,
        post_id: 2
    },
    {
        comment_text: "This is a fifth comment",
        user_id: 5,
        post_id: 2
    },
    {
        comment_text: "This is a sixth comment",
        user_id: 6,
        post_id: 2
    },
    {
        comment_text: "This is a seventh comment",
        user_id: 7,
        post_id: 3
    },
    {
        comment_text: "This is an eighth comment",
        user_id: 8,
        post_id: 3
    },
    {
        comment_text: "This is a ninth comment",
        user_id: 9,
        post_id: 3
    },
    {
        comment_text: "This is a tenth comment",
        user_id: 10,
        post_id: 4
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;