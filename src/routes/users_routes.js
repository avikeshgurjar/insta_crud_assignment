const express = require('express');
const router = express.Router();

const {deleteUserController,update_data,user_Creater,get_Users,user_by_id} = require('../controllers/users_controller')

router.post("/",user_Creater );
router.get("/", get_Users);
router.get("/:id",user_by_id );
router.patch("/:id",update_data );
router.delete("/:id", deleteUserController);


module.exports = router;
