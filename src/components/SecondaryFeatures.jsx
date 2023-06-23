import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
} from '@heroicons/react/20/solid'
const features = [
    {
        name: 'Instagram strategy development',
        description: `Creating captivating Instagram content got you puzzled? <br/> Our tailored approach is designed to develop a <span class='text-[#8BDD59]'>unique strategy</span> for your business. With audience analysis, content themes, posting schedules, and engagement tactics, we provide a clear roadmap for Instagram success.`,
        icon: CloudArrowUpIcon,
    },

    {
        name: 'Stunning Instagram Content Creation',
        description: `Our professional content creation package is tailored for those who desire <span class='text-[#8BDD59]'>high-quality</span> visuals with minimal effort. We offer custom-designed images, videos, and graphics that perfectly match your brand and messaging. Elevate your content, engage your audience, and increase Instagram engagement.`,
        icon: LockClosedIcon,
    },

    {
        name: '24/7 Instagram Community Management',
        description: `Our comprehensive community management package is designed to take care of it all. We monitor comments and DMs, respond to inquiries, and engage with your followers authentically and promptly. With our service, you can build a loyal following, nurture strong relationships with your audience, and boost engagement on Instagram.`,
        icon: ArrowPathIcon,
    },
    {
        name: 'Instagram advertising',
        description: `Struggling to reach your target audience on Instagram? <span class='text-[#8BDD59]'>We have the solution.</span> Our targeted advertising package helps you: Create customized Instagram ads. Reach specific audiences based on demographics, interests, and behaviors. Drive conversions and boost revenue.`,
        icon: FingerPrintIcon,
    },
    {
        name: 'Analytics and optimization',
        description: `Our analytics and optimization package has you covered: Track <span class='text-[#8BDD59]'>key metrics</span> and analyze data. Receive data-driven recommendations for improvement. Understand your account's performance and make informed decisions for success. Experience faster results with detailed analytics and quick recommendations. It's easier and less effort for you as we handle your analytics and optimization needs.`,
        icon: Cog6ToothIcon,
    },
]

export function SecondaryFeatures() {
    return (
        <div
            className="bg-gradient-to-b from-gray-800  to-black py-16"
            id="features"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-7xl sm:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                        From Zero to Hero:
                    </p>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                        Let Us Help You Conquer New Heights
                    </p>
                </div>
            </div>

            <div className="mx-auto mt-16 max-w-7xl px-6  lg:px-8">
                <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9 ">
                            <dt className="inline font-semibold text-[#8BDD59]">
                                <feature.icon
                                    className="absolute left-1 top-1 h-5 w-5 text-[#2BB849]"
                                    aria-hidden="true"
                                />

                                {feature.name}
                            </dt>{' '}
                            <br></br>
                            <dd
                                className="inline"
                                dangerouslySetInnerHTML={{
                                    __html: feature.description,
                                }}
                            ></dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
