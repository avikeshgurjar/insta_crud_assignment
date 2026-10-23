const express = require('express');
const router = express.Router();

const {deletePostController,update_data,post_Creater,get_Posts,post_by_id} = require('../services/post_services')


router.post("/",post_Creater );
router.get("/", );
router.get("/:id",post_by_id );
router.patch("/:id",update_data );
router.delete("/:id", deletePostController);


module.exports = router;


