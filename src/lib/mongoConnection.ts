import { MongoClient } from 'mongodb';
const uri = process.env.MONGO_URL || "mongodb://localhost:27017";
export const client = new MongoClient(uri)
export const dbName = process.env.MONGO_DB || "comed";