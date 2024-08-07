import React from 'react'
import Image from 'next/image'
const posts = [
    {
        id: 1,
        title: 'Damaged Skin Barrier - How to Identify It and the Best Solution',
        href: '/blog/skin-barrier-repair',
        description:
            'You might be tempted to layer on more skincare products to combat these symptoms, but the solution could actually lie at the root of the problem: you are overloading your skin with too many active ingredients.',
        imageUrl:
            'https://res.cloudinary.com/dly6v8ee5/image/upload/v1716817569/skin--barrier_cjm77p.jpg',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Marina Viejo',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl: "/images/person/marina.jpeg",
        },
    },
    // More posts...
]

function Blog() {
    return (
        <>
            <div className="bg-white py-10 sm:py-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Skincare & Acne</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            Learn how to take care of your skin with our expert advice and recommendations.
                        </p>
                        <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                            {posts.map((post) => (
                                <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                                        <img
                                            src={post.imageUrl}
                                            alt=""
                                            className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                                        />
                                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-x-4 text-xs">
                                            <time dateTime={post.datetime} className="text-gray-500">
                                                {post.date}
                                            </time>
                                            <a
                                                href={post.category.href}
                                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                            >
                                                {post.category.title}
                                            </a>
                                        </div>
                                        <div className="group relative max-w-xl">
                                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                                <a href={post.href}>
                                                    <span className="absolute inset-0" />
                                                    {post.title}
                                                </a>
                                            </h3>
                                            <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                                        </div>
                                        <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                                            <div className="relative flex items-center gap-x-4">
                                                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                                <div className="text-sm leading-6">
                                                    <p className="font-semibold text-gray-900">
                                                        <a href={post.author.href}>
                                                            <span className="absolute inset-0" />
                                                            {post.author.name}
                                                        </a>
                                                    </p>
                                                    <p className="text-gray-600">{post.author.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog