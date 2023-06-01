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
    description:
      'Creating captivating Instagram content got you puzzled? Our tailored approach is designed to develop a unique strategy for your business. With audience analysis, content themes, posting schedules, and engagement tactics, we provide a clear roadmap for Instagram success.',
    icon: CloudArrowUpIcon,
  },

  {
    name: 'Stunning Instagram Content Creation',
    description:
      'Want to enhance your Instagram content? Our professional content creation package is tailored for those who desire high-quality visuals with minimal effort. We offer custom-designed images, videos, and graphics that perfectly match your brand and messaging. Elevate your content, engage your audience, and increase Instagram engagement.',
    icon: LockClosedIcon,
  },

  {
    name: '24/7 Instagram Community Management',
    description:
      'Our comprehensive community management package is designed to take care of it all. We monitor comments and DMs, respond to inquiries, and engage with your followers authentically and promptly. With our service, you can build a loyal following, nurture strong relationships with your audience, and boost engagement on Instagram.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Instagram advertising',
    description:
      'Struggling to reach your target audience on Instagram? We have the solution. Our targeted advertising package helps you: Create customized Instagram ads. Reach specific audiences based on demographics, interests, and behaviors. Drive conversions and boost revenue.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Analytics and optimization',
    description:
      'Our analytics and optimization package has you covered: Track key metrics and analyze data. Receive data-driven recommendations for improvement. Understand your account`s performance and make informed decisions for success. Experience faster results with detailed analytics and quick recommendations. It`s easier and less effort for you as we handle your analytics and optimization needs.',
    icon: Cog6ToothIcon,
  },
]

export function SecondaryFeatures() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl sm:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From Zero to Hero:
          </p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let Us Help You Conquer New Heights
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                  aria-hidden="true"
                />

                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
