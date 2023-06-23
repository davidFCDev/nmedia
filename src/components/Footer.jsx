import Link from 'next/link'

import { Container } from '@/components/Container'
import Image from 'next/image'
import { NavLink } from '@/components/NavLink'
import logo from '../images/logos/nnmedia_logo.png'

export function Footer() {
    return (
        <footer className="bg-gray-900">
            <Container>
                <div className="py-16">
                    <nav className="mt-10 text-sm" aria-label="quick links">
                        <div className="-my-1 flex justify-center gap-x-6">
                            <NavLink href="#features">Features</NavLink>
                            <NavLink href="#projects">Projects</NavLink>
                            <NavLink href="#faq">FAQ</NavLink>
                        </div>
                    </nav>
                </div>
                <div className="flex items-center border-t border-green-300 py-10 ">
                    <p className="mt-6 text-sm text-green-100 sm:mt-0">
                        Copyright &copy; {new Date().getFullYear()} NNMedia. All
                        rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    )
}
