
"use client"
import React, { useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';


interface Tab {
    name: string;
    href: string;
    current: boolean;
}
const tabs = [
    { name: 'Cleansers', href: '/products/cleanser', current: false },
    { name: 'Toners & Essences', href: '/products/toner', current: false },
    { name: 'Serums', href: '/products/serum', current: false },
    { name: 'Moistroissers', href: '/products/cream', current: false },
    { name: 'Sunscreens', href: '/products/sunscreen', current: false },
    { name: 'Body', href: '/products/body', current: false },
    { name: 'View All', href: '/products', current: true },
]


function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductNav() {

    const router = useRouter();  // Hook for programmatic navigation

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedTab = tabs.find(tab => tab.name === event.target.value);
        if (selectedTab && selectedTab.href) {
            router.push(selectedTab.href);
        }
    };


    return (
        <div className="border-b border-gray-200 pb-5 sm:pb-0">
            <h3 className="text-base font-semibold leading-6 text-gray-900">Safe Products</h3>
            <div className="mt-3 sm:mt-4">
                <div className="sm:hidden">
                    <label htmlFor="current-tab" className="sr-only">
                        Select a tab
                    </label>
                    <select
                        id="current-tab"
                        name="current-tab"
                        className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        defaultValue={
                            tabs && tabs && tabs.find((tab) => tab.current)?.name}
                        onChange={handleSelectChange}  // Add onChange handler here


                    >
                        {tabs.map((tab) => (
                            <option key={tab.name}>{tab.name}</option>

                        ))}
                    </select>
                </div>
                <div className="hidden sm:block">
                    <nav className="-mb-px flex space-x-8">
                        {tabs.map((tab) => (
                            <Link
                                key={tab.name}
                                href={tab.href}
                                className={classNames(
                                    tab.current
                                        ? 'border-indigo-500 text-indigo-600'
                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                    'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium'
                                )}
                                aria-current={tab.current ? 'page' : undefined}                        >
                                {tab.name}
                            </Link>
                        ))}


                    </nav>
                </div>
            </div>
        </div>
    )
}
