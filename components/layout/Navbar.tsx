'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { openDemoModal } from './demoModal';
import './Navbar.css';

const MountainIcon: React.FC<{ size?: number }> = ({ size = 28 }) => (
    <Image
        src="/brand/logo.svg"
        alt="ProductMountain"
        width={size}
        height={size}
        style={{ width: 'auto', height: `${size}px` }}
        priority
        unoptimized
    />
);

export const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const closeMobile = () => setMobileOpen(false);

    const anchor = (hash: string) => isHome ? hash : `/${hash}`;

    const NAV_LINKS = [
        { label: 'How it works', href: anchor('#how-it-works'), isAnchor: true },
        { label: 'Pricing',      href: '/pricing',               isAnchor: false },
        { label: 'Resources',    href: '/resources',             isAnchor: false },
    ];

    const isActive = (href: string, isAnchor: boolean) =>
        !isAnchor && pathname === href;

    return (
        <>
            <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
                <div className="navbar__inner">
                    {/* Logo */}
                    <Link href="/" className="navbar__logo" aria-label="ProductMountain home">
                        <MountainIcon />
                        <span className="navbar__wordmark">ProductMountain</span>
                    </Link>

                    {/* Desktop Nav */}
                    <ul className="navbar__links">
                        {NAV_LINKS.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className={`navbar__link ${isActive(link.href, link.isAnchor) ? 'navbar__link--active' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <button
                        type="button"
                        onClick={openDemoModal}
                        className="navbar__cta btn btn-accent"
                    >
                        Book a demo
                    </button>

                    {/* Mobile hamburger */}
                    <button
                        className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileOpen}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </nav>

            {/* Mobile overlay */}
            <div className={`navbar-mobile ${mobileOpen ? 'navbar-mobile--open' : ''}`}>
                <ul className="navbar-mobile__links">
                    {NAV_LINKS.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                className={`navbar-mobile__link ${isActive(link.href, link.isAnchor) ? 'navbar-mobile__link--active' : ''}`}
                                onClick={closeMobile}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button
                    type="button"
                    onClick={() => { closeMobile(); openDemoModal(); }}
                    className="navbar-mobile__cta btn btn-accent"
                >
                    Book a demo
                </button>
            </div>
        </>
    );
};

export default Navbar;
