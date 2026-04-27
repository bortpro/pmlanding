'use client';

import React, { useState } from 'react';
import { openDemoModal } from '../../components/layout/demoModal';
import './page.css';

/* ─────────────────────────────────────────────────────────────────────────────
 * Feature lists
 * ────────────────────────────────────────────────────────────────────────── */

const PRO_FEATURES = [
    'Unlimited Gong transcript monitoring',
    'AI-powered risk signal extraction',
    'Real-time Slack alerts',
    'Account-level sentiment scoring',
    'Weekly risk digest email',
    'Up to 50 monitored accounts',
];

const ENTERPRISE_FEATURES = [
    'Everything in Climber Pro',
    'Unlimited monitored accounts',
    'Multi-workspace Gong support',
    'Custom Slack channel routing',
    'CRM integration (Salesforce, HubSpot)',
    'Dedicated onboarding & support',
    'SOC 2 Type II (coming Q3 2026)',
];

/* ─────────────────────────────────────────────────────────────────────────────
 * FAQ data
 * ────────────────────────────────────────────────────────────────────────── */

const FAQS = [
    {
        q: 'What do I need to get started?',
        a: 'A Gong workspace and a Slack workspace. We handle the rest — setup takes under 10 minutes.',
    },
    {
        q: 'How does Climber access my Gong data?',
        a: "You grant Climber read-only access to your Gong transcripts via Gong's API. We never record calls or access audio — only transcripts.",
    },
    {
        q: 'What if I have more than 50 accounts?',
        a: "The Enterprise plan supports unlimited accounts. Book a call and we'll scope it for your team.",
    },
    {
        q: 'Is my data secure?',
        a: "All data is encrypted in transit and at rest. We're pursuing SOC 2 Type II certification, targeted for Q3 2026. We can provide our security questionnaire on request.",
    },
    {
        q: 'Can I cancel anytime?',
        a: 'Monthly plans can be cancelled anytime. Annual plans include a 30-day money-back guarantee.',
    },
];

/* ─────────────────────────────────────────────────────────────────────────────
 * Sub-components
 * ────────────────────────────────────────────────────────────────────────── */

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

const FaqItem: React.FC<{
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}> = ({ question, answer, isOpen, onToggle }) => (
    <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
        <button className="faq__question" onClick={onToggle} aria-expanded={isOpen}>
            <span>{question}</span>
            <svg className="faq__chevron" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
        <div className="faq__answer">
            <p>{answer}</p>
        </div>
    </div>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * PRICING PAGE COMPONENT
 * ═══════════════════════════════════════════════════════════════════════════ */

export default function PricingPage() {
    const handleDemo = openDemoModal;
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

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

                        {/* Card 1: Climber Pro */}
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

                        {/* Card 2: Climber Enterprise */}
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

            {/* ── SECTION 3: FAQ ───────────────────────────────────────────── */}
            <section className="faq" id="faq">
                <div className="faq__inner container">
                    <h2 className="faq__title">Questions</h2>
                    <div className="faq__list">
                        {FAQS.map((faq, i) => (
                            <FaqItem
                                key={i}
                                question={faq.q}
                                answer={faq.a}
                                isOpen={openFaq === i}
                                onToggle={() => toggleFaq(i)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 4: CTA BAND ──────────────────────────────────────── */}
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
