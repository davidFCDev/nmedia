import { useEffect, useState } from 'react'
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ArrowDownCircleIcon
} from '@heroicons/react/24/outline'


export function PrimaryFeatures() {
 

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
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-black via-[#2BB849]  to-gray-800">
      <div className="px-6 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">
            Get ready to stand out in the digital crowd and make your social
            media soar to new heights.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            We specialize in creating captivating and professional content that
            sparks engagement, propels your brand, and leaves your audience
            craving more. <br />
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
      

      <div className=" py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">
              The Eye-Opening Statistics About Instagram You Need to See !
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-200">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#9EED1E]">
                      <feature.icon
                        className="h-6 w-6 text-black"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
