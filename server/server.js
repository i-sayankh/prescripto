import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDb from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';

const app = express();
const port = process.env.PORT || 4000;
connectDb();
connectCloudinary();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('API Working');
});

app.listen(port, () => console.log("Server started: ", port));