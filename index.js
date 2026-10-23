const express = require('express');
const { config } = require('dotenv');
const postrouter = require('./src/routes/post_routes')
const userRouter = require('./src/routes/users_routes')
config();

const app = express();

app.use(express.json());

app.use("/posts", postrouter);
app.use("/users", userRouter);







const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
