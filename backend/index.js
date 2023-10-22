const express = require("express") 
const blog = require("./models/blog")

const {connectMongoDb} = require("./connection")
const app = express();

//connection with mongo db 

connectMongoDb("mongodb://127.0.0.1:27017/blogapp").then(() => console.log("MongoDb Connected"))

// app.use(express.json());

app.get('/', async (req, res) => {
    try{
        const blogs = await blog.find({});
        res.json(blogs);
    }catch(err) {
        console.log(err);
    }
})

app.post('/blog', async(req, res) => {
    try {
        const {title, content } = req.body;
        const newBlog = new blog({
            title, 
            content,    
        });

        const savedBlog = await newBlog.save();
        res.json(savedBlog);
    } catch(error) {
        res.status(500).json({error: 'Failed to create blog post '});
    }
});

app.listen(8000, () => console.log('My server started'));