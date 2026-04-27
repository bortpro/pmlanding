'use client';

import React from 'react';
import { openDemoModal } from '../components/layout/demoModal';
import './page.css';

/* ─────────────────────────────────────────────────────────────────────────────
 * Inline SVG components — keeps the page self-contained
 * ────────────────────────────────────────────────────────────────────────── */

const MountainIcon: React.FC<{ fill?: string; size?: number; className?: string }> = ({
    fill = 'var(--color-primary)',
    size = 48,
    className,
}) => (
    <svg
        className={className}
        viewBox="0 0 48 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={(size * 32) / 48}
        aria-hidden="true"
    >
        <polygon points="8,28 20,8 32,28" fill={fill} />
        <polygon points="22,28 34,4 46,28" fill={fill} />
    </svg>
);

const MockSlackCard = () => (
    <div className="hero__slack-card" aria-hidden="true">
        {/* Risk badge */}
        <div className="slack-card__risk-row">
            <span className="badge badge-risk-high">Revenue Risk</span>
        </div>

        {/* Account name */}
        <p className="slack-card__account">Acme Corp — $85K ARR</p>

        {/* Alert message */}
        <p className="slack-card__message">
            Yesterday&apos;s QBR: VP of Engineering said they&apos;re &ldquo;evaluating alternatives for Q3.&rdquo; Sentiment 0.3/1.0. Renewal in 60 days.
        </p>

        {/* Context block */}
        <div className="slack-card__context">
            <div className="slack-card__risk-factors">
                <div className="slack-card__risk-factor">
                    <span className="slack-card__risk-dot slack-card__risk-dot--high" />
                    Competitor mention (3x this quarter)
                </div>
                <div className="slack-card__risk-factor">
                    <span className="slack-card__risk-dot slack-card__risk-dot--med" />
                    Support escalations up 40%
                </div>
                <div className="slack-card__risk-factor">
                    <span className="slack-card__risk-dot slack-card__risk-dot--med" />
                    Sentiment trending down
                </div>
            </div>
        </div>

        {/* Recommended action */}
        <p className="slack-card__action-label">Recommended action</p>
        <p className="slack-card__action-text">Schedule executive check-in before end of week</p>

        {/* Link */}
        <a className="slack-card__link" href="#alex" style={{ display: 'block', marginTop: '12px' }}>View full account context →</a>
    </div>
);

const MockAlertCard = () => (
    <div className="mock-demo mock-alert" aria-hidden="true" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: '16px 20px', borderRadius: '0px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '12px' }}>
            <div style={{ width: '16px', height: '16px', background: 'var(--color-primary)', borderRadius: '0px' }} />
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Automated Alert</span>
            <span style={{ fontSize: '11px', color: 'var(--color-muted)', marginLeft: 'auto' }}>Just now</span>
        </div>
        <p style={{ fontSize: '14px', color: 'var(--color-text-primary)', margin: '0 0 12px 0', fontWeight: 600 }}>High-Impact Request Detected</p>
        <div style={{ background: 'var(--color-white)', borderLeft: '3px solid var(--color-accent)', padding: '12px', borderRadius: '0px', border: '1px solid var(--color-border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', fontWeight: 600 }}>SSO Integration</span>
                <span style={{ fontSize: '12px', color: 'var(--color-success)', fontWeight: 700 }}>$120k ARR</span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>Call transcript: "We cannot move forward with renewal without SAML/SSO compliance."</p>
        </div>
    </div>
);

const MockInsightDashboard = () => (
    <div className="mock-demo mock-insight" aria-hidden="true" style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '0px' }}>
        <div style={{ background: 'var(--color-surface)', padding: '10px 16px', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 600, color: 'var(--color-muted)', textTransform: 'uppercase' }}>
            <span>Theme</span>
            <span>Priority Score</span>
        </div>
        <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-primary)' }}>Bulk CSV Export</div>
                <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>12 Accounts tracking</div>
            </div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-primary)' }}>84</div>
        </div>
        <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(37,99,235,0.03)' }}>
            <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    Dark Mode <span style={{ background: 'rgba(220,38,38,0.1)', color: '#DC2626', padding: '2px 6px', fontSize: '10px' }}>-2 Ranks</span>
                </div>
                <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>4 Accounts tracking</div>
            </div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-secondary)' }}>41</div>
        </div>
    </div>
);

