import express from 'express';
import dotenv from 'dotenv';
import router from './routes/index.js';

dotenv.config();

const server = express();

server.use(express.json());

server.use('/api/', router);

server.get('/', (req, res) => {
  res.json({message: 'Load our request in /api/entity'});
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});

