const express = require('express');
const router = express.Router();

const {deletePostController,update_data,post_Creater,get_Posts,post_by_id} = require('../controllers/posts_controller')

router.post("/",post_Creater );
router.get("/", get_Posts);
router.get("/:id",post_by_id );
router.patch("/:id",update_data );
router.delete("/:id", deletePostController);


module.exports = router;


