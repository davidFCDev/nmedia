import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'
import Link from 'next/link'
const clients = [
  {
    id: 1,
    name: 'Nerone Studio',
    description: 'Streetwear Brand',
    tag: '@neronestudio',
    quote:
      '"NNMedia provided me with content of my products unlike anyone before - eye-catching and cinematic while keeping it clean"',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt:
      'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  {
    id: 2,
    name: 'After',
    description: 'Designer Brand',
    tag: '@after.the.store',
    quote:
      '"Simply a pleasure to work with, incredibly professionally done photos and videos for our socials"',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt:
      'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  {
    id: 3,
    name: 'Logoto Clothing',
    description: 'Streetwear Brand',
    tag: '@logoto_clothing',
    quote:
      '"Very punctual and creative, fully developed multiple projects following our brand values"',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt:
      'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  // More products...
]
export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-gradient-to-b from-black  via-gray-900 to-black "
    >
      <div className="mx-auto max-w-7xl text-center ">
        <h2 className="font-display text-3xl tracking-tight text-[#2BB849] underline underline-offset-8 sm:text-4xl">
          Don&apos;t let your competitors get ahead
        </h2>
        <p className="mt-4 text-lg tracking-tight text-gray-100">
          Join the growing list of satisfied N&N Media clients who are crushing
          it on Instagram.
        </p>
        <p className="mt-4 text-lg tracking-tight text-gray-100 mb-10">
          Don&apos;t just take our word for it, see what our clients have to
          say!
        </p>
        <Link href="" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          Contact Us
        </Link>
      </div>

      <div className="">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6  lg:max-w-7xl lg:px-8">
          <div className="mt-8 grid auto-rows-auto grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
            {clients.map((client) => (
              <div key={client.id} className="flex flex-col">
                <div className="relative mb-auto">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      src={client.imageSrc}
                      alt={client.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="relative mt-4 text-center">
                    <h3 className="text-2xl font-medium text-[#2BB849]">
                      {client.name}
                    </h3>
                    <h3 className="text-lg font-medium text-gray-50">
                      {client.description}
                    </h3>
                    <h3 className="text-lg font-medium text-gray-50">
                      {client.tag}
                    </h3>
                    <p className="mt-1 text-sm text-gray-300">{client.quote}</p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={client.href}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    i
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" py-24 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base font-semibold leading-7 text-[#2BB849]">
              LIMITED OFFER
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#2BB849] sm:text-4xl underline underline-offset-4">
              Trusted by businesses all around the globe!
            </h1>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-100 lg:max-w-none lg:grid-cols-2">
              <div>
              
                <p>Act fast – we&apos;re only accepting 5 clients per week!</p>
              </div>
              <div>
                <p>
                  At NN Media, we believe in putting our money where our mouth
                  is.
                </p>
                <p className="mt-8">
                  That&apos;s why we proudly offer a 100% satisfaction
                  guarantee, which means if you&apos;re not completely happy
                  with the content we provide, we&apos;ll make unlimited
                  revisions free of charge until it meets your expectations.
                </p>

                <p className="mt-8">
                  Your happiness and success are our main focus!
                </p>
              </div>
            </div>
            <div className="mt-10 flex">
            <Link href="" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Contact Us
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
