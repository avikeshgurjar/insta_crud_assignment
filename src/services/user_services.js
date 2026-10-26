const { prisma  } = require('../config');

const create_users = (username,email,fullname,bio,isPrivate) => {
  
  

  return  prisma.user.create({
    data: {
      username,
      email,
      fullname,
      bio,
      isPrivate
      
    }
  });
  
}

const getAllUsers = (page, limit) => {
  if (page && limit) {
    return prisma.user.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: "desc"
      }
    });
  } else {
    return prisma.user.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });
  }
  
  return prisma.user.findMany()
};


const getUserById=(id)=> {
  return prisma.user.findUnique({ where: { id } });
}
const updateUser=(id, data)=>{
  return prisma.user.update({ where: { id }, data });
}
const deleteUser=(id)=>{
  return prisma.user.delete({ where: { id } });
}

module.exports = {
  create_users,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
}
