"use client"
import React, { use } from 'react'
import Product from "@/components/product2/page"
import { getProductType } from "@/lib/productSeed"
import { useEffect, useState } from "react"



function Essence() {
    const [products, setProducts] = useState<any[]>([]);
    useEffect(() => {
        getProductType("Essence")
            .then((data) => {
                setProducts(data)
            })
            .catch((error) => {
                console.error('Failed to fetch products:', error);
            })
    }
        , [])
    return (
        <>
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
            </div>
        </>
    )
}

export default Essence