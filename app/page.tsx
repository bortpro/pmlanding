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
        <p className="slack-card__account">Acme Corp · $85K ARR</p>

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
 * Bento mini-visuals — small product mockups embedded in each problem tile
 * ────────────────────────────────────────────────────────────────────────── */

const BentoVisualRevenue = () => (
    <div className="bento-visual bento-visual--revenue" aria-hidden="true">
        <div className="bento-visual__chip">
            <span className="bento-visual__chip-label">NRR · this quarter</span>
            <span className="bento-visual__chip-value">+24%</span>
        </div>
        <svg className="bento-visual__sparkline" viewBox="0 0 140 56" preserveAspectRatio="none">
            <defs>
                <linearGradient id="sparkFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent-2)" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0" />
                </linearGradient>
            </defs>
            <path d="M0,46 L20,42 L40,38 L60,28 L80,22 L100,14 L120,10 L140,4 L140,56 L0,56 Z" fill="url(#sparkFill)" />
            <path d="M0,46 L20,42 L40,38 L60,28 L80,22 L100,14 L120,10 L140,4" fill="none" stroke="var(--accent-2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="bento-visual__legend">
            <span className="bento-visual__dot bento-visual__dot--accent2" />
            <span>Pipeline retained</span>
            <span className="bento-visual__legend-value">$2.4M</span>
        </div>
    </div>
);

const BentoVisualSlack = () => (
    <div className="bento-visual bento-visual--slack" aria-hidden="true">
        <div className="bento-visual__slack-header">
            <span className="bento-visual__slack-channel">#product-platform</span>
            <span className="bento-visual__slack-time">now</span>
        </div>
        <div className="bento-visual__slack-row">
            <span className="bento-visual__slack-avatar">C</span>
            <div className="bento-visual__slack-body">
                <div className="bento-visual__slack-name">
                    Climber <span className="bento-visual__slack-app">APP</span>
                </div>
                <div className="bento-visual__slack-msg">
                    New escalation routed to <strong>@platform-team</strong>
                </div>
                <div className="bento-visual__slack-meta">
                    <span className="bento-visual__pill">SSO · $120K ARR</span>
                </div>
            </div>
        </div>
    </div>
);

const BentoVisualPriority = () => (
    <div className="bento-visual bento-visual--priority" aria-hidden="true">
        <div className="bento-visual__priority-header">
            <span>Top requests</span>
            <span>ARR impact</span>
        </div>
        {[
            { rank: 1, label: 'Advanced Analytics API', value: '$2.4M', tone: 'hot' },
            { rank: 2, label: 'Enterprise SSO', value: '$850K', tone: 'mid' },
            { rank: 3, label: 'Bulk export sync', value: '$420K', tone: 'low' },
        ].map((row) => (
            <div className="bento-visual__priority-row" key={row.rank}>
                <span className={`bento-visual__priority-rank bento-visual__priority-rank--${row.tone}`}>{row.rank}</span>
                <span className="bento-visual__priority-label">{row.label}</span>
                <span className="bento-visual__priority-value">{row.value}</span>
            </div>
        ))}
    </div>
);

const BentoVisualIntegrations = () => {
    const tiles = [
        { src: '/logos/Gong.png', name: 'Gong' },
        { src: '/logos/granola.png', name: 'Granola' },
        { src: '/logos/hubspot.png', name: 'HubSpot' },
        { src: '/logos/jira.png', name: 'Jira' },
        { src: '/logos/Slack.png', name: 'Slack' },
        { src: '/logos/Salesforce.png', name: 'Salesforce' },
    ];
    return (
        <div className="bento-visual bento-visual--integrations" aria-hidden="true">
            {tiles.map((t) => (
                <span key={t.name} className="bento-visual__integration" title={t.name}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.src} alt="" />
                </span>
            ))}
        </div>
    );
};

