'use client';

import React from 'react';
import { openDemoModal } from '../../components/layout/demoModal';
import './page.css';

/* ─────────────────────────────────────────────────────────────────────────────
 * Icons — simple line icons for each integration and feature
 * ────────────────────────────────────────────────────────────────────────── */

const IconSlack = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 16.5a2.5 2.5 0 1 1 0-5h10a2.5 2.5 0 1 1 0 5" /><path d="M11.5 8a2.5 2.5 0 1 1 5 0v10a2.5 2.5 0 1 1-5 0" />
    </svg>
);

const IconGong = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="9" /><path d="M14 5v4M10 7l1.5 3M18 7l-1.5 3" />
    </svg>
);

const IconHubSpot = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="4" /><circle cx="14" cy="5" r="2" /><circle cx="14" cy="23" r="2" /><circle cx="5" cy="14" r="2" /><circle cx="23" cy="14" r="2" />
    </svg>
);

const IconJira = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4l10 10-10 10L4 14z" /><circle cx="14" cy="14" r="3" />
    </svg>
);

const IconSalesforce = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18a5 5 0 0 1 4-8 6 6 0 0 1 11.5 2A4.5 4.5 0 0 1 22 21H7a5 5 0 0 1-1-3z" />
    </svg>
);

const IconLinear = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="5" width="18" height="18" rx="3" /><path d="M9 19l10-10M9 14l5-5M14 19l5-5" />
    </svg>
);

/* ─────────────────────────────────────────────────────────────────────────────
 * Mock UI wireframes — High Fidelity
 * ────────────────────────────────────────────────────────────────────────── */

