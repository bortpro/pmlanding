'use client';

import React from 'react';
import { openDemoModal } from '../../components/layout/demoModal';
import './page.css';

/* ─────────────────────────────────────────────────────────────────────────────
 * Feature lists
 * ────────────────────────────────────────────────────────────────────────── */

const STARTER_FEATURES = [
    'AI-powered signal extraction',
    'Issue monitoring',
    'Weekly insights email',
    'Custom taxonomies',
    'Up to 3 seats',
];

const PRO_FEATURES = [
    'Everything in Starter',
    'Gong transcript monitoring',
    'Custom alerting & auto-monitoring',
    'CRM integrations (Salesforce, HubSpot)',
    'Slack & messaging app integrations',
    'Unlimited seats',
];

const ENTERPRISE_FEATURES = [
    'Everything in Climber Pro',
    'Custom integrations',
    'Multiple product layers',
    'Dedicated onboarding & support',
];

/* ─────────────────────────────────────────────────────────────────────────────
 * Sub-components
 * ────────────────────────────────────────────────────────────────────────── */

const CheckStarter: React.FC = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M3.5 8.5l3 3 6-6.5" stroke="var(--text-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CheckPro: React.FC = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M3.5 8.5l3 3 6-6.5" stroke="var(--forest)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CheckEnterprise: React.FC = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M3.5 8.5l3 3 6-6.5" stroke="var(--accent-2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * PRICING PAGE COMPONENT
 * ═══════════════════════════════════════════════════════════════════════════ */

export default function PricingPage() {
    const handleDemo = openDemoModal;

    return (
        <main className="pricing-page">

            {/* ── SECTION 1: HERO ──────────────────────────────────────────── */}
            <section className="price-hero">
                <div className="price-hero__inner container">
                    <h1 className="price-hero__title">
                        Simple pricing. Serious value.
                    </h1>
                    <p className="price-hero__sub">
                        Climber pays for itself the first time it catches a churn signal your team missed.
                    </p>
                </div>
            </section>

            {/* ── SECTION 2: PRICING CARDS ─────────────────────────────────── */}
            <section className="price-cards">
                <div className="price-cards__inner container">
                    <div className="price-cards__grid">

                        {/* Card 1: Climber Starter */}
                        <div className="price-card price-card--starter">
                            <h3 className="price-card__name">Climber Starter</h3>
                            <div className="price-card__price-block">
                                <div className="price-card__price">
                                    $400<span className="price-card__per">/mo</span>
                                </div>
                                <div className="price-card__billing">billed annually</div>
                                <div className="price-card__billing-alt">or $500/mo billed monthly</div>
                            </div>
                            <button
                                type="button"
                                onClick={handleDemo}
                                className="btn btn-secondary price-card__cta"
                            >
                                Book a demo
                            </button>
                            <ul className="price-card__features">
                                {STARTER_FEATURES.map((f) => (
                                    <li key={f}><CheckStarter /><span>{f}</span></li>
                                ))}
                            </ul>
                        </div>

                        {/* Card 2: Climber Pro */}
                        <div className="price-card price-card--pro">
                            <h3 className="price-card__name">Climber Pro</h3>
                            <div className="price-card__price-block">
                                <div className="price-card__price">
                                    $1,200<span className="price-card__per">/mo</span>
                                </div>
                                <div className="price-card__billing">billed annually</div>
                                <div className="price-card__billing-alt">or $1,500/mo billed monthly</div>
                            </div>
                            <button
                                type="button"
                                onClick={handleDemo}
                                className="btn btn-accent price-card__cta"
                            >
                                Book a demo
                            </button>
                            <ul className="price-card__features">
                                {PRO_FEATURES.map((f) => (
                                    <li key={f}><CheckPro /><span>{f}</span></li>
                                ))}
                            </ul>
                        </div>

                        {/* Card 3: Climber Enterprise */}
                        <div className="price-card price-card--enterprise">
                            <div className="price-card__enterprise-top">
                                <span className="price-card__badge">Custom</span>
                                <h3 className="price-card__name">Climber Enterprise</h3>
                            </div>
                            <div className="price-card__price-block">
                                <div className="price-card__price price-card__price--talk">Let&apos;s talk</div>
                            </div>
                            <a
                                href="mailto:hello@productmountain.com"
                                className="btn btn-secondary price-card__cta"
                            >
                                Contact us
                            </a>
                            <ul className="price-card__features">
                                {ENTERPRISE_FEATURES.map((f) => (
                                    <li key={f}><CheckEnterprise /><span>{f}</span></li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SECTION 3: CTA BAND ──────────────────────────────────────── */}
            <section className="price-cta">
                <div className="price-cta__inner container">
                    <h2 className="price-cta__title">
                        Ready to stop missing churn signals?
                    </h2>
                    <p className="price-cta__sub">
                        It takes 10 minutes to connect your call recording stack. The first insight pays for itself.
                    </p>
                    <button
                        type="button"
                        onClick={handleDemo}
                        className="btn btn-accent"
                    >
                        Book a demo
                    </button>
                </div>
            </section>

        </main>
    );
}
