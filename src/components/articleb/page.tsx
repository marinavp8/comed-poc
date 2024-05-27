import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
function Article({ title, intro, introImageUrl, sections, quote, author, authorTitle, authorImage, conclusion, conclusionImageUrl }: any) {
    return (
        <div className="bg-white px-6 py-10 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <p className="text-base font-semibold leading-7 text-indigo-600">Introducing</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
                <p className="mt-6 text-l leading-8">{intro}</p>
                <img
                    className="h-100 w-300 mt-6 w-full object-cover object-center rounded-lg shadow-md"
                    src={introImageUrl}
                    alt="Introductory visual content"
                />
                <div className="mt-10 max-w-2xl">
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
                    <blockquote className="mt-10 border-l border-indigo-600 pl-9">
                        <p className="font-semibold text-gray-900">“{quote}”</p>
                    </blockquote>
                    <figcaption className="mt-6 flex gap-x-4">
                        <img className="h-6 w-6 flex-none rounded-full bg-gray-50" src={authorImage} alt="" />
                        <div className="text-sm leading-6">
                            <strong className="font-semibold text-gray-900">{author}</strong> – {authorTitle}
                        </div>
                    </figcaption>
                    <img
                        className="mt-6 w-full object-cover object-center rounded-lg shadow-md"
                        src={conclusionImageUrl}
                        alt="Conclusive visual content"
                    />
                    <p className="mt-10 text-m">{conclusion}</p>
                </div>
            </div>
        </div>
    );
}

export default Article;
