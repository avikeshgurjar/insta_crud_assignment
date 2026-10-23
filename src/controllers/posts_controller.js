const {create_posts,
getAllPosts,
getPostById,
updatePost,
  deletePost } = require("../services/post_services")

const parseId = (raw) => {
  const n = parseInt(raw, 10);
  return Number.isNaN(n) ? null : n;
};


const post_Creater = async (req, res) => {
  try {
    const {
      imageUrl,
      caption,
      location
    } = req.body;
    if (!imageUrl) return res.status(400).json({ error: "imageUrl is required" });
  
  
    
    
  
  
    const posts = await create_posts(imageUrl, caption, location)
    
  
    res.status(201).json(posts)
    
  } catch (err) {
    return res.status(404).json({"this is the error":err.message})
    
  }

  
  
  
  
  
  
  
  
  
    
      
      
      
      
        
      
      
      
      
      
      
    
  
}

const get_Posts = async (req,res) => {
  try {
    const posts = await getAllPosts()
    return res.status(200).json(posts );
    } catch (error) {
      return res.status(404).json({"error":error.message})
    }
  
  
}

const post_by_id = async (req, res) => {
  const id = parseId(req.params.id);

  try {
    if (id === null) {
      return res.status(400).json({ error: "Invalid id" });
    }

    const post = await getPostById(id);

    if (post) {
      return res.status(200).json(post);
    } else {
      return res.status(404).json({ error: "Post not found" });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};





const update_data = async (req, res) => {

  const id = parseId(req.params.id);
  const { caption, location } = req.body;
  const data= {}

  if (caption !== undefined) data.caption = caption;
  if (location !== undefined) data.location = location;


  try {
       if (id === null) return res.status(404).json({ error: "id is incorrect " });
      const updated_post = await updatePost(id, data)
      return res.status(200).json(updated_post)
    } catch (err) {
      if (err.code === "P2025")
        return res.status(404).json({ error: "Post not found" });
    return res.status(500).json({ "error": err.message })
    
  }
  

  
  
}

const deletePostController = async (req, res) => {
  const id = parseId(req.params.id)

  try {
      if (id === null) return res.status(404).json({ error: "id is incorrect " });
      const deleted_post= await deletePost(id);
      return res.status(204).send(deleted_post);
    } catch (error) {
      if (error.code === "P2025")
        return res.status(404).json({ error: "Post not found" });
      return res.status(500).json({ error: error.message });
    }
  
}

module.exports = {deletePostController,update_data,post_Creater,get_Posts,post_by_id}