const MockIngestionFlow = () => (
    <div className="mock-ui" style={{ display: 'flex', height: '320px', background: '#F8FAFC', padding: 0 }}>
        {/* Sidebar */}
        <div style={{ width: '220px', background: '#FFFFFF', borderRight: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '24px', height: '24px', background: 'var(--color-primary)', borderRadius: '0px', flexShrink: 0 }}></div>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text-primary)' }}>Acme Corp Workspace</span>
                </div>
            </div>
            <div style={{ padding: '12px' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--color-muted)', marginBottom: '8px', textTransform: 'uppercase' }}>Channels</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 8px', background: 'var(--color-surface)', borderRadius: '0px', color: 'var(--color-text-primary)' }}>
                    <span style={{ fontSize: '14px', color: 'var(--color-muted)' }}>#</span>
                    <span style={{ fontSize: '13px', fontWeight: 500 }}>cs-product-loop</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 8px', color: 'var(--color-text-secondary)' }}>
                    <span style={{ fontSize: '14px', color: 'var(--color-muted)' }}>#</span>
                    <span style={{ fontSize: '13px', fontWeight: 500 }}>product-feedback</span>
                </div>
            </div>
        </div>
        {/* Main Chat */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)', background: 'white' }}>
                <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-text-primary)' }}>#cs-product-loop</span>
            </div>
            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* User Message */}
                <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '0px', background: '#E2E8F0', flexShrink: 0 }}></div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text-primary)' }}>Sarah Jenkins</span>
                            <span style={{ fontSize: '12px', color: 'var(--color-muted)' }}>10:14 AM</span>
                        </div>
                        <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginTop: '4px', lineHeight: 1.5 }}>
                            <span style={{ background: 'rgba(37,99,235,0.1)', color: 'var(--color-primary)', padding: '0 4px', borderRadius: '0px' }}>/feedback</span>
                            {" "}Acme Corp absolutely requires SSO setup before they renew next month. Is this on the roadmap?
                        </div>
                    </div>
                </div>
                {/* Bot Reply */}
                <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '0px', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text-primary)' }}>ProductMountain App</span>
                            <span style={{ fontSize: '11px', background: '#F1F5F9', padding: '2px 6px', borderRadius: '0px', color: 'var(--color-text-secondary)' }}>APP</span>
                            <span style={{ fontSize: '12px', color: 'var(--color-muted)' }}>10:14 AM</span>
                        </div>
                        <div style={{ marginTop: '8px', borderLeft: '3px solid var(--color-success)', paddingLeft: '12px' }}>
                            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-primary)' }}>Insight Captured & Linked</div>
                            <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                                Linked to <strong>Acme Corp ($180k ARR)</strong>. Appended to existing cluster: <a href="#" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Enterprise Auth & SSO</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const MockAnalysisGlow = () => (
    <div className="mock-ui" style={{ padding: '32px', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
        {/* Source Nodes */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '12px 16px', background: '#F8FAFC', border: '1px solid var(--color-border)', borderRadius: '0px', width: '160px', position: 'relative' }}>
                <span style={{ fontSize: '12px', color: 'var(--color-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Slack (12)</span>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>"SSO required for audit"</div>
                <div style={{ position: 'absolute', right: '-25px', top: '50%', width: '24px', height: '1px', background: 'var(--color-border)' }}></div>
            </div>
            <div style={{ padding: '12px 16px', background: '#F8FAFC', border: '1px solid var(--color-border)', borderRadius: '0px', width: '160px', position: 'relative' }}>
                <span style={{ fontSize: '12px', color: 'var(--color-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Gong (8)</span>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>"Security team says SAML..."</div>
                <div style={{ position: 'absolute', right: '-25px', top: '50%', width: '24px', height: '1px', background: 'var(--color-border)' }}></div>
            </div>
            <div style={{ padding: '12px 16px', background: '#F8FAFC', border: '1px solid var(--color-border)', borderRadius: '0px', width: '160px', position: 'relative' }}>
                <span style={{ fontSize: '12px', color: 'var(--color-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Zendesk (4)</span>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>"How to set up Okta?"</div>
                <div style={{ position: 'absolute', right: '-25px', top: '50%', width: '24px', height: '1px', background: 'var(--color-border)' }}></div>
            </div>
        </div>

        {/* Central Hub */}
        <div style={{ width: '40px', height: '120px', borderRight: '2px dashed var(--color-primary)', borderTop: '2px dashed var(--color-primary)', borderBottom: '2px dashed var(--color-primary)', borderRadius: '0 12px 12px 0', marginLeft: '-24px', opacity: 0.3 }}></div>

        {/* Output Node */}
        <div style={{ padding: '24px', background: 'var(--color-white)', border: '1px solid var(--color-primary)', borderRadius: '0px', boxShadow: '0 12px 24px rgba(37,99,235,0.08)', width: '280px', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(37,99,235,0.1)', color: 'var(--color-primary)', padding: '4px 10px', borderRadius: '0px', fontSize: '12px', fontWeight: 600, marginBottom: '12px' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                AI Clustered Need
            </div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '8px' }}>Enterprise SSO / SAML</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid var(--color-border)', paddingTop: '12px', marginTop: '12px' }}>
                <div>
                    <div style={{ fontSize: '11px', color: 'var(--color-muted)', textTransform: 'uppercase' }}>ARR at Risk</div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-success)' }}>$1.4M</div>
                </div>
                <div>
                    <div style={{ fontSize: '11px', color: 'var(--color-muted)', textTransform: 'uppercase' }}>Mentions</div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-primary)' }}>24</div>
                </div>
            </div>
        </div>
    </div>
);

const MockAlertCard = () => (
    <div className="mock-ui" style={{ padding: '24px', background: 'var(--color-white)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '0px', background: '#FEF2F2', border: '1px solid #FCA5A5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#DC2626' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                </div>
                <div>
                    <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-text-primary)' }}>Pipeline Risk Detected</div>
                    <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>Automated Alert · Just now</div>
                </div>
            </div>
            <button style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: '6px 12px', borderRadius: '0px', fontSize: '13px', fontWeight: 500, color: 'var(--color-text-primary)', cursor: 'pointer' }}>Dismiss</button>
        </div>
        
        <div style={{ border: '1px solid var(--color-border)', borderRadius: '0px', overflow: 'hidden' }}>
            {/* Table Header */}
            <div style={{ display: 'flex', background: '#F8FAFC', padding: '10px 16px', borderBottom: '1px solid var(--color-border)', fontSize: '12px', fontWeight: 600, color: 'var(--color-muted)', textTransform: 'uppercase' }}>
                <div style={{ flex: 2 }}>Account</div>
                <div style={{ flex: 1 }}>Missing Capability</div>
                <div style={{ flex: 1, textAlign: 'right' }}>Impact</div>
            </div>
            {/* Table Row */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '16px', background: 'white' }}>
                <div style={{ flex: 2 }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text-primary)' }}>GlobalTech Industries</div>
                    <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', display: 'flex', gap: '6px', marginTop: '4px' }}>
                        <span style={{ background: '#F1F5F9', padding: '2px 6px', borderRadius: '0px' }}>Renewal: Oct 15</span>
                    </div>
                </div>
                <div style={{ flex: 1 }}>
                    <span style={{ fontSize: '13px', background: 'rgba(37,99,235,0.08)', color: 'var(--color-primary)', padding: '4px 8px', borderRadius: '12px', fontWeight: 500 }}>Advanced Roles</span>
                </div>
                <div style={{ flex: 1, textAlign: 'right', fontSize: '15px', fontWeight: 700, color: '#DC2626' }}>
                    $350,000
                </div>
            </div>
        </div>
        
        <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
            <button style={{ flex: 1, background: 'var(--color-primary)', color: 'white', border: 'none', padding: '10px', borderRadius: '6px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>View in Salesforce</button>
            <button style={{ flex: 1, background: 'white', color: 'var(--color-text-primary)', border: '1px solid var(--color-border)', padding: '10px', borderRadius: '6px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>Route to PM</button>
        </div>
    </div>
);

const MockRankingTable = () => (
    <div className="mock-ui" style={{ background: 'var(--color-white)', overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-text-primary)' }}>Prioritized Backlog</span>
            <span style={{ fontSize: '12px', color: 'var(--color-muted)', display: 'flex', gap: '4px', alignItems: 'center' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg> Ranked by Priority Score</span>
        </div>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
                <tr style={{ background: '#F8FAFC', borderBottom: '1px solid var(--color-border)' }}>
                    <th style={{ padding: '12px 20px', fontSize: '12px', fontWeight: 600, color: 'var(--color-muted)', width: '40px' }}></th>
                    <th style={{ padding: '12px 0px', fontSize: '12px', fontWeight: 600, color: 'var(--color-muted)', textTransform: 'uppercase' }}>Feature Theme</th>
                    <th style={{ padding: '12px 20px', fontSize: '12px', fontWeight: 600, color: 'var(--color-muted)', textTransform: 'uppercase' }}>ARR Risk</th>
                    <th style={{ padding: '12px 20px', fontSize: '12px', fontWeight: 600, color: 'var(--color-muted)', textTransform: 'uppercase', width: '140px' }}>Priority Score</th>
                </tr>
            </thead>
            <tbody>
                <tr style={{ borderBottom: '1px solid var(--color-border)', background: 'white' }}>
                    <td style={{ padding: '16px 20px' }}><div style={{ width: '16px', height: '16px', border: '1px solid var(--color-border)', borderRadius: '0px' }}></div></td>
                    <td style={{ padding: '16px 0px' }}>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text-primary)' }}>SSO & SAML Auth</div>
                        <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>24 Accounts tracking</div>
                    </td>
                    <td style={{ padding: '16px 20px', fontSize: '14px', fontWeight: 600, color: 'var(--color-success)' }}>$1,240,000</td>
                    <td style={{ padding: '16px 20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>94</span>
                            <div style={{ flex: 1, height: '6px', background: 'var(--color-surface)', borderRadius: '0px', overflow: 'hidden' }}>
                                <div style={{ height: '100%', width: '94%', background: 'var(--color-primary)', borderRadius: '0px' }}></div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)', background: 'white' }}>
                    <td style={{ padding: '16px 20px' }}><div style={{ width: '16px', height: '16px', border: '1px solid var(--color-border)', borderRadius: '0px' }}></div></td>
                    <td style={{ padding: '16px 0px' }}>
                        <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-text-primary)' }}>Custom Dashboards</div>
                        <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>18 Accounts tracking</div>
                    </td>
                    <td style={{ padding: '16px 20px', fontSize: '14px', fontWeight: 500, color: 'var(--color-text-primary)' }}>$840,000</td>
                    <td style={{ padding: '16px 20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text-primary)' }}>82</span>
                            <div style={{ flex: 1, height: '6px', background: 'var(--color-surface)', borderRadius: '0px', overflow: 'hidden' }}>
                                <div style={{ height: '100%', width: '82%', background: 'var(--color-text-secondary)', borderRadius: '0px' }}></div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr style={{ background: '#F8FAFC' }}>
                    <td style={{ padding: '16px 20px' }}><div style={{ width: '16px', height: '16px', border: '1px solid var(--color-border)', borderRadius: '0px' }}></div></td>
                    <td style={{ padding: '16px 0px' }}>
                        <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>Bulk CSV Export</div>
                    </td>
                    <td style={{ padding: '16px 20px', fontSize: '14px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>$210,000</td>
                    <td style={{ padding: '16px 20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>67</span>
                            <div style={{ flex: 1, height: '6px', background: 'var(--color-surface)', borderRadius: '0px', overflow: 'hidden' }}>
                                <div style={{ height: '100%', width: '67%', background: 'var(--color-border)', borderRadius: '3px' }}></div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

/* ─────────────────────────────────────────────────────────────────────────────
 * Integrations Data
 * ────────────────────────────────────────────────────────────────────────── */

const INTEGRATIONS = [
    { name: 'Gong', icon: <IconGong />, desc: 'Automatically mines call transcripts for product signals.', phase: null },
    { name: 'HubSpot', icon: <IconHubSpot />, desc: 'Syncs ARR, renewal dates, and account context.', phase: null },
    { name: 'Jira', icon: <IconJira />, desc: 'Links feedback themes to existing tickets and epics.', phase: null },
    { name: 'Slack', icon: <IconSlack />, desc: '/feedback command and real-time status notifications.', phase: null },
    { name: 'Salesforce', icon: <IconSalesforce />, desc: 'Enterprise CRM sync for account and revenue data.', phase: 'Phase 2' },
    { name: 'Linear', icon: <IconLinear />, desc: 'Issue tracking integration for engineering teams.', phase: 'Phase 2' },
];

/* ═══════════════════════════════════════════════════════════════════════════
 * PRODUCT PAGE COMPONENT
 * ═══════════════════════════════════════════════════════════════════════════ */

export default function ProductPage() {
    return (
        <main className="product-page">
            {/* ── SECTION 1: HERO ──────────────────────────────────────────── */}
            <section className="prod-hero" id="product-hero">
                <div className="prod-hero__inner container">
                    <h1 className="prod-hero__title text-display">
                        The definitive product intelligence engine
                    </h1>
                    <p className="prod-hero__sub text-body-lg">
                        Five capabilities that close the loop between customer conversations, revenue data, and roadmap execution.
                    </p>
                    <button className="btn btn-primary" onClick={openDemoModal}>
                        Get Early Access
                    </button>
                </div>
            </section>

            {/* ── PART 1: INGESTION ────────────────────────────────────────── */}
            <section className="layer layer--surface" id="part-ingestion">
                <div className="layer__inner container layer__grid">
                    <div className="layer__content">
                        <span className="badge badge-accent layer__badge">1. Data Ingestion</span>
                        <h2 className="layer__title text-h1">Feedback enters where your team already lives</h2>
                        <ul className="layer__bullets text-body">
                            <li><strong>Slack <code>/feedback</code> command</strong> — Two fields, 30 seconds. Zero context switching for CS and Sales.</li>
                            <li><strong>Gong transcript mining</strong> — Automatic extraction of product signals directly from connected calls.</li>
                            <li><strong>CRM synchronization</strong> — Automatically attaches account ID, tier, and renewal metadata to every ping via HubSpot or Salesforce.</li>
                        </ul>
                    </div>
                    <div className="layer__visual">
                        <MockIngestionFlow />
                    </div>
                </div>
            </section>

            {/* ── PART 2: AGENTIC ANALYSIS ─────────────────────────────────── */}
            <section className="layer layer--white" id="part-analysis">
                <div className="layer__inner container layer__grid layer__grid--reverse">
                    <div className="layer__content">
                        <span className="badge badge-primary layer__badge">2. Agentic Analysis</span>
                        <h2 className="layer__title text-h1">Moving from literal noise to jobs-to-be-done</h2>
                        <ul className="layer__bullets text-body">
                            <li><strong>JTBD Clustering</strong> — Our autonomous agent groups requests by underlying customer need rather than literal text matches.</li>
                            <li><strong>Revenue Weighting</strong> — Every cluster is immediately run against your CRM to calculate the precise ARR at risk.</li>
                            <li><strong>Deduplication</strong> — Consolidates 50 similar tickets into a single, highly actionable insight block.</li>
                        </ul>
                    </div>
                    <div className="layer__visual">
                        <MockAnalysisGlow />
                    </div>
                </div>
            </section>

            {/* ── PART 3: AUTOMATED ALERTS ─────────────────────────────────── */}
            <section className="layer layer--surface" id="part-alerts">
                <div className="layer__inner container layer__grid">
                    <div className="layer__content">
                        <span className="badge badge-accent layer__badge">3. Automated Alerts</span>
                        <h2 className="layer__title text-h1">Never miss a critical pipeline risk</h2>
                        <ul className="layer__bullets text-body">
                            <li><strong>Proactive Pings</strong> — Configure rules to alert product leaders when a high-value account mentions a competitor or critical roadblock.</li>
                            <li><strong>Slack & Email Delivery</strong> — Receive instantly formatted briefs inside your existing communication hubs.</li>
                            <li><strong>Context-Rich</strong> — Every alert contains direct quotes, account value, and actionable next steps without leaving the notification.</li>
                        </ul>
                    </div>
                    <div className="layer__visual">
                        <MockAlertCard />
                    </div>
                </div>
            </section>

            {/* ── PART 4: RANKING & DASHBOARDS ─────────────────────────────── */}
            <section className="layer layer--white" id="part-dashboards">
                <div className="layer__inner container layer__grid layer__grid--reverse">
                    <div className="layer__content">
                        <span className="badge badge-primary layer__badge">4. Dashboards & Request Ranking</span>
                        <h2 className="layer__title text-h1">A roadmap built on mathematical reality</h2>
                        <ul className="layer__bullets text-body">
                            <li><strong>Decomposed Prioritization</strong> — See every request ranked mathematically by frequency, ARR, urgency, and strategic alignment.</li>
                            <li><strong>Manual Overrides</strong> — AI creates the baseline, but your product team retains full manual control to boost or deprioritize items.</li>
                            <li><strong>Executive Vistas</strong> — Dedicated views for leadership to see exactly which gaps are stalling revenue.</li>
                        </ul>
                    </div>
                    <div className="layer__visual">
                        <MockRankingTable />
                    </div>
                </div>
            </section>

            {/* ── PART 5: INTEGRATIONS ─────────────────────────────────────── */}
            <section className="plat-integrations" id="part-integrations">
                <div className="plat-integrations__inner container">
                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
                        <span className="badge badge-accent">5. Integrations</span>
                    </div>
                    <h2 className="plat-integrations__title text-h1">
                        Built for your existing ecosystem
                    </h2>
                    <div className="plat-integrations__grid">
                        {INTEGRATIONS.map((intg) => (
                            <div className="plat-integrations__card card" key={intg.name}>
                                <div className="plat-integrations__card-icon">{intg.icon}</div>
                                <h3 className="plat-integrations__card-name">{intg.name}</h3>
                                <p className="plat-integrations__card-desc">{intg.desc}</p>
                                {intg.phase && (
                                    <span className="badge badge-primary plat-integrations__phase">
                                        {intg.phase}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA BAND ─────────────────────────────────────────────────── */}
            <section className="plat-cta" id="platform-cta">
                <div className="plat-cta__inner container">
                    <h2 className="plat-cta__title text-h1">Ready to close the loop?</h2>
                    <button className="btn btn-primary plat-cta__btn" onClick={openDemoModal}>
                        Get Early Access
                    </button>
                </div>
            </section>
        </main>
    );
}
