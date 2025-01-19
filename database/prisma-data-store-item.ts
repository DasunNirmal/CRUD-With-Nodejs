import {PrismaClient} from "@prisma/client";
import {Item} from "../model/Item";

const prisma = new PrismaClient();

export async function add(item:Item) {
    try {
        const data = await prisma.item.create({
            data: {
                itemName: item.itemName,
                price: item.price,
                qty: item.qty
            }
        });
        console.log("Item Added :", data);
    } catch (err) {
        console.log("error Adding Item :", err);
    }
}

export async function get() {
    try {
        return await prisma.item.findMany();
    } catch (err) {
        console.log("error Getting Items :", err);
    }
}

export async function update(id: number, item: Item) {
    try {
        await prisma.item.update({
            where: {
                id: id
            },
            data: {
                itemName: item.itemName,
                price: item.price,
                qty: item.qty
            }
        });
    } catch (err) {
        console.log("error Updating Item :", err);
    }
}

export async function del(id: number) {
    try {
        await prisma.item.delete({
            where: {
                id: id
            }
        });
    } catch (err) {
        console.log("error Deleting Item :", err);
    }
}