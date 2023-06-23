import Link from 'next/link'

export function NavLink({ href, children }) {
    return (
        <Link
            href={href}
            className="inline-block rounded-lg px-2 py-1 text-sm text-[#9EED1E] hover:bg-[#9EED1E] hover:text-black"
            scroll={false}
        >
            {children}
        </Link>
    )
}
