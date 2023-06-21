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
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              href="https://twitter.com"
              className="group"
              aria-label="TaxPal on Twitter"
            >
          
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} NNMedia. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
