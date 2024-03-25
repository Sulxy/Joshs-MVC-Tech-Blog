// Handle the routes for the homepage, login, signup, dashboard, newpost, and editpost pages
const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts for the homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      posts,
      logged_In: req.session.logged_In,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single post
router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                { model: User, attributes: ["username"] },
                { model: Comment, include: [{ model: User, attributes: ["username"] }], },
            ],
        });
    
        const post = postData.get({ plain: true });
    
        res.render('post', {
        ...post,
        logged_In: req.session.logged_In,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET all current posts for the dashboard
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
        where: {
            user_id: req.session.user_id,
        },
        include: [
            {
            model: User,
            attributes: ['username'],
            },
        ],
        });
        
        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('dashboard', {
        posts,
        logged_In: req.session.logged_In,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET the login page
router.get('/login', (req, res) => {
    if (req.session.logged_In) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});

// GET the signup page
router.get('/signup', (req, res) => {
    if (req.session.logged_In) {
        res.redirect('/dashboard');
        return;
    }
    res.render('signup');
});

// GET the newpost page
router.get('/newpost', (req, res) => {
    console.log("User Logged In---------",req.session)
    if (!req.session.logged_In) {
        res.redirect('/login');
        return;
    }
    res.render('newpost');
});

// GET the editpost page for a specific post
router.get('/editpost/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    include: {
                        model: User,
                        attributes: ['username'],
                    },
                },
            ],
        });

        const post = postData.get({ plain: true });

        res.render('editpost', {
            ...post,
            logged_In: req.session.logged_In,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Export the router
module.exports = router;