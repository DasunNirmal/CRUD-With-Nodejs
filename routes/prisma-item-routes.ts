import express from "express";
import {Item} from "../model/Item";
import {add, del, get, update} from "../database/prisma-data-store-item";

const routerPrisma = express.Router();

routerPrisma.post('/add', async (req, res) => {
    const item:Item = req.body;
    try {
        await add(item);
        res.send('Item Added');
    } catch (err) {
        console.log("error Adding Item :", err);
        res.status(400).send("error Adding Item");
    }
});

routerPrisma.get('/view', async (req, res) => {
    try {
        const data = await get();
        res.json(data);
    } catch (err) {
        console.log("error Getting Items :", err);
        res.status(400).send("error Getting Items");
    }
});

routerPrisma.patch('/update/:id', async (req, res) => {
    const id =+ req.params.id;
    const item:Item = req.body;
    try {
        await update(id, item);
        res.send('Item Updated');
    } catch (err) {
        console.log("error Updating Item :", err);
        res.status(400).send("error Updating Item");
    }
});

routerPrisma.delete('/delete/:id', async (req, res) => {
    const id =+ req.params.id;
    try {
        await del(id);
        res.send('Item Deleted');
    } catch (err) {
        console.log("error Deleting Item :", err);
        res.status(400).send("error Deleting Item");
    }
});

export default routerPrisma;