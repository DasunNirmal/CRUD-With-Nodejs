import express from "express";
import {Customer} from "../model/Customer";
import {add, del, get, update} from "../database/prisma-data-store-customer";

const routerPrisma = express.Router();

routerPrisma.post('/add', async (req, res) => {
    const customer:Customer = req.body;
    try {
        const data = await add(customer);
        res.send('Customer Added');
    } catch (err) {
        console.log("error Adding Customer :", err);
        res.status(400).send("error Adding Customer");
    }
});

routerPrisma.get('/view', async (req, res) => {
    try {
        const data = await get();
        res.json(data);
    } catch (err) {
        console.log("error Getting Customers :", err);
        res.status(400).send("error Getting Customers");
    }
});

routerPrisma.patch('/update/:id', async (req, res) => {
    const id =+ req.params.id;
    const customer:Customer = req.body;
    try {
        await update(id, customer);
        res.send('Customer Updated');
    } catch (err) {
        console.log("error Updating Customer :", err);
        res.status(400).send("error Updating Customer");
    }
})

routerPrisma.delete('/delete/:id', async (req, res) => {
    const id =+ req.params.id;
    try {
        await del(id);
        res.send('Customer Deleted');
    } catch (err) {
        console.log("error Deleting Customer :", err);
        res.status(400).send("error Deleting Customer");
    }
});

export default routerPrisma;