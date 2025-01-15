import {PrismaClient} from "@prisma/client";
import {Customer} from "../model/Customer";

const prisma = new PrismaClient();

export async function add(customer:Customer) {
    try {
        const data = await prisma.customer.create({
            data: {
                name: customer.name,
                email: customer.email
            }
        });
        console.log("Customer Added :", data);
    } catch (err) {
     console.log("error Adding Customer :", err);
    }
}

export async function get() {
    try {
        return await prisma.customer.findMany();

    } catch (err) {
        console.log("error Getting Customers :", err);
    }
}

export async function del(id: number) {
    try {
        await prisma.customer.delete({
            where: {
                id: id
            }
        });
    } catch (err) {
        console.log("error Deleting Customer :", err);
    }
}

export async function update(id: number, customer: Customer) {
    try {
        await prisma.customer.update({
            where: {
                id: id
            },
            data: {
                name: customer.name,
                email: customer.email
            }
        });
    } catch (err) {
        console.log("error Updating Customer :", err);
    }
}