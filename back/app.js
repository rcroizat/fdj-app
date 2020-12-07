import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import leagues from './routes/leagues.js';
import teams from './routes/teams.js';
const url = 'mongodb://localhost:27017/fdjdb';
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json())

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection;

con.on('open', () => {
    console.log('connected...')
})

app.use('/leagues', leagues);
app.use('/teams', teams);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
