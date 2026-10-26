const { prisma } = require('../src/config')

const { users_data, posts } = require('./seed_data')



const create_users = async () => {
  
  try {
    const formattedUsers = users_data.map(user => ({
      ...user,
      createdAt: new Date(user.createdAt)
    }));

    const result = await prisma.user.createMany({
      data: formattedUsers,
      skipDuplicates: true
    });
    console.log(result)
    console.log(`Successfully inserted ${result.count} users.`);
  } catch (error) {
    console.error('Database operation failed:', error);
  } finally {
    await prisma.$disconnect();
  }

};


const create_posts = async () => {
  try {
  const formattedPosts = posts.map(post => ({
    ...post,
    createdAt: new Date(post.createdAt)
  }));

  const result = await prisma.post.createMany({
    data: formattedPosts,
    skipDuplicates: true
  });
    console.log(result)
    console.log(`Inserted ${result.count} posts.`);
  } catch (error) {
    console.error('Post insertion failed:', error);
  }

  finally {
    await prisma.$disconnect();
  }
  
  
}
create_users()
create_posts()
  
  

module.exports = {create_posts,create_users}









