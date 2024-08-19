import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import ProductReview from '@/components/ProductReview/page';
import Image from 'next/image'

function Article({ title, intro, intro2, introImageUrl, sections, sections2, quote, author, authorTitle, authorImage, conclusion, conclusionImageUrl }: any) {
    return (
        <div className="bg-white px-6 py-10 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <p className="text-base font-semibold leading-7 text-indigo-600">Introducing</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
                <p className="mt-6 text-l leading-8">{intro2}</p>
                <img
                    className="h-100 w-300 mt-6 w-full object-cover object-center rounded-lg shadow-md"
                    src={introImageUrl}
                    alt="Introductory visual content"
                />

                <div className="mt-10 flex">
                    {/* Static index on the left */}
                    <div className="w-1/4 pr-8">
                        <div className="space-y-8 sticky top-8">
                            <div>
                                <h2 className="text-base font-semibold">IN THIS ARTICLE</h2>
                            </div>
                            <div className="flex flex-col space-y-4 text-base">
                                <div className="flex items-center space-x-2">
                                    <span className="text-primary">01</span>
                                    <Link href="#our-top-picks" className="underline font-semibold decoration-indigo-600" prefetch={false}>
                                        Our Top Picks
                                    </Link>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-primary">02</span>
                                    <Link href="#what-to-look-for" className="underline font-semibold decoration-indigo-600" prefetch={false}>
                                        What To Look For
                                    </Link>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-primary">03</span>
                                    <Link href="#reviews" className="underline font-semibold decoration-indigo-600" prefetch={false}>
                                        Reviews
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="w-3/4">
                        <div id="our-top-picks" className=''>
                            {sections2.map((section: any, index: any) => (
                                <div key={index}>
                                    <p className='text-lg font-semibold'>{section.content}</p>
                                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                                        {section.points.map((point: any, idx: any) => (
                                            <li key={idx} className="flex gap-x-3 text-m">
                                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                                <div className="flex flex-row space-x-2">
                                                    <p className="text-base text-gray-900">{point.title}</p>
                                                    <Link href="" className="underline decoration-indigo-600 text-indigo-600">{point.description}</Link>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div id="what-to-look-for" className='mt-10'>
                            <p className='text-lg font-semibold'>What to look for</p>
                            <p className="mt-6 text-l leading-8">{intro}</p>
                        </div>
                        <div className='mt-10'>
                            {sections.map((section: any, index: any) => (
                                <div key={index}>
                                    <p>{section.content}</p>
                                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                                        {section.points.map((point: any, idx: any) => (
                                            <li key={idx} className="flex gap-x-3 text-m">
                                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                                <span>
                                                    <strong className="font-semibold text-gray-900">{point.title}</strong> {point.description}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div id="reviews">
                            <ProductReview
                                category="Reviews"
                                productName="Ceramide Cream 10000ppm"
                                imageSrc="https://res.cloudinary.com/dly6v8ee5/image/upload/v1724047493/ec20fca16f9321e7c9efa8ddbbe28756_cjr732xm_b1a89fd4_qm5tfc.webp"
                                imageAlt="Aerie Real Sunnie Strapless Bra"
                                photoCredit="MIIN COSMETICS"
                                buyLink="https://miin-cosmetics.com/940-ceramide-cream-10000ppm.html?utm_source=awin&utm_medium=369493&utm_campaign=&awc=22802_1724047630_e979f61b22aa7035ab1320ba4a77c4fc"
                                price={30}
                                store="MIIN-COSMETICS.COM"
                                likes={[
                                    "Contains 10,000ppm of ceramides, which help strengthen the skin barrier and improve hydration",
                                    "Suitable for all skin types, including sensitive and acne-prone skin",
                                    "Non-comedogenic formula"
                                ]}
                                considerations={["Nothing"]}
                            />
                        </div>
                        <p className="mt-10 text-m">{conclusion}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;
