const express = require('express');
const { config } = require('dotenv');
config();

const {create_posts,create_users} = require('./prisma/seed')

const { prisma } = require('./src/config');
const app = express();



app.use(express.json());

app.post('/users', async (req, res) => {

  const {
    imageUrl,
    caption,
    location
  } = req.body;
  if (!imageUrl) return res.status(400).json({ error: "imageUrl is required" });
  try {
    
    
    
    
      
    
    const post = await prisma.post.create({
      data: {
        imageUrl,
        caption,
        location
        
      }
    });
    
    
    res.status(201).json(post);
  } catch (error) {
    console.error('Database operation failed: ', error);
    res.status(500).json({ error: 'Database operation failed' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
