import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'next-i18next'
export function Faqs() {
    const { t } = useTranslation()

    const faqs = [
        {
            question: t('faq.question1'),
            answer: t('faq.answer1'),
        },
        {
            question: t('faq.question2'),
            answer: t('faq.answer2'),
        },
        {
            question: t('faq.question3'),
            answer: t('faq.answer3'),
        },
        {
            question: t('faq.question4'),
            answer: t('faq.answer4'),
        },
        {
            question: t('faq.question5'),
            answer: t('faq.answer5'),
        },
        {
            question: t('faq.question6'),
            answer: t('faq.answer6'),
        },
    ]
    return (
        <div
            className="bg-gradient-to-b from-black via-[#2BB849] to-green-800"
            id="faq"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl divide-y divide-white/10">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
                        {t('faq.title')}
                    </h2>
                    <dl className="mt-10 space-y-6 divide-y divide-white/10">
                        {faqs.map((faq) => (
                            <Disclosure
                                as="div"
                                key={faq.question}
                                className="pt-6"
                            >
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                                                <span className="text-base font-semibold leading-7">
                                                    {faq.question}
                                                </span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    {open ? (
                                                        <MinusSmallIcon
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    ) : (
                                                        <PlusSmallIcon
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel
                                            as="dd"
                                            className="mt-2 pr-12"
                                        >
                                            <p className="text-base leading-7 text-gray-100">
                                                {faq.answer}
                                            </p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
