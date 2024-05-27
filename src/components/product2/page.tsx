import React from 'react'
import Image from 'next/image'


function Product2({ product }: any) {
    return (
        <>
            <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <Image

                        src={product.imageUrl}
                        alt="producto"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900 h-12">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-sm font-semibold text-white mr-2">{product.tags}</p>
                </div>
            </div>
            <div className="mt-6">
                <a
                    target="_blank" rel="noopener noreferrer"
                    href={product.href}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                    Buy<span className="sr-only">, {product.name}</span>
                </a>
            </div>
        </>
    )
}

export default Product2