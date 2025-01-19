import express from 'express';
import prismaCustomerRoutes from "./routes/prisma-customer-routes";
import prismaItemRoutes from "./routes/prisma-item-routes";

const app = express();

app.use(express.json());
app.use('/customer',prismaCustomerRoutes);
app.use('/item',prismaItemRoutes);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

app.use((req, res,next) => {
    res.status(404).send('Not Found');
})