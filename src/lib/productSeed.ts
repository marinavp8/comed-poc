"use server"
import csv from 'csvtojson';
import { client, dbName } from '@/lib/mongoConnection';
import { json } from "@/lib/utils"


const collectionName = "products"; // Nombre de la colección

// const client = new MongoClient(url);

// export function json(obj: any) {
//     if (obj)
//         return JSON.parse(JSON.stringify(obj))
//     return null
// }

export async function seedDatabase(): Promise<void> {
    try {

        await client.connect();
        console.log("Connected to MongoDB");
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const jsonArray = await csv({ delimiter: ';' }).fromFile("product_seed.csv");
        await collection.insertMany(jsonArray);
        console.log("Data inserted");
    } catch (err) {
        console.error("An error occurred:", err);
    } finally {
        await client.close();
    }
}


export async function getAllProducts() {

    const db = await client.db(dbName);
    console.log("Connected to MongoDBH");
    const collection = db.collection(collectionName);
    const products = await collection.find().toArray();
    const plainProducts = json(products);
    return plainProducts;

}


export async function getProductType(productType: string) {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const products = await collection.find({ type: productType }).toArray();
    return json(products);
}



