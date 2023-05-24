//import express, mongoose, dotenv

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 4000;

//connect to database
mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) => {
        console.log(`Connected to DataBase: ${conn.connection.host}`);
    })
    .catch((err) => {
        console.log(err.message);
        process.exit(1);
    });

//start the server
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})

//generate response at given endpoint
app.get('/post', (_req, res) => {

    const posts = [];

    //generate 20 posts
    for (let i = 1; i < 20; i++) {
        const post = {
            id: i,
            title: `Post ${i}`,
            content: `This is the content of the Post ${i}`
        };
        posts.push(post);
    }

    //send response
    res.status(200).json({
        success: true,
        posts
    })
})