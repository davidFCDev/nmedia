import { useTranslation } from 'next-i18next'

export function SecondaryFeatures() {
    const { t } = useTranslation()
    const cards = [
        {
            name: t('service1'),
            description: t('service1Desc'),
        },
        {
            name: t('service2'),
            description: t('service2Desc'),
        },
        {
            name: t('service3'),
            description: t('service3Desc'),
        },
    ]
    return (
        <div
            className="overflow-hidden bg-gradient-to-b from-[#1E2835] to-black py-24 sm:py-32"
            id="services"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        {t('services')}
                    </h2>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                    {cards.map((card) => (
                        <div
                            key={card.name}
                            className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
                        >
                            <div className="text-base leading-7">
                                <h3 className="font-semibold text-white">
                                    {card.name}
                                </h3>
                                <p className="mt-2 text-gray-300 ">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
