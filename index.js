const express = require('express');
const { config } = require('dotenv');
const router = require('./src/routes/post_routes')
config();

const app = express();

app.use(express.json());

app.use("/posts", router);







const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