const MockRoadmapSync = () => (
    <div className="mock-demo mock-roadmap" aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--color-border)', border: '1px solid var(--color-border)' }}>
        <div style={{ background: 'var(--color-white)', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <div style={{ width: '24px', height: '24px', background: '#0052CC', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, borderRadius: '0px' }}>J</div>
            <div>
                <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', textTransform: 'uppercase', marginBottom: '4px', fontWeight: 600 }}>Jira Issue</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>PLAT-841: API Rate Limiting</div>
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                    <span style={{ background: '#E2E8F0', padding: '2px 6px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>IN PROGRESS</span>
                </div>
            </div>
        </div>
        <div style={{ background: 'var(--color-surface)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '24px', height: '24px', background: '#00A1E0', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, borderRadius: '0px' }}>S</div>
            <div>
                <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Synced to <strong style={{color: 'var(--color-text-primary)'}}>3 Salesforce Opportunities</strong></div>
                <div style={{ fontSize: '12px', color: 'var(--color-success)', fontWeight: 600, marginTop: '2px' }}>Pipeline Impact: $420,000</div>
            </div>
        </div>
    </div>
);

/* ─────────────────────────────────────────────────────────────────────────────
 * Hero terrain illustration — layered mountain ridgelines (SVG)
 * ────────────────────────────────────────────────────────────────────────── */

const HeroDataPipeline = () => (
    <div className="hero__pipeline" aria-hidden="true" style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '0px', display: 'flex', height: '360px', boxShadow: '0 12px 48px rgba(15,31,61,0.08)' }}>
        {/* Left Col: Live Ingestion Stream */}
        <div style={{ flex: '1', borderRight: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: '#F8FAFC', padding: '16px', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', background: 'var(--color-success)', borderRadius: '0px' }} />
                <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Live Signals</span>
            </div>
            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '20px', overflow: 'hidden' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ width: '28px', height: '28px', background: '#E2E8F0', borderRadius: '0px', flexShrink: 0 }} />
                    <div>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-primary)' }}>Pied Piper <span style={{ color: 'var(--color-muted)', fontWeight: 400, fontSize: '11px' }}>Slack</span></div>
                        <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginTop: '4px', lineHeight: 1.5 }}>/feedback They are actively evaluating us against competitors but need deeper Analytics APIs.</div>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', opacity: 0.6 }}>
                    <div style={{ width: '28px', height: '28px', background: '#E2E8F0', borderRadius: '0px', flexShrink: 0 }} />
                    <div>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-primary)' }}>Hooli <span style={{ color: 'var(--color-muted)', fontWeight: 400, fontSize: '11px' }}>Zendesk</span></div>
                        <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginTop: '4px', lineHeight: 1.5 }}>Ticket escalated: "How do we export usage reports for the whole org?"</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Col: Prioritized Intelligence Hub */}
        <div style={{ flex: '1.2', display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: 'var(--color-primary)', color: 'white', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: 600 }}>Prioritized Roadmap</span>
                <span style={{ fontSize: '11px', background: 'rgba(255,255,255,0.2)', padding: '2px 6px' }}>ARR Value</span>
            </div>
            <div style={{ padding: '20px', flex: 1, background: 'var(--color-surface)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                
                {/* Active Cluster */}
                <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-primary)', padding: '16px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: -10, left: -10, width: '24px', height: '24px', background: 'var(--color-white)', border: '1px solid var(--color-primary)', borderRadius: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: '12px', height: '12px', background: 'var(--color-primary)' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <div style={{ fontSize: '11px', color: 'var(--color-primary)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>Rank 1 · AI Clustered Theme</div>
                            <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-text-primary)' }}>Advanced Analytics API</div>
                            <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>43 Accounts tracking · Including <strong>Pied Piper</strong></div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-success)' }}>$2.4M</div>
                            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>Pipeline at Risk</div>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
                    <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', padding: '12px 16px', display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>2. Enterprise SSO</span>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-primary)' }}>$850K</span>
                    </div>
                    <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', padding: '12px 16px', display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>3. Bulk Export Sync</span>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-primary)' }}>$420K</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

/* ─────────────────────────────────────────────────────────────────────────────
 * Placeholder integration logos — TODO: replace with real logos
 * ────────────────────────────────────────────────────────────────────────── */

