import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { useTranslation } from 'next-i18next'

function CheckIcon({ className }) {
    return (
        <svg
            aria-hidden="true"
            className={clsx(
                'h-6 w-6 flex-none fill-current stroke-current',
                className
            )}
        >
            <path
                d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                strokeWidth={0}
            />
            <circle
                cx={12}
                cy={12}
                r={8.25}
                fill="none"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function Plan({ name, price, description, href, features, featured = false }) {
    return (
        <section
            className={clsx(
                'flex flex-col rounded-3xl px-6 sm:px-8',
                featured
                    ? 'order-first bg-green-600 py-8 lg:order-none'
                    : 'border border-green-600 lg:py-8'
            )}
        >
            <h3 className="mt-5 font-display text-lg text-white">{name}</h3>
            <p
                className={clsx(
                    'mt-2 text-base',
                    featured ? 'text-white' : 'text-slate-400'
                )}
            >
                {description}
            </p>
            <p className="order-first font-display text-5xl font-light tracking-tight text-white">
                {price}
            </p>
            <ul
                role="list"
                className={clsx(
                    'order-last mt-10 flex flex-col gap-y-3 text-sm',
                    featured ? 'text-white' : 'text-slate-200'
                )}
            >
                {features.map((feature) => (
                    <li key={feature} className="flex">
                        <CheckIcon
                            className={
                                featured ? 'text-white' : 'text-slate-400'
                            }
                        />
                        <span className="ml-4">{feature}</span>
                    </li>
                ))}
            </ul>
            <Button
                href={href}
                variant={featured ? 'solid' : 'outline'}
                color="white"
                className="mt-8"
                aria-label={`Get started with the ${name} plan for ${price}`}
            >
                Get started
            </Button>
        </section>
    )
}

export function Pricing() {
    const { t } = useTranslation()
    return (
        <section
            id="pricing"
            aria-label="Pricing"
            className="bg-slate-900 py-20 sm:py-32"
        >
            <Container>
                <div className="md:text-center">
                    <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                        <span className="relative whitespace-nowrap">
                            {t('pricing.title')}
                        </span>{' '}
                    </h2>
                </div>
                <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
                    <Plan
                        name={t('pricing.sparkePackage.title')}
                        href="/#contacts"
                        features={[
                            t('pricing.sparkePackage.feature1'),
                            t('pricing.sparkePackage.feature2'),
                        ]}
                    />
                    <Plan
                        featured
                        name={t('pricing.radiancePackage.title')}
                        href="/#contacts"
                        features={[
                            t('pricing.radiancePackage.feature1'),
                            t('pricing.radiancePackage.feature2'),
                            t('pricing.radiancePackage.feature3'),
                            t('pricing.radiancePackage.feature4'),
                        ]}
                    />
                    <Plan
                        name={t('pricing.brilliancePackage.title')}
                        href="/#contacts"
                        features={[
                            t('pricing.brilliancePackage.feature1'),
                            t('pricing.brilliancePackage.feature2'),
                            t('pricing.brilliancePackage.feature3'),
                            t('pricing.brilliancePackage.feature4'),
                        ]}
                    />
                </div>
            </Container>
        </section>
    )
}
