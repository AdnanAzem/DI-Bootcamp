const express = require('express');
const app = express();

app.use(express.json());

data = [
    {
        "id": 0,
        "title": "First Post",
        "content": "This is the content of the first post."
    },
    {
        "id": 1,
        "title": "Second Post",
        "content": "This is the content of the second post."
    },
    {
        "id": 2,
        "title": "Third Post",
        "content": "This is the content of the third post."
    }
];

app.get('/posts', (req, res) => {
    res.send(data);
});

app.get('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = data.find(post => post.id === id);
    if (!post) {
        res.status(404).send('Post not found');
    } else {
        res.send(post);
    }
});

app.post('/posts', (req, res) => {
    const newPost = req.body;
    newPost.id = data.length;
    data.push(newPost);
    res.send(newPost);
});

app.put('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedPost = req.body;
    const post = data.find(post => post.id === id);
    if (!post) {
        res.status(404).send('Post not found');
    } else {
        post.title = updatedPost.title;
        post.content = updatedPost.content;
        res.send(post);
    }
});

app.delete('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = data.find(post => post.id === id);
    if (!post) {
        res.status(404).send('Post not found');
    } else {
        data = data.filter(post => post.id !== id);
        res.send(post);
    }
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});