const INTEGRATION_LIST = [
    {
        name: 'Gong',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8 M8 12h8" />
            </svg>
        )
    },
    {
        name: 'Granola',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 9c0-3 2-6 7-6s7 3 7 6c0 4-3 7-7 7s-7-3-7-7z" />
                <path d="M9 21l3-5 3 5" />
            </svg>
        )
    },
    {
        name: 'HubSpot',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 8v-4 M12 16v4 M8 12h-4 M16 12h4" />
            </svg>
        )
    },
    {
        name: 'Jira',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 12l10 10 10-10L12 2z" />
            </svg>
        )
    },
    {
        name: 'Slack',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 10h12 M6 14h12 M10 6v12 M14 6v12" />
            </svg>
        )
    },
    {
        name: 'Salesforce',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
        )
    }
];

const IntegrationGrid = () => (
    <>
        {INTEGRATION_LIST.map((item) => (
            <div key={item.name} className="integration__logo">
                {item.icon}
                <span>{item.name}</span>
            </div>
        ))}
    </>
);

const MockTaxonomy = () => (
    <div className="mock-demo mock-taxonomy" aria-hidden="true" style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '0px', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: '10px' }}>
            <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Issue Taxonomy</span>
            <span style={{ fontSize: '10px', color: 'var(--color-text-secondary)', background: 'var(--color-surface)', padding: '2px 6px', fontWeight: 600 }}>YOUR PRODUCT</span>
        </div>
        {[
            { tag: 'Analytics · Reporting', route: '→ Insights team', tone: '#2563EB' },
            { tag: 'Integrations · API',    route: '→ Platform team', tone: '#0EA572' },
            { tag: 'Auth · SSO',            route: '→ Security pod',  tone: '#7C3AED' },
        ].map((row) => (
            <div key={row.tag} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: row.tone, flexShrink: 0 }} />
                <span style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>{row.tag}</span>
                <span style={{ color: 'var(--color-text-secondary)', marginLeft: 'auto' }}>{row.route}</span>
            </div>
        ))}
    </div>
);

/* ─────────────────────────────────────────────────────────────────────────────
 * Feature card data
 * ────────────────────────────────────────────────────────────────────────── */

const FEATURES = [
    {
        visual: <MockAlertCard />,
        title: 'Capture',
        body: 'Slack /feedback command. Call transcripts from Gong, Granola, and other tools monitored automatically. CRM data synced. Two fields, thirty seconds — no new app for anyone to learn.',
    },
    {
        visual: <MockInsightDashboard />,
        title: 'Intelligence',
        body: 'Understands the job to be done behind every request, not just the surface feature ask. ARR and renewal context attached to every signal. Manual ranking adjustments available when you know something the algorithm doesn\'t.',
    },
    {
        visual: <MockTaxonomy />,
        title: 'Customization',
        body: 'Built around your unique product landscape. Custom issue taxonomies, product areas, and routing rules ensure feedback gets organized and sent to the right team automatically.',
    },
    {
        visual: <MockRoadmapSync />,
        title: 'Visibility',
        body: 'CS knows where every request stands. Product has a decision log with reasons. Leadership sees the full revenue picture. Everyone operates on the same signal.',
    },
];

/* ─────────────────────────────────────────────────────────────────────────────
 * How It Works steps
 * ────────────────────────────────────────────────────────────────────────── */

const IconConnect = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M10 4v6M18 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 10h14v4a7 7 0 01-14 0v-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14 21v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const IconAnalyze = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3l2.2 7.8L24 13l-7.8 2.2L14 23l-2.2-7.8L4 13l7.8-2.2L14 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M22 18.5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
);

const IconAlert = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4a7 7 0 00-7 7v5l-2 3h18l-2-3v-5a7 7 0 00-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.5 20a2.5 2.5 0 005 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 4V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const HIW_STEPS = [
    {
        icon: <IconConnect />,
        label: 'Ingest',
        title: 'Every call, automatically',
        description: "Connect your call recording tools — Gong, Granola, or upload transcripts manually. Climber reads every transcript the moment it's available, no configuration per call.",
        stepNum: '01',
        stepClass: 'how-it-works__step--1',
        iconClass: 'how-it-works__icon--1',
        labelClass: 'how-it-works__label--1',
    },
    {
        icon: <IconAnalyze />,
        label: 'Contextualize',
        title: 'Signal + revenue, combined',
        description: 'Climber scores sentiment, extracts risk signals, and cross-references ARR, renewal dates, and support history — so every alert comes with the business context to act on it.',
        stepNum: '02',
        stepClass: 'how-it-works__step--2',
        iconClass: 'how-it-works__icon--2',
        labelClass: 'how-it-works__label--2',
    },
    {
        icon: <IconAlert />,
        label: 'Escalate',
        title: 'Slack alert, ready to act on',
        description: 'Your CS team gets a prioritized Slack escalation with the account, the signal, the ARR at stake, and a recommended next step. No inbox-checking required.',
        stepNum: '03',
        stepClass: 'how-it-works__step--3',
        iconClass: 'how-it-works__icon--3',
        labelClass: 'how-it-works__label--3',
    },
];

