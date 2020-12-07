import {Router} from 'express';
import Leagues from '../models/leagues.js';
import Teams from "../models/teams.js";

const router = Router();

router.get('/', async (req, res) => {
    try {
        const leagues = await Leagues.find()
        res.status(200).json(leagues)
    } catch (err) {
        res.status(401).send('Error ' + err)
    }
})

router.get('/:id/teams', async ({params: {id}}, res) => {
    try {
        const teamsInLeague = await Leagues.findById(id).then(({teams}) =>
            Teams.find({_id: {$in: teams}})
        )
        res.status(200).json(teamsInLeague)

    } catch (err) {
        res.status(401).send('Error ' + err)
    }
})
export default router;
