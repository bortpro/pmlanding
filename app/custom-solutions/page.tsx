'use client';

import React from 'react';
import { openDemoModal } from '../../components/layout/demoModal';
import './page.css';

/* ─────────────────────────────────────────────────────────────────────────────
 * Icons
 * ────────────────────────────────────────────────────────────────────────── */

const IconIntegrations: React.FC = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M10 3H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 3h-5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 12H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 21a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconTranscription: React.FC = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 19v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconRoadmap: React.FC = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 6h13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M3 18h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth="1.6" fill="var(--surface)" />
        <circle cx="15" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" fill="var(--surface)" />
    </svg>
);

const IconSpark: React.FC = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
);

/* ─────────────────────────────────────────────────────────────────────────────
 * Data
 * ────────────────────────────────────────────────────────────────────────── */

type Solution = {
    title: string;
    body: React.ReactNode;
    icon: React.FC;
};

const SOLUTIONS: Solution[] = [
    {
        title: 'Integrations',
        icon: IconIntegrations,
        body: (
            <>
                We can easily integrate with your existing call transcription tools, messaging
                platforms, CRMs, and project management software. Using something we haven&apos;t
                mentioned? We&apos;re happy to build custom integrations for any stack.
            </>
        ),
    },
    {
        title: 'Call Transcription',
        icon: IconTranscription,
        body: (
            <>
                We&apos;re working on building our own platform for transcribing customer calls.
                Help us design your ideal transcription platform.
            </>
        ),
    },
    {
        title: 'Product Roadmapping',
        icon: IconRoadmap,
        body: (
            <>
                Roadmapping is coming soon. Keep your product prioritization in a single source of
                truth, keep your teams updated with the latest info, and easily integrate feedback
                into your planning process.
            </>
        ),
    },
    {
        title: 'Something else?',
        icon: IconSpark,
        body: (
            <>
                Let us know and we&apos;re happy to work with you on a custom solution tailored to
                your team.
            </>
        ),
    },
];

/* ═══════════════════════════════════════════════════════════════════════════
 * PAGE
 * ═══════════════════════════════════════════════════════════════════════════ */

export default function CustomSolutionsPage() {
    return (
        <main className="custom-page">

            {/* ── HERO ─────────────────────────────────────────────────────── */}
            <section className="custom-hero">
                <div className="custom-hero__inner container">
                    <span className="custom-hero__eyebrow">Custom Solutions</span>
                    <h1 className="custom-hero__title">
                        Built for the way <em>your</em> team works.
                    </h1>
                    <p className="custom-hero__sub">
                        We&apos;re early and open to building custom solutions to fit your specific
                        needs. We&apos;re growing to be an end-to-end solution for the customer
                        product feedback loop, and will add things over time like call
                        transcription, product roadmapping, and more.
                    </p>
                    <div className="custom-hero__cta">
                        <button
                            type="button"
                            onClick={openDemoModal}
                            className="btn btn-accent"
                        >
                            Book a demo
                        </button>
                        <a
                            href="mailto:hello@productmountain.com"
                            className="btn btn-secondary"
                        >
                            Email us
                        </a>
                    </div>
                </div>
            </section>

            {/* ── SOLUTIONS GRID ───────────────────────────────────────────── */}
            <section className="custom-grid-section">
                <div className="custom-grid-section__inner container">
                    <div className="custom-grid">
                        {SOLUTIONS.map((s) => {
                            const Icon = s.icon;
                            return (
                                <div key={s.title} className="custom-card">
                                    <div className="custom-card__icon">
                                        <Icon />
                                    </div>
                                    <h3 className="custom-card__title">{s.title}</h3>
                                    <p className="custom-card__body">{s.body}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── CLOSING ──────────────────────────────────────────────────── */}
            <section className="custom-closing">
                <div className="custom-closing__inner container">
                    <div className="custom-closing__card">
                        <p className="custom-closing__text">
                            Product management looks different at every company. We&apos;re built
                            to ensure your team can maximize their insights without needing to add
                            new processes into their workflows, so they can focus on building and
                            delivering value to your users.
                        </p>
                        <button
                            type="button"
                            onClick={openDemoModal}
                            className="btn btn-accent custom-closing__cta"
                        >
                            Let&apos;s build together
                        </button>
                    </div>
                </div>
            </section>

        </main>
    );
}
