import { useEffect, useState } from 'react'
import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ArrowDownCircleIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

export function PrimaryFeatures() {
    const { t } = useTranslation()
    const features = [
        {
            name: '2 billion monthly active users',
            icon: CloudArrowUpIcon,
        },
        {
            name: '58% of consumers are more interested in a brand after seeing it in a story',
            icon: LockClosedIcon,
        },
        {
            name: ' 80% of users on the platform follow at least one business',
            icon: ArrowPathIcon,
        },
        {
            name: '83% of users on the platform learned about a new product from it',
            icon: FingerPrintIcon,
        },
    ]
    return (
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-black   to-gray-800">
            <div className="px-6 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                        {t('introduction')}
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                        {t('introduction2')} <br />
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            scroll={false}
                            href="#contacts"
                            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
