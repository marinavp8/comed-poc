import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button'
import ProductNav from '@/components/ProductsNav/page';


export default function Layout({ children }: { children: React.ReactNode }) {


    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className='mt-10'>
                    <ProductNav />
                </div>
                {children}
            </div>
        </div>
    );
}