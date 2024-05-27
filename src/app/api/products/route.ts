import { seedDatabase, getAllProducts } from '@/lib/productSeed';
import { NextResponse } from 'next/server';
import path from "path"


export async function GET() {
    await seedDatabase();
    return NextResponse.json({ r: "base de datos creada de cero" });
}

