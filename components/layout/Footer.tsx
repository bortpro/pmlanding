'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { openDemoModal } from './demoModal';
import './Footer.css';

const MountainIcon: React.FC<{ size?: number }> = ({ size = 32 }) => (
    <Image
        src="/brand/logo-white.svg"
        alt="ProductMountain"
        width={size}
        height={size}
        style={{ width: 'auto', height: `${size}px` }}
        unoptimized
    />
);

type FooterLink = { label: string; href: string; external?: boolean; onClick?: () => void };

const PRODUCT_LINKS: FooterLink[] = [
    { label: 'How it works', href: '/#how-it-works' },
    { label: 'Pricing',      href: '/pricing' },
];

const COMPANY_LINKS: FooterLink[] = [
    { label: 'Resources',                    href: '/resources' },
    { label: 'hello@productmountain.com',    href: 'mailto:hello@productmountain.com' },
    { label: 'LinkedIn',                     href: 'https://www.linkedin.com/company/productmountain', external: true },
    { label: 'Book a demo',                  href: '#',                                                onClick: openDemoModal },
];

const FooterLink: React.FC<FooterLink> = ({ label, href, external, onClick }) => {
    if (onClick) {
        return (
            <button
                type="button"
                onClick={onClick}
                className="footer__link footer__link--button"
            >
                {label}
            </button>
        );
    }
    if (href.startsWith('mailto:') || external) {
        return (
            <a
                href={href}
                className="footer__link"
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
                {label}
            </a>
        );
    }
    return <Link href={href} className="footer__link">{label}</Link>;
};

export const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            {/* Topographic texture overlay */}
            <div className="footer__topo" aria-hidden="true" />

            <div className="footer__inner">
                {/* ─── Top Grid ──────────────────────────────────────────────── */}
                <div className="footer__grid">
                    {/* Brand column */}
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <MountainIcon />
                            <span className="footer__wordmark">ProductMountain</span>
                        </div>
                        <p className="footer__tagline">
                            The right signal, at the right time.
                        </p>
                        <p className="footer__copyright">
                            © {year} ProductMountain. All rights reserved.
                        </p>
                    </div>

                    {/* Product links */}
                    <div className="footer__col">
                        <h4 className="footer__col-title">Product</h4>
                        <ul className="footer__col-links">
                            {PRODUCT_LINKS.map((link) => (
                                <li key={link.href}>
                                    <FooterLink {...link} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company links */}
                    <div className="footer__col">
                        <h4 className="footer__col-title">Company</h4>
                        <ul className="footer__col-links">
                            {COMPANY_LINKS.map((link) => (
                                <li key={link.href}>
                                    <FooterLink {...link} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ─── Bottom Bar ────────────────────────────────────────────── */}
                <div className="footer__bottom">
                    <div className="footer__bottom-links">
                        <a href="/privacy" className="footer__bottom-link">Privacy Policy</a>
                        <span className="footer__bottom-sep">·</span>
                        <a href="/terms" className="footer__bottom-link">Terms</a>
                    </div>
                    <p className="footer__bottom-tagline">
                        Built by practitioners, for practitioners.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
