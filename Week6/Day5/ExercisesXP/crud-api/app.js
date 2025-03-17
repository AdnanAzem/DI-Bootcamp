// Inside app.js, import the dataService module you created.
import { fetchPosts } from './data/dataService.js';
import express from 'express';
const app = express();

// Create an endpoint in your Express app that uses the fetchPosts function from the dataService module to retrieve data from the JSONPlaceholder API.
app.get('/posts', async (req, res) => {
    try {
        const posts = await fetchPosts();
        console.log("successfully retrieved the data from the JSONPlaceholder API");
        res.send(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).send('Error fetching posts');
    }
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

// Respond with the fetched data from the JSONPlaceholder API. https://jsonplaceholder.typicode.com/posts

// Print a message in the console to indicate that the data has been successfully retrieved and sent as a response
