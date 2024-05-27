import React from 'react'
import Checker from '@/components/checker/page'

function Check() {
    return (
        <>
            <div className="bg-white py-16 sm:py-24">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-white px-6 py-24  sm:rounded-3xl sm:px-24 xl:py-32">
                        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-black sm:text-4xl">
                            BeautyBoss
                        </h2>
                        <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-600">
                            We Validate, You Radiate 💅                      </p>
                        <Checker />

                    </div>
                </div>
            </div>
        </>

    )
}

export default Check