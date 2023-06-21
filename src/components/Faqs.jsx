import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What services do you offer for Instagram marketing?',
      answer:
        'We offer a range of services including content creation, community management, influencer partnerships, advertising, and analytics.',
    },
    {
      question: 'How do you measure the success of an Instagram campaign?',
      answer:
        'We use a range of metrics to measure success, including engagement rates, reach, click-through rates, conversions, and overall ROI.',
    },
    {
      question:
        'How do you come up with content ideas for my Instagram account?',
      answer:
        'We conduct extensive research into your target audience, industry trends, and competitor activity to develop a content strategy that is tailored to your brand.',
    },
  ],
  [
    {
      question:
        'Can you guarantee an increase in followers and engagement on Instagram?',
      answer:
        "While we can't guarantee specific results, we use industry-proven tactics and strategies to increase followers and engagement on Instagram. Our focus is on delivering high-quality content and driving meaningful engagement that helps build a strong, loyal audience for your brand.",
    },
    {
      question: 'What can the e-guide teach me?',
      answer:
        'Our e-guide is here to help you boost your social media presence with easy-to-follow tips and practical advice. By following our recommendations, you can say goodbye to the hassle of searching for marketing agencies.',
    },
  ],
  [
    {
      question:
        'How involved do I need to be in the Instagram marketing process?',
      answer:
        "We work with each client individually to determine their level of involvement in the process. Some clients prefer to be heavily involved in content creation and strategy development, while others prefer to take a more hands-off approach. We are flexible and can adapt to each client's needs.",
    },
    {
      question:
        'How do you stay up to date with changes to the Instagram algorithm and best practices?',
      answer:
        'Our team stays on top of industry trends and updates by attending conferences, participating in webinars, and conducting our own research. We are constantly learning and adapting our strategies to ensure that we are delivering the most effective Instagram marketing services possible.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
