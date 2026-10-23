const { prisma  } = require('../config');

const create_posts = (imageUrl,caption,location) => {
  
  

  return  prisma.post.create({
    data: {
      imageUrl,
      caption,
      location
      
    }
  });
  
}

const getAllPosts =  () => {

  return  prisma.post.findMany();
  
  
  
}
const getPostById=(id)=> {
  return prisma.post.findUnique({ where: { id } });
}
const updatePost=(id, data)=>{
  return prisma.post.update({ where: { id }, data });
}
const deletePost=(id)=>{
  return prisma.post.delete({ where: { id } });
}

module.exports = {
  create_posts,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost
}










