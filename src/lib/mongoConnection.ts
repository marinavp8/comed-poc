import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URL || "mongodb+srv://marinavp8:Damehueco2024@comed.srrbydp.mongodb.net/";
export const client = new MongoClient(uri)
export const dbName = process.env.MONGO_DB || "comed";