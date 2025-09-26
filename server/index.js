import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import config from './src/config/index.js';

dotenv.config();

const app = express();
const PORT = config.port;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, ()=>{
  console.log(`Server Listening at: http://localhost:${PORT}`);
})