const MockReporting = () => (
    <div className="mock-demo mock-reporting" aria-hidden="true" style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '0px', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: '10px' }}>
            <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Boardroom Report</span>
            <span style={{ fontSize: '10px', color: 'var(--color-success)', background: 'var(--color-surface)', padding: '2px 6px', fontWeight: 600 }}>Q3 IMPACT</span>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ flex: 1, background: 'var(--color-surface)', padding: '8px 10px', borderLeft: '2px solid var(--color-success)' }}>
                <div style={{ fontSize: '10px', color: 'var(--color-muted)', textTransform: 'uppercase', fontWeight: 600 }}>ARR Unlocked</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-primary)' }}>$2.4M</div>
            </div>
            <div style={{ flex: 1, background: 'var(--color-surface)', padding: '8px 10px', borderLeft: '2px solid #2563EB' }}>
                <div style={{ fontSize: '10px', color: 'var(--color-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Preserved</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-primary)' }}>$1.1M</div>
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '36px' }}>
            {[28, 42, 36, 58, 52, 70, 64, 82].map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${h}%`, background: i > 5 ? 'var(--color-success)' : '#94A3B8' }} />
            ))}
        </div>
    </div>
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
        body: 'Slack /feedback command. Call transcripts from Gong, Granola, and other tools monitored automatically. CRM data synced. Two fields, thirty seconds, no new app for anyone to learn.',
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
    {
        visual: <MockReporting />,
        title: 'Reporting',
        body: 'At B2B businesses, if you’re not creating a new SKU, it’s hard to quantify the impact of product work. We provide boardroom-ready data so you can showcase the impact of your team’s work. See the ARR you’ve unlocked and preserved, get insights into where investments should be made, and monitor and forecast growth and risk.',
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

const HIWVisualIngest = () => (
    <div className="hiw-visual hiw-visual--ingest" aria-hidden="true">
        <div className="hiw-visual__live-tag">
            <span className="hiw-visual__live-dot" />
            Live signals
        </div>
        {[
            { source: 'Gong', kind: 'Call', body: '"...we need analytics APIs before renewal."', tone: 'accent' },
            { source: 'Slack', kind: '/feedback', body: 'Customer asked about bulk export sync', tone: 'mid' },
            { source: 'Granola', kind: 'Note', body: 'QBR sentiment trending down', tone: 'muted' },
        ].map((item) => (
            <div key={item.source} className={`hiw-visual__signal hiw-visual__signal--${item.tone}`}>
                <span className="hiw-visual__signal-source">{item.source}</span>
                <span className="hiw-visual__signal-kind">{item.kind}</span>
                <span className="hiw-visual__signal-body">{item.body}</span>
            </div>
        ))}
    </div>
);

const HIWVisualContextualize = () => (
    <div className="hiw-visual hiw-visual--context" aria-hidden="true">
        <div className="hiw-visual__context-header">
            <span className="hiw-visual__context-account">Pied Piper</span>
            <span className="hiw-visual__context-arr">$2.4M ARR</span>
        </div>
        <div className="hiw-visual__context-tag">Theme · Advanced Analytics API</div>
        <div className="hiw-visual__context-meters">
            <div className="hiw-visual__meter">
                <span className="hiw-visual__meter-label">Sentiment</span>
                <div className="hiw-visual__meter-bar">
                    <span className="hiw-visual__meter-fill hiw-visual__meter-fill--low" style={{ width: '32%' }} />
                </div>
                <span className="hiw-visual__meter-value">0.32</span>
            </div>
            <div className="hiw-visual__meter">
                <span className="hiw-visual__meter-label">Renewal</span>
                <div className="hiw-visual__meter-bar">
                    <span className="hiw-visual__meter-fill hiw-visual__meter-fill--mid" style={{ width: '60%' }} />
                </div>
                <span className="hiw-visual__meter-value">60d</span>
            </div>
            <div className="hiw-visual__meter">
                <span className="hiw-visual__meter-label">Priority</span>
                <div className="hiw-visual__meter-bar">
                    <span className="hiw-visual__meter-fill hiw-visual__meter-fill--high" style={{ width: '88%' }} />
                </div>
                <span className="hiw-visual__meter-value">88</span>
            </div>
        </div>
        <div className="hiw-visual__context-badges">
            <span className="hiw-visual__badge hiw-visual__badge--risk">Revenue risk</span>
            <span className="hiw-visual__badge hiw-visual__badge--theme">Roadmap fit</span>
        </div>
    </div>
);

const HIWVisualEscalate = () => (
    <div className="hiw-visual hiw-visual--escalate" aria-hidden="true">
        <div className="hiw-visual__alert-header">
            <span className="hiw-visual__alert-channel">#cs-escalations</span>
            <span className="hiw-visual__alert-time">just now</span>
        </div>
        <div className="hiw-visual__alert-body">
            <div className="hiw-visual__alert-title-row">
                <span className="hiw-visual__alert-badge">Revenue risk</span>
                <span className="hiw-visual__alert-arr">$2.4M ARR</span>
            </div>
            <div className="hiw-visual__alert-title">Pied Piper · Renewal in 60d</div>
            <div className="hiw-visual__alert-msg">
                "Evaluating alternatives." Sentiment 0.32. Recommend executive check-in this week.
            </div>
            <div className="hiw-visual__alert-actions">
                <span className="hiw-visual__alert-cta">Schedule check-in →</span>
            </div>
        </div>
    </div>
);

const HIW_STEPS = [
    {
        icon: <IconConnect />,
        label: 'Ingest',
        title: 'Every call, automatically',
        description: "Connect your call recording tools like Gong, Granola, or upload transcripts manually. Climber reads every transcript the moment it's available, no configuration per call.",
        stepNum: '01',
        stepClass: 'how-it-works__step--1',
        iconClass: 'how-it-works__icon--1',
        labelClass: 'how-it-works__label--1',
        visual: <HIWVisualIngest />,
    },
    {
        icon: <IconAnalyze />,
        label: 'Contextualize',
        title: 'Signal + revenue, combined',
        description: 'Climber scores sentiment, extracts risk signals, and cross-references ARR, renewal dates, and support history, so every alert comes with the business context to act on it.',
        stepNum: '02',
        stepClass: 'how-it-works__step--2',
        iconClass: 'how-it-works__icon--2',
        labelClass: 'how-it-works__label--2',
        visual: <HIWVisualContextualize />,
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
        visual: <HIWVisualEscalate />,
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
                        <div className="bento-tile bento-tile--cream-blob">
                            <div className="bento-tile__copy">
                                <span className="bento-tile__eyebrow">Outcomes</span>
                                <h3 className="bento-tile__title">Maximize ARR &amp; NRR</h3>
                                <p className="bento-tile__body">
                                    We&apos;re the go-between from users to product, ensuring customer requirements get onto the roadmap.
                                </p>
                            </div>
                            <BentoVisualRevenue />
                        </div>

                        <div className="bento-tile bento-tile--deep-rect">
                            <div className="bento-tile__copy">
                                <span className="bento-tile__eyebrow">Routing</span>
                                <h3 className="bento-tile__title">Right place, right time</h3>
                                <p className="bento-tile__body">
                                    Don&apos;t let feature requests get lost in a spreadsheet. Automatically escalate signals to the right teams as soon as they&apos;re available.
                                </p>
                            </div>
                            <BentoVisualSlack />
                        </div>

                        <div className="bento-tile bento-tile--glass-rect">
                            <div className="bento-tile__copy">
                                <span className="bento-tile__eyebrow">Prioritization</span>
                                <h3 className="bento-tile__title">Build what matters</h3>
                                <p className="bento-tile__body">
                                    Prioritize the right things, not just the loudest ones, with comprehensive impact scoring and cross-request analysis.
                                </p>
                            </div>
                            <BentoVisualPriority />
                        </div>

                        <div className="bento-tile bento-tile--accent-blob">
                            <div className="bento-tile__copy">
                                <span className="bento-tile__eyebrow">Integration</span>
                                <h3 className="bento-tile__title">No added effort</h3>
                                <p className="bento-tile__body">
                                    Connect the call recording tools, CRMs, and chat tools your team already uses. No new app for anyone to learn.
                                </p>
                            </div>
                            <BentoVisualIntegrations />
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
                        {HIW_STEPS.map((step) => (
                            <div className={`how-it-works__step ${step.stepClass}`} key={step.title}>
                                <div className="how-it-works__step-top">
                                    <span className={`how-it-works__step-num ${step.labelClass}`}>{step.stepNum}</span>
                                    <span className={`how-it-works__label ${step.labelClass}`}>{step.label}</span>
                                </div>
                                <div className={`how-it-works__visual-wrap how-it-works__visual-wrap--${step.stepNum}`}>
                                    {step.visual}
                                </div>
                                <div className="how-it-works__copy">
                                    <h3 className="how-it-works__step-title">{step.title}</h3>
                                    <p className="how-it-works__desc">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 4: FEATURE HIGHLIGHTS ──────────────────────────────── */}
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
                                CS &amp; Product Ops at companies like LinkedIn and HackerOne. I got tired of watching insights die in spreadsheets and built the feedback system I wish we had.
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
                                &ldquo;We have a quarterly process for sharing customer feedback to product, but it&apos;s a lot of manual effort. We need something that can automate that work and give product the info they need to actually put a solution on the roadmap.&rdquo;
                            </blockquote>
                            <cite className="credibility__attribution">
                                CS leaders across 12 discovery interviews, Q1 2026
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
