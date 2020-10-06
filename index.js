import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connection was successfully established!'))
    .catch((err) => {
        console.error(
            '[Error]: MongoDB connection cannot be established. Check your connection string and internet connection before trying again'
        );
    });

app.get('/', (req, res) => {
    res.send('Welcome to Beingcodr Server');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
