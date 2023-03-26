const express = require('express');
const router = express.Router();
const { Post, sequelize } = require('../models');

//Post
router.post("/post", async(req, res) => {
    try{
        const post = req.body;
        await Post.create(post);

        res.json(post);
    }catch{
        res.json("Field to post.. Try again later");
    }
});

//Get data
router.get("/get", async(req, res) => {
    const listOfPost = await Post.findAll();
    res.json(listOfPost);
});

module.exports = router;