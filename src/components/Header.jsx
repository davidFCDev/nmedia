import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'
import { HomeIcon } from '@heroicons/react/20/solid'
import { useTranslation } from 'next-i18next'
function MobileNavLink({ href, children }) {
    return (
        <Popover.Button as={Link} href={href} className="block w-full p-2">
            {children}
        </Popover.Button>
    )
}

function MobileNavIcon({ open }) {
    return (
        <svg
            aria-hidden="true"
            className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
            fill="none"
            strokeWidth={2}
            strokeLinecap="round"
        >
            <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx(
                    'origin-center transition',
                    open && 'scale-90 opacity-0'
                )}
            />
            <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx(
                    'origin-center transition',
                    !open && 'scale-90 opacity-0'
                )}
            />
        </svg>
    )
}

function MobileNavigation() {
    const { t } = useTranslation()
    return (
        <Popover>
            <Popover.Button
                className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
                aria-label="Toggle Navigation"
            >
                {({ open }) => <MobileNavIcon open={open} />}
            </Popover.Button>
            <Transition.Root>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        as="div"
                        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
                    >
                        <MobileNavLink href="#features">
                            {t('services')}
                        </MobileNavLink>
                        <MobileNavLink href="#projects">
                            {t('projects')}
                        </MobileNavLink>
                        <MobileNavLink href="#pricing">
                            {t('prices')}
                        </MobileNavLink>
                        <hr className="m-2 border-slate-300/40" />
                        <MobileNavLink href="#faq">FAQ</MobileNavLink>
                    </Popover.Panel>
                </Transition.Child>
            </Transition.Root>
        </Popover>
    )
}

export function Header() {
    const { t } = useTranslation()

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-t from-gray-950 to-gray-800 py-10">
            <Container>
                <nav className="relative z-50 flex justify-between">
                    <div className="flex items-center md:gap-x-12">
                        <Link href="#" aria-label="Home">
                            <HomeIcon className="h-5 w-5 text-white" />
                        </Link>
                        <div className="hidden text-white md:flex md:gap-x-6">
                            <NavLink href="#services" className="">
                                {t('services')}
                            </NavLink>
                            <NavLink href="#projects">{t('projects')}</NavLink>
                            <NavLink href="#pricing">{t('prices')}</NavLink>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-5 md:gap-x-8">
                        <div className="hidden md:block">
                            <NavLink href="#faq">FAQ</NavLink>
                        </div>
                        <Link
                            scroll={false}
                            href="#contacts"
                            className="text-gray-100 hover:text-gray-300"
                        >
                            <span>
                                {t('getStarted')}{' '}
                                <span className="hidden lg:inline">
                                    {t('today')}
                                </span>
                            </span>
                        </Link>
                        <div className="-mr-1 md:hidden">
                            <MobileNavigation />
                        </div>
                    </div>
                </nav>
            </Container>
        </header>
    )
}
