
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from "./routes/post.js"
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect( process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));
    
    
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/posts', postRoutes);

// MongoDB Connection

app.get('/', (req, res) => {
    res.send('Hello to Memories API');
});

const PORT = process.env.PORT || 4000;


