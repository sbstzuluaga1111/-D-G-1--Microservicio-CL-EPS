const express = require('express');
const dotenv = require('dotenv');
const router = express.Router();

const app = express();

dotenv.config();

const port = process.env.PORT || 3000;

const routerBase = require('./routes/routes');
app.use('/use',routerBase);

app.use(express.json());
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});