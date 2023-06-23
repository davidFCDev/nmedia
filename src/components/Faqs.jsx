import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: 'What services do you offer for Instagram marketing?',
        answer: 'We offer a range of services including content creation, community management, influencer partnerships, advertising, and analytics.',
    },
    {
        question: 'How do you measure the success of an Instagram campaign?',
        answer: 'We use a range of metrics to measure success, including engagement rates, reach, click-through rates, conversions, and overall ROI.',
    },
    {
        question:
            'How do you come up with content ideas for my Instagram account?',
        answer: 'We conduct extensive research into your target audience, industry trends, and competitor activity to develop a content strategy that is tailored to your brand.',
    },
    {
        question:
            'Can you guarantee an increase in followers and engagement on Instagram?',
        answer: "While we can't guarantee specific results, we use industry-proven tactics and strategies to increase followers and engagement on Instagram. Our focus is on delivering high-quality content and driving meaningful engagement that helps build a strong, loyal audience for your brand.",
    },
    {
        question: 'What can the e-guide teach me?',
        answer: 'Our e-guide is here to help you boost your social media presence with easy-to-follow tips and practical advice. By following our recommendations, you can say goodbye to the hassle of searching for marketing agencies.',
    },
    {
        question:
            'How involved do I need to be in the Instagram marketing process?',
        answer: "We work with each client individually to determine their level of involvement in the process. Some clients prefer to be heavily involved in content creation and strategy development, while others prefer to take a more hands-off approach. We are flexible and can adapt to each client's needs.",
    },
    {
        question:
            'How do you stay up to date with changes to the Instagram algorithm and best practices?',
        answer: 'Our team stays on top of industry trends and updates by attending conferences, participating in webinars, and conducting our own research. We are constantly learning and adapting our strategies to ensure that we are delivering the most effective Instagram marketing services possible.',
    },
]

export function Faqs() {
    return (
        <div className="bg-gradient-to-b from-black via-[#2BB849] to-green-800">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl divide-y divide-white/10">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
                        Frequently asked questions
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
                                            <p className="text-base leading-7 text-gray-300">
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
