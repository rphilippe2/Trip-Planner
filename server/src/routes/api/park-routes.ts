import express from "express";
import type { Request, Response } from "express";
import { Park } from "../../models/index.js";
import fetch from "node-fetch";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const newPark = await Park.create({
            username_id: req.body.username_id,
            name: req.body.name,
            url: req.body.url,
            description: req.body.description,
            states: req.body.states,
            designation: req.body.designation,
            images: req.body.images,
        });

        res.json(newPark);
    } catch (err) {
        console.error(err);
        res.json(err);
    }
});

router.get('/trails/:city', async (req: Request, res: Response) => {
    try {
        const city = req.params.city;
        const trails = await fetch(`https://prescriptiontrails.org/api/filter/?by=&city=${city}&offset=0&count=6`);
        // res.send(trails);
        if(trails.ok){
            const data = await trails.json();
            return data;
            
        }else{
        res.send({message: "Error fetching trails"});
        }
    } catch (err) {
        console.error(err);
        res.json(err);
    }
});

export {router as parkRouter};