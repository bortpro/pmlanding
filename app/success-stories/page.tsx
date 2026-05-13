'use client';

import React from 'react';
import { openDemoModal } from '../../components/layout/demoModal';
import './page.css';

/* ─────────────────────────────────────────────────────────────────────────────
 * What design partners get
 * ────────────────────────────────────────────────────────────────────────── */

const PARTNER_BENEFITS = [
    {
        icon: '💰',
        title: 'Founding member pricing, locked for life',
        description: '25% off list price for as long as you stay. No renegotiations, no sunset clauses.',
    },
    {
        icon: '🗺️',
        title: 'Direct input on the roadmap',
        description: 'Monthly 1:1 with our product team. Your use cases shape the product, not the other way around.',
    },
    {
        icon: '🤝',
        title: 'White-glove onboarding',
        description: 'We set up your Slack integration, CRM sync, and first digest alongside you. Live in under a week.',
    },
    {
        icon: '🧪',
        title: 'Early access to Climber',
        description: 'Be the first to test our autonomous product intelligence agent, before general availability.',
    },
];

/* ─────────────────────────────────────────────────────────────────────────────
 * Who we're looking for
 * ────────────────────────────────────────────────────────────────────────── */

const IDEAL_PARTNERS = [
    'Series A–C B2B SaaS with an active CS or sales team',
    'Using Gong, HubSpot, or Salesforce (or willing to)',
    'CS, product, or sales leader who owns the feedback-to-product motion',
    'Frustrated by the gap between what customers say and what product builds',
    'Willing to give candid feedback every 2 weeks',
];

/* ─────────────────────────────────────────────────────────────────────────────
 * Metrics — real milestones, not fake percentages
 * ────────────────────────────────────────────────────────────────────────── */

const MILESTONES = [
    { value: '40+', label: 'CS, product, and sales leaders interviewed in discovery' },
    { value: '5', label: 'Design partner spots remaining' },
    { value: '<7', label: 'Days from signup to first intelligence digest' },
];

/* ═══════════════════════════════════════════════════════════════════════════
 * PARTNERS PAGE COMPONENT
 * ═══════════════════════════════════════════════════════════════════════════ */

export default function PartnersPage() {
    return (
        <main className="stories-page">
            {/* ── SECTION 1: HERO ──────────────────────────────────────────── */}
            <section className="stories-hero">
                <div className="stories-hero__inner container">
                    <h1 className="stories-hero__title text-display">
                        Help shape the product intelligence layer for revenue teams
                    </h1>
                    <p className="stories-hero__sub text-body-lg">
                        We&apos;re building ProductMountain with a small cohort of CS, product, and
                        sales leaders. If you&apos;re dealing with the feedback-to-roadmap problem,
                        we want to build this with you.
                    </p>
                    <button
                        type="button"
                        onClick={openDemoModal}
                        className="btn btn-primary"
                    >
                        Become a Design Partner
                    </button>
                </div>
            </section>

            {/* ── SECTION 2: WHAT YOU GET ───────────────────────────────────── */}
            <section className="stories-cards" id="partner-benefits">
                <div className="stories-cards__inner container">
                    <h2 className="stories-metrics__title text-h1" style={{ marginBottom: '3rem', textAlign: 'center' }}>
                        What design partners get
                    </h2>
                    <div className="stories-cards__grid">
                        {PARTNER_BENEFITS.map((benefit) => (
                            <div className="story-card" key={benefit.title} style={{ borderStyle: 'solid' }}>
                                <span style={{ fontSize: '2rem', marginBottom: '0.75rem', display: 'block' }}>
                                    {benefit.icon}
                                </span>
                                <h3 className="story-card__result">{benefit.title}</h3>
                                <p className="story-card__descriptor" style={{ marginTop: '0.5rem' }}>
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 3: WHO WE'RE LOOKING FOR ──────────────────────────── */}
            <section className="stories-partner">
                <div className="stories-partner__inner container">
                    <h2 className="stories-partner__title text-h1">
                        Who we&apos;re looking for
                    </h2>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        maxWidth: '640px',
                        margin: '2rem auto',
                        textAlign: 'left',
                    }}>
                        {IDEAL_PARTNERS.map((item) => (
                            <li
                                key={item}
                                style={{
                                    padding: '0.75rem 0',
                                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                                    color: 'rgba(255,255,255,0.85)',
                                    fontSize: '1.1rem',
                                    lineHeight: '1.6',
                                }}
                            >
                                ✓ {item}
                            </li>
                        ))}
                    </ul>
                    <button
                        type="button"
                        onClick={openDemoModal}
                        className="btn btn-primary btn--inverted"
                        style={{ marginTop: '2rem' }}
                    >
                        Apply to join
                    </button>
                </div>
            </section>

            {/* ── SECTION 4: MILESTONES ──────────────────────────────────────── */}
            <section className="stories-metrics">
                <div className="stories-metrics__inner container">
                    <h2 className="stories-metrics__title text-h1">Where we are today</h2>
                    <div className="stories-metrics__grid">
                        {MILESTONES.map((m, i) => (
                            <div className="metric-card" key={i}>
                                <span className="metric-card__value">{m.value}</span>
                                <p className="metric-card__label">{m.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 5: CTA BAND ──────────────────────────────────────── */}
            <section className="stories-cta">
                <div className="stories-cta__inner container">
                    <h2 className="stories-cta__title text-h1">
                        Ready to help shape the future of product intelligence?
                    </h2>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button
                            type="button"
                            onClick={openDemoModal}
                            className="btn btn-primary"
                        >
                            Schedule a call
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
