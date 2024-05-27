import React from 'react'
import Checker from '@/components/checker/page'
import Image from 'next/image';

const categories = [
  {
    name: 'Cleaners',
    href: 'products/cleanser',
    imageSrc: "/images/cover/cleanser2.jpeg",
  },
  {
    name: 'Toners & Essences',
    href: 'products/toner',
    imageSrc: '/images/cover/chica2.jpeg',
  },
  {
    name: 'Serums',
    href: 'products/serum',
    imageSrc: '/images/cover/serum.jpeg',
  },
  {
    name: 'Creams & Moisturizers',
    href: 'products/cream',
    imageSrc: '/images/cover/cream.jpeg',
  },
  { name: 'Body', href: 'products/body', imageSrc: '/images/cover/body.jpeg' },
]
const collections = [
  {
    name: 'Damaged skin barrier - How to identify it and the best solution',
    href: '#',
    imageSrc: '/images/cover/te.jpeg',
    imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
    description: 'Keep your phone, keys, and wallet together, so you can lose everything at once.',
  },
  {
    name: 'Non-comedogenic makeup: TOP 4 makeup bases for acne',
    href: '#',
    imageSrc: '/images/cover/chica.jpeg',
    imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    description: 'The rest of the house will still be a mess, but your desk will look great.',
  },
  {
    name: 'Non-comedogenic Korean facial care routine',
    href: '#',
    imageSrc: '/images/cover/neceser.jpeg',
    imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    description: 'Be more productive than enterprise project managers with a single piece of paper.',
  },
]

function page() {
  return (
    <>
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-3.5 text-center sm:py-20 lg:px-0">
        <h1 className="text-3xl font-bold tracking-tight text-black lg:text-3xl">Wondering if a product will breakout you?</h1>
        <p className="mt-6 text-lg text-black">
          Check if a product would do it. </p>

        <br />

        {/* <p className="mt-4 text-xl text-black">
          made by and for acne prone girlies </p>
        <br /> */}
        <p className="mt-2 text-ll text-black">
          - You'll not ever again afraid of acne. 💆 </p>

        {/* <a
          href="#"
          className="mt-8 inline-block rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-gray-900"
        >
          Check your product
        </a> */}
        <Checker />
      </div>
      <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
        <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
          <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
            Save money and get your perfect skincare routine in one place.
          </h2>
          <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
              <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                {categories.map((category) => (
                  <a
                    key={category.name}
                    href={category.href}
                    className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                  >
                    <span aria-hidden="true" className="absolute inset-0">
                      <img src={category.imageSrc} alt="" className="h-full w-full object-cover object-center" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    />
                    <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-4 sm:hidden">
          <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </section>
      {/* <section
        aria-labelledby="social-impact-heading"
        className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8"
      >
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-0">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2 id="social-impact-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="block sm:inline">Level up</span>
                <span className="block sm:inline">your skincare</span>
              </h2>
              <p className="mt-3 text-xl text-white">
                No more acne, no more breakouts, no more irritation. Just clear, glowing skin.
              </p>
              <a
                href="#"
                className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
              >
                Shop Acne Safe Products
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Collection section */}
      <section
        aria-labelledby="collection-heading"
        className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
      >
        <h2 id="collection-heading" className="text-2xl font-bold tracking-tight text-gray-900">
          Check out our latest articles
        </h2>
        <p className="mt-4 text-base text-gray-500">
          Be up to date on facial care to improve the quality of your skin.        </p>

        <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {collections.map((collection) => (
            <a key={collection.name} href={collection.href} className="group block">
              {/* <div
                aria-hidden="true"
                className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
              > */}

              <div className="relative h-96 w-full">
                <Image
                  src={collection.imageSrc}
                  alt={collection.href}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1024px"
                />
              </div>
              {/* </div> */}
              <h3 className="mt-4 text-base font-semibold text-gray-900">{collection.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{collection.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div> */}
    </ >
  )
}

export default page