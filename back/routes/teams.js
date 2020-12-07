import { Router } from 'express';
import Teams from '../models/teams.js';
import Players from "../models/players.js";
const router = Router();

// Get one subscriber
router.get('/:id', async({params: {id}}, res) => {
    try{
        const team = await Teams.findById(id)
        res.status(200).json(team)
    }catch(err){
        res.status(401).send('Error ' + err)
    }
})
// Get one subscriber
router.get('/:id/players', async({params: {id}}, res) => {
    try{
       const playersInTeam = await Teams.findById(id).then( ({players}) =>
            Players.find( { _id : { $in : players } })
        )
        res.status(200).json(playersInTeam)

    }catch(err){
        res.status(401).send('Error ' + err)
    }
})

export default router;
