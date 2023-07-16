import Image from 'next/image'

import Link from 'next/link'
import { useTranslation } from 'next-i18next'

export function CallToAction() {
    const { t } = useTranslation()

    const clients = [
        {
            id: 1,
            name: t('clients.nerone.name'),
            description: t('clients.nerone.occupation'),
            tag: t('clients.nerone.tag'),
            quote: `"${t('clients.nerone.testimonial')}"`,
            href: 'https://www.instagram.com/neronestudio/',
            hasVideo: true,
            imageSrc: 'https://www.youtube.com/embed/AnV4jEr5r3Q',
            imageAlt:
                'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        },
        {
            id: 2,
            name: t('clients.after.name'),
            description: t('clients.after.occupation'),
            tag: t('clients.after.tag'),
            quote: `"${t('clients.after.testimonial')}"`,
            href: 'https://www.instagram.com/after.the.store/',
            hasVideo: false,
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
            quote: '"Very punctual and creative, fully developed multiple projects following our brand values"',
            href: 'https://www.instagram.com/logoto_clothing/',
            hasVideo: true,
            imageSrc: 'https://www.youtube.com/embed/gLIWDpfqzRM',
            imageAlt:
                'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        },
        {
            id: 4,
            name: 'Shortened',
            hasVideo: true,
            href: '',

            imageSrc: 'https://www.youtube.com/embed/N0KiNuaP3cQ',
            imageAlt:
                'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        },
        {
            id: 5,
            name: 'Apeic Wristwraps',
            hasVideo: true,
            href: '',
            imageSrc: 'https://www.youtube.com/embed/DtlL3zBszPM',
            imageAlt:
                'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        },
        {
            id: 6,
            name: 'ADHD x DAVINCI CLUB HYPE AFTERVIDEO',
            hasVideo: true,
            href: '',
            imageSrc: 'https://www.youtube.com/embed/NA5dLs8B5m8',
            imageAlt:
                'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        },
        // More products...
    ]
    return (
        <section
            className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black "
            id="projects"
        >
            <div className="mx-auto max-w-7xl text-center ">
                <h2 className="font-display text-3xl tracking-tight text-[#2BB849] underline underline-offset-8 sm:text-4xl">
                    {t('testimonialsIntro')}
                </h2>
                <p className="mt-4 text-lg tracking-tight text-gray-100">
                    {t('testimonialsIntro2')}
                </p>
                <p className="mb-10 mt-4 text-lg tracking-tight text-gray-100">
                    {t('testimonialsIntro3')}
                </p>
                <Link
                    href="/#contact"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    {t('contactUs')}
                </Link>
            </div>

            <div>
                {/* Header */}
                <div className="py-24">
                    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                        <h1 className="text-center text-4xl font-bold tracking-tight text-[#2BB849] md:text-5xl">
                            {t('recentWork')}
                        </h1>
                    </div>
                </div>

                {/* Overlapping cards */}
                <div className="">
                    <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
                        <div className=" grid auto-rows-auto grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                            {clients.map((client) => (
                                <div key={client.id} className="flex flex-col">
                                    <div className="relative mb-auto">
                                        <div className="relative h-72 w-full overflow-hidden rounded-lg">
                                            {client.hasVideo ? (
                                                <iframe
                                                    width="425"
                                                    height="350"
                                                    src={client.imageSrc}
                                                    title={client.name}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen
                                                ></iframe>
                                            ) : (
                                                <img
                                                    src={client.imageSrc}
                                                    alt={client.imageAlt}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            )}
                                        </div>
                                        <div className="relative mt-4 text-center">
                                            <Link
                                                className="hover:cursor text-2xl font-medium text-[#2BB849]"
                                                href={client.href}
                                                target="_blank"
                                            >
                                                {client.name}
                                            </Link>
                                            <h3 className="text-lg font-medium text-gray-50">
                                                {client.description}
                                            </h3>
                                            <h3 className="text-lg font-medium text-gray-50">
                                                {client.tag}
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-300">
                                                {client.quote}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className=" py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto sm:text-center">
                        <h2 className="text-base font-semibold leading-7 text-green-600">
                            {t('satisfaction')}
                        </h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            {t('standBehind')}
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            {t('satisfactionGuarantee')}
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            {t('satisfactionGuarantee2')}
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            {t('satisfactionGuarantee3')}
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            {t('satisfactionGuarantee4')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
