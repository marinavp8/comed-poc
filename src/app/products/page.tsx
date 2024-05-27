"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'
import type { NextPage } from 'next';
import { useEffect, useState } from "react"
import { getAllProducts } from "@/lib/productSeed"
import Product from "@/components/product2/page"


function Products() {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const productsFromDb = await getAllProducts();
                setProducts(productsFromDb);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
            setLoading(false);
        };

        fetchProducts();
    }, []);



    if (loading) return <p>Loading...</p>;



    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {
                        products.map((product) => {
                            return (
                                <div key={product._id}>
                                    <Product product={product} />
                                </div>
                            );
                        }
                        )}
                </div>
            </div>
            {JSON.stringify(products)}
        </div>

    )
}

export default Products