'use client';

import React, { useState } from 'react';
import { BlogPostCard, type BlogPost } from './blog-index-section';
import './page.css';

/* ─────────────────────────────────────────────────────────────────────────────
 * Blog post data
 * ────────────────────────────────────────────────────────────────────────── */

const BLOG_POSTS: BlogPost[] = [
    {
        slug: 'revenue-risk-hiding-in-gong-transcripts',
        title: 'The revenue risk hiding in your Gong transcripts right now',
        description: "Your call transcripts contain churn signals that no one is reading. Here's how to surface them automatically.",
        category: 'Product Intelligence',
        readTime: '4 min read',
        date: 'April 2026',
    },
    {
        slug: 'why-cs-feedback-never-makes-it-to-the-roadmap',
        title: 'Why CS feedback never makes it to the roadmap — and what to do about it',
        description: "Most CS teams surface great insights every week. But without structure, urgency scoring, or a shared system of record, product never sees it.",
        category: 'CS Operations',
        readTime: '6 min read',
        date: 'April 2026',
    },
    {
        slug: 'cs-to-product-feedback-loop',
        title: 'How to run a CS-to-product feedback loop that product actually trusts',
        description: "Spreadsheets and Slack threads aren't a system. Here's the framework that actually works.",
        category: 'Frameworks',
        readTime: '8 min read',
        date: 'April 2026',
    },
];

/* ═══════════════════════════════════════════════════════════════════════════
 * RESOURCES PAGE COMPONENT
 * ═══════════════════════════════════════════════════════════════════════════ */

export default function ResourcesPage() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) return;
        // TODO: wire up to email provider
        console.log('[ProductMountain] Newsletter subscribe:', email);
        setSubscribed(true);
    };

    return (
        <main className="resources-page">

            {/* ── SECTION 1: HERO ──────────────────────────────────────────── */}
            <section className="res-hero">
                <div className="res-hero__inner container">
                    <h1 className="res-hero__title text-display">
                        Insights for CS leaders who refuse to fly blind
                    </h1>
                    <p className="res-hero__sub text-body-lg">
                        What we&apos;re learning from building at the intersection of customer success, AI, and revenue intelligence.
                    </p>
                </div>
            </section>

            {/* ── SECTION 2: BLOG POSTS ────────────────────────────────────── */}
            <section className="res-blog" id="resources">
                <div className="res-blog__inner container">
                    <div className="res-blog__grid">
                        {BLOG_POSTS.map((post) => (
                            <BlogPostCard key={post.slug} post={post} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 3: NEWSLETTER ────────────────────────────────────── */}
            <section className="res-newsletter">
                <div className="res-newsletter__inner container">
                    <h2 className="res-newsletter__title text-h1">
                        Get what we&apos;re learning
                    </h2>
                    <p className="res-newsletter__sub">
                        Frameworks, insights, and product updates for CS and revenue leaders. No fluff.
                    </p>

                    {subscribed ? (
                        <p className="res-newsletter__success">
                            ✓ You&apos;re in. Check your inbox soon.
                        </p>
                    ) : (
                        <form className="res-newsletter__form" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                required
                                placeholder="Work email address"
                                className="input res-newsletter__input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                            />
                            <button type="submit" className="btn btn-accent">
                                Subscribe
                            </button>
                        </form>
                    )}
                </div>
            </section>

        </main>
    );
}
