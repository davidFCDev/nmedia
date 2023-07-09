import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import Image from 'next/image'
import logo from '../images/logos/nnmedia_logo.png'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import { Contacts } from '../components/Contacts'
import { Toaster } from 'react-hot-toast'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
    return (
        <>
            <Head>
                <title>NNMedia - Revolutionize Your Instagram Presence</title>
                <meta
                    name="description"
                    content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
                />
            </Head>
            <main>
                <Toaster
                    toastOptions={{
                        position: 'top-left',
                        success: {
                            className:
                                'max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden',
                            style: {
                                background: '#176735',
                                color: '#fff',
                            },
                        },
                        error: {
                            className:
                                'max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden',
                            style: {
                                background: 'red',
                                color: 'white',
                            },
                        },
                    }}
                    containerStyle={{
                        top: 80,
                    }}
                />
                <Header />

                <div className="bg-gradient-to-t from-[#9EED1E] via-[#4D5552] via-70% to-gray-950 pb-8">
                    <Image
                        src={logo}
                        width={1000}
                        height={1000}
                        alt="logo"
                        className="mx-auto animate-fade-up drop-shadow-xl"
                    />
                </div>

                <Hero />
                <PrimaryFeatures />
                <SecondaryFeatures />
                <CallToAction />
                <Pricing />
                <Faqs />

                <Contacts />
            </main>
            <Footer />
        </>
    )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale)),
            // Will be passed to the page component as props
        },
    }
}
