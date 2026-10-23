const express = require('express');
const { config } = require('dotenv');
config();

const app = express();


app.use(express.json());





const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