/* ─────────────────────────────────────────────────────────────────────────────
 * Testimonials — TODO: replace with real testimonials
 * ────────────────────────────────────────────────────────────────────────── */

const IconLinkedIn = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const IconRocket = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * HOME PAGE COMPONENT
 * ═══════════════════════════════════════════════════════════════════════════ */

export default function HomePage() {
    return (
        <main>
            {/* ── SECTION 1: HERO ────────────────────────────────────────────── */}
            <section className="hero" id="hero">
                <div className="hero__container container">
                    <div className="hero__content">
                        <h1 className="hero__headline text-display">
                            Build what your customers need
                        </h1>
                        <p className="hero__subhead text-body-lg">
                            Automatically analyze call transcripts to transform raw feedback into roadmap-ready insights delivered directly to your product teams. We help you prioritize the highest-impact features and maximize growth and retention.
                        </p>
                        <div className="hero__ctas">
                            <button
                                type="button"
                                onClick={openDemoModal}
                                className="btn btn-accent"
                            >
                                Book a demo
                            </button>
                            <a href="#how-it-works" className="btn btn-secondary">
                                See how it works →
                            </a>
                        </div>
                        <p className="hero__proof text-label">
                            Built for B2B SaaS teams that ship what their customers ask for
                        </p>
                    </div>
                    <div className="hero__visual">
                        <MockSlackCard />
                    </div>
                </div>
            </section>

            {/* ── SECTION 2: PROBLEM BAR ─────────────────────────────────────── */}
            <section className="problem-bar" id="problem">
                <div className="problem-bar__inner container">
                    <h2 className="problem-bar__title">
                        Building has never been easier. Make sure you build what your customers actually need.
                    </h2>
                    <div className="problem-bar__bento">
                        <div className="bento-tile bento-tile--cream-rect">
                            <h3 className="bento-tile__title">Maximize ARR and NRR</h3>
                            <p className="bento-tile__body">
                                We&apos;re the go-between from users to product, ensuring customer requirements get onto the roadmap.
                            </p>
                        </div>
                        <div className="bento-tile bento-tile--deep-pill">
                            <h3 className="bento-tile__title">Right place, right time</h3>
                            <p className="bento-tile__body">
                                Don&apos;t let feature requests get lost in a spreadsheet — automatically escalate signals to the right teams as soon as they&apos;re available.
                            </p>
                        </div>
                        <div className="bento-tile bento-tile--accent-pill">
                            <h3 className="bento-tile__title">Build what matters</h3>
                            <p className="bento-tile__body">
                                Prioritize the right things, not just the loudest ones, with comprehensive impact scoring and cross-request analysis.
                            </p>
                        </div>
                        <div className="bento-tile bento-tile--glass-rect">
                            <h3 className="bento-tile__title">No added effort</h3>
                            <p className="bento-tile__body">
                                Connect the call recording tools, CRMs, and chat tools your team already uses. No new app for anyone to learn.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 3: HOW IT WORKS ────────────────────────────────────── */}
            <section className="how-it-works" id="how-it-works">
                <div className="how-it-works__inner container">
                    <div className="how-it-works__header">
                        <h2 className="how-it-works__title">
                            From transcript to escalation in minutes
                        </h2>
                        <p className="how-it-works__subtitle">
                            Your CS team already catches the signals. Climber automates what happens next.
                        </p>
                    </div>
                    <div className="how-it-works__steps">
                        {HIW_STEPS.map((step, i) => (
                            <React.Fragment key={step.title}>
                                <div className={`how-it-works__step ${step.stepClass}`}>
                                    <span className="how-it-works__step-number" aria-hidden="true">{step.stepNum}</span>
                                    <div className={`how-it-works__icon ${step.iconClass}`}>
                                        {step.icon}
                                    </div>
                                    <span className={`how-it-works__label ${step.labelClass}`}>{step.label}</span>
                                    <h3 className="how-it-works__step-title">{step.title}</h3>
                                    <p className="how-it-works__desc">{step.description}</p>
                                </div>
                                {i < HIW_STEPS.length - 1 && (
                                    <div className="how-it-works__connector" aria-hidden="true">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M9 18l6-6-6-6" stroke="var(--border-strong)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 4: INTEGRATION STRIP ───────────────────────────────── */}
            <section className="integrations" id="integrations">
                <div className="integrations__inner container">
                    <h3 className="integrations__title text-h3">Connects with your stack</h3>
                    <div className="integrations__logos" style={{ marginTop: '32px' }}>
                        <IntegrationGrid />
                    </div>
                </div>
            </section>

            {/* ── SECTION 5: FEATURE HIGHLIGHTS ──────────────────────────────── */}
            <section className="features" id="platform">
                <div className="features__inner container">
                    <div className="features__grid">
                        {FEATURES.map((feat) => (
                            <div className="features__card card" key={feat.title}>
                                {feat.visual}
                                <h3 className="features__card-title text-h3">{feat.title}</h3>
                                <p className="features__card-body text-body">{feat.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 6: CREDIBILITY ─────────────────────────────────────── */}
            <section className="social-proof" id="credibility">
                <div className="container">
                    <h2 className="social-proof__title">Built by operators, for operators</h2>
                    <div className="social-proof__grid">

                        {/* Card 1: Founder */}
                        <div className="credibility__founder">
                            <div className="credibility__founder-header">
                                <div className="credibility__avatar">MB</div>
                                <div>
                                    <div className="credibility__name">Molly Baek</div>
                                    <div className="credibility__role">Co-founder &amp; CEO</div>
                                </div>
                            </div>
                            <p className="credibility__body">
                                CS &amp; Product Ops at companies like LinkedIn and HackerOne. I built the feedback systems we wished existed — and got tired of watching insights die in spreadsheets.
                            </p>
                            <a
                                href="https://www.linkedin.com/in/mollybaek"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="credibility__linkedin"
                                aria-label="Molly Baek on LinkedIn"
                            >
                                <IconLinkedIn /> LinkedIn
                            </a>
                        </div>

                        {/* Card 2: Discovery insight */}
                        <div className="credibility__insight">
                            <span className="credibility__insight-label">From our discovery calls</span>
                            <blockquote className="credibility__pull-quote">
                                &ldquo;We know the signals are in the calls. Escalating them is a massive undertaking, and getting them built is a crapshoot.&rdquo;
                            </blockquote>
                            <cite className="credibility__attribution">
                                — CS leaders across 12 discovery interviews, Q1 2026
                            </cite>
                        </div>

                        {/* Card 3: Design partner CTA */}
                        <div className="credibility__partner">
                            <div className="credibility__partner-icon">
                                <MountainIcon fill="var(--accent-2)" size={32} />
                            </div>
                            <h3 className="credibility__partner-title">Join the first cohort</h3>
                            <p className="credibility__partner-body">
                                We&apos;re onboarding design partners now. Get early access, shape the product, and lock in founding pricing.
                            </p>
                            <button
                                type="button"
                                onClick={openDemoModal}
                                className="credibility__partner-cta"
                            >
                                Book a call →
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SECTION 7: FINAL CTA (on glass-blue background) ─────────────── */}
            <section className="agentic agentic--cta" id="early-access">
                <div className="agentic__inner agentic__inner--cta container">
                    <div className="agentic__content">
                        <h2 className="agentic__title">
                            Stop losing customers because of missing features.
                        </h2>
                        <p className="agentic__body">
                            Take the next step in optimizing your product feedback loop.
                        </p>
                        <button
                            type="button"
                            onClick={openDemoModal}
                            className="agentic__cta btn btn-accent btn-accent--lg"
                        >
                            Book a 30-minute demo
                        </button>
                    </div>
                    <div className="agentic__visual">
                        <div className="agentic__beacon" aria-hidden="true">
                            <div className="agentic__beacon-ring agentic__beacon-ring--1" />
                            <div className="agentic__beacon-ring agentic__beacon-ring--2" />
                            <div className="agentic__beacon-ring agentic__beacon-ring--3" />
                            <div className="agentic__beacon-dot" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
