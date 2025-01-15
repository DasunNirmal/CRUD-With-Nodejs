import express from 'express';
import {addCustomer, deleteCustomer, getCustomers, updateCustomer} from "../database/local-data-store";

const routerLocal = express.Router();

routerLocal.get('/view', (req, res) => {
    res.json(getCustomers());
});

routerLocal.post('/add', (req, res) => {
    addCustomer(req.body)
    res.send('Customer Added');
});

routerLocal.delete('/delete/:id', (req, res) => {
    deleteCustomer(req.params.id)
    res.send('Customer Deleted');
});

routerLocal.patch('/update/:id', (req, res) => {
    updateCustomer(req.params.id, req.body);
    res.send('Customer Updated');
});

export default routerLocal;