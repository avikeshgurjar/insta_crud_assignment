const {create_users,
getAllUsers,
getUserById,
updateUser,
  deleteUser } = require("../services/user_services")



const user_Creater = async (req, res) => {
  try {
    const {
      username,
      email,
      fullname,
      bio,
      isPrivate
    } = req.body;
    if (!username) return res.status(400).json({ error: "username is required" });
    if (!email) return res.status(400).json({ error: "email is required" });
    if (!fullname) return res.status(400).json({ error: "fullname is required" });
  
  
    
    
  
  
    const users = await create_users(username, email, fullname, bio, isPrivate)
    

    res.status(201).json(users)
    
  } catch (err) {
    return res.status(404).json({"this is the error":err.message})
    
  }

  
  
  
  
  
  
  
  
  
    
      
      
      
      
        
      
      
      
      
      
      
    
  
}

const get_Users = async (req,res) => {
  try {
    const users = await getAllUsers()
    return res.status(200).json(users );
    } catch (error) {
      return res.status(404).json({"error":error.message})
    }
  
  
}

const user_by_id = async (req, res) => {
  const id = Number(req.params.id);

  try {
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid id" });
    }

    const user = await getUserById(id);

    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};




const update_data = async (req, res) => {

  const id = Number(req.params.id);
  const { username, email, fullname, bio, isPrivate } = req.body;
  const data= {}

  if (username !== undefined) data.username = username;
  if (email !== undefined) data.email = email;
  if (fullname !== undefined) data.fullname = fullname;
  if (bio !== undefined) data.bio = bio;
  if (isPrivate !== undefined) data.isPrivate = isPrivate;


  try {
       if (isNaN(id)) return res.status(404).json({ error: "id is incorrect " });
      const updated_user = await updateUser(id, data)
      return res.status(200).json(updated_user)
    } catch (err) {
      if (err.code === "P2025")
        return res.status(404).json({ error: "User not found" });
    return res.status(500).json({ "error": err.message })
    
  }
  

  
  
}

const deleteUserController = async (req, res) => {
  const id = Number(req.params.id)

  try {
      if (isNaN(id)) return res.status(404).json({ error: "id is incorrect " });
      const deleted_user= await deleteUser(id);
      return res.status(204).send(deleted_user);
    } catch (error) {
      if (error.code === "P2025")
        return res.status(404).json({ error: "User not found" });
      return res.status(500).json({ error: error.message });
    }
  
}

module.exports = {deleteUserController,update_data,user_Creater,get_Users,user_by_id}
