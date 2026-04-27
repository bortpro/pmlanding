'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlogPostCard, type BlogPost } from '../blog-index-section';
import { openDemoModal } from '../../../components/layout/demoModal';
import './page.css';

// TODO: Wire [slug] to a CMS (Contentful, Sanity, or MDX files — TBD)
// TODO: Replace placeholder author with real byline field from CMS
// TODO: Add reading progress bar at top of article (nice-to-have)
// TODO: Add JSON-LD ArticleSchema for SEO
// TODO: Wire share buttons to real URLs using window.location

/* ─────────────────────────────────────────────────────────────────────────────
 * Icons — inline SVGs for social share + mountain
 * ────────────────────────────────────────────────────────────────────────── */

const IconTwitter = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l6.5 8L4 20h2l5.5-6.5L16 20h4l-7-8.5L19.5 4H18l-5 5.5L9 4z" />
    </svg>
);

const IconLinkedIn = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="4" />
        <path d="M7 11v6M7 7v.01M11 11v6M11 13a3 3 0 0 1 6 0v4" />
    </svg>
);

const MountainIconSmall = () => (
    <svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="21" aria-hidden="true">
        <polygon points="8,28 20,8 32,28" fill="var(--color-accent)" />
        <polygon points="22,28 34,4 46,28" fill="var(--color-accent)" />
    </svg>
);

/* ─────────────────────────────────────────────────────────────────────────────
 * Stub content — sample post for templating
 * TODO: Replace with CMS-driven content
 * ────────────────────────────────────────────────────────────────────────── */

const SAMPLE_POST = {
    slug: 'why-cs-feedback-never-makes-it-to-the-roadmap',
    title: 'Why CS feedback never makes it to the roadmap',
    description:
        'Most CS teams surface great insights every week. But without structure, urgency scoring, or a shared system of record, product never sees it — or never trusts it.',
    category: 'CS Operations',
    author: 'ProductMountain Team',
    date: 'March 28, 2026',
    readTime: '6 min read',
};

const RELATED_POSTS: BlogPost[] = [
    {
        slug: 'revenue-risk-hiding-in-gong-transcripts',
        title: 'The revenue risk hiding in your Gong transcripts right now',
        description: "Your call transcripts contain churn signals that no one is reading. Here's how to surface them automatically.",
        category: 'Product Intelligence',
        readTime: '4 min read',
        date: 'March 22, 2026',
    },
    {
        slug: 'cs-to-product-feedback-loop',
        title: 'How to run a CS-to-product feedback loop that product actually trusts',
        description: "Spreadsheets and Slack threads aren't a system. Here's the framework we've seen work at 40+ SaaS companies.",
        category: 'Frameworks',
        readTime: '8 min read',
        date: 'March 15, 2026',
    },
];

/* ═══════════════════════════════════════════════════════════════════════════
 * BLOG POST PAGE COMPONENT
 * ═══════════════════════════════════════════════════════════════════════════ */

export default function BlogPostClient() {
    const post = SAMPLE_POST;

    const [shareUrl, setShareUrl] = useState('');
    useEffect(() => {
        setShareUrl(window.location.href);
    }, []);
    const shareText = encodeURIComponent(post.title);

    return (
        <main className="blog-post-page">
            <article className="blog-post container">

                {/* ── 1. BREADCRUMB ─────────────────────────────────────── */}
                <nav className="blog-post__breadcrumb" aria-label="Breadcrumb">
                    <Link href="/resources" className="blog-post__breadcrumb-link">
                        Resources
                    </Link>
                    <span className="blog-post__breadcrumb-sep" aria-hidden="true">→</span>
                    <span className="blog-post__breadcrumb-current">{post.title}</span>
                </nav>

                {/* ── 2. ARTICLE HEADER ──────────────────────────────────── */}
                <header className="blog-post__header">
                    <span className="badge badge-accent blog-post__category">{post.category}</span>

                    <h1 className="blog-post__title">{post.title}</h1>

                    <p className="blog-post__description">{post.description}</p>

                    <div className="blog-post__meta-row">
                        <div className="blog-post__author-avatar" aria-hidden="true" />
                        <span className="blog-post__author-name">{post.author}</span>
                        <span className="blog-post__meta-sep">·</span>
                        <span className="blog-post__meta-date">{post.date}</span>
                        <span className="blog-post__meta-sep">·</span>
                        <span className="blog-post__meta-read">{post.readTime}</span>
                    </div>

                    <hr className="blog-post__divider" />
                </header>

                {/* ── 3. ARTICLE BODY ───────────────────────────────────── */}
                <div className="blog-post__body prose">

                    {/* Section 1 */}
                    <p className="blog-post__drop-cap">
                        Customer success teams are the closest people in your company to real user
                        pain. They hear what&apos;s broken, what&apos;s missing, and what&apos;s blocking renewals
                        every single day. Yet the vast majority of that signal dies in Slack threads,
                        spreadsheets that nobody reads, or one-off escalations that product dismisses
                        as anecdotal. The structural problem isn&apos;t that CS doesn&apos;t care — it&apos;s that
                        there&apos;s no system connecting their insights to the product decision-making
                        process.
                    </p>

                    <p>
                        The CS-to-product feedback loop is one of the most important motions in any
                        B2B SaaS company, and it&apos;s almost always broken. Not because of bad
                        intentions, but because CS teams operate in real-time customer conversations
                        while product teams plan in quarterly cycles. That cadence mismatch is the
                        root cause of most feedback loss.
                    </p>

                    <h2>The signal is there — the system is not</h2>

                    <p>
                        When we interviewed 40+ CS leaders at Series A–C SaaS companies, the same
                        pattern emerged everywhere. CSMs hear critical product feedback on calls
                        and in support threads daily. They try to pass it along — via Slack, via a
                        shared spreadsheet, via tagging someone in a ticket. But without structure,
                        context, and revenue weighting, the feedback gets lost or deprioritized.
                    </p>

                    <blockquote>
                        &ldquo;We had a spreadsheet with 200+ rows of customer requests. Product looked
                        at it once and never came back. They said they couldn&apos;t tell what was
                        important.&rdquo;
                        <cite>— VP of Customer Success, $15M ARR B2B SaaS</cite>
                    </blockquote>

                    <p>
                        The problem isn&apos;t volume — it&apos;s that the signal arrives without context.
                        Product teams need to know: how much ARR is affected? How many accounts
                        are asking? Is this a feature request, a bug, or a strategic gap? Without
                        that metadata attached, feedback is just noise.
                    </p>

                    {/* Section 2 */}
                    <h2>Why spreadsheets and Slack channels fail</h2>

                    <p>
                        The tools most teams use to manage feedback weren&apos;t built for this purpose.
                        Spreadsheets don&apos;t auto-attach revenue data. Slack channels become
                        unreadable after a week. Jira tickets for individual feature requests
                        create a backlog that&apos;s impossible to prioritize without a framework.
                    </p>

                    <p>
                        What&apos;s needed is a layer that sits between where CS works (Slack, Gong,
                        CRM) and where product plans (Jira, Linear, roadmap tools). This layer
                        needs to do three things automatically:
                    </p>

                    <p>
                        First, <strong>capture without friction</strong> — feedback should enter the
                        system where CS already works, not require a separate tool or process.
                        Second, <strong>enrich with context</strong> — every signal needs ARR data,
                        renewal dates, and account health attached automatically. Third,{' '}
                        <strong>surface with structure</strong> — product teams need themed clusters,
                        priority scores, and defensible data, not a raw list.
                    </p>

                    {/* ── 4. CALLOUT BOX (mid-article CTA) ──────────────── */}
                    <aside className="blog-post__callout">
                        <MountainIconSmall />
                        <div className="blog-post__callout-content">
                            <p>
                                ProductMountain closes the loop between CS and product automatically.
                            </p>
                            <button
                                className="blog-post__callout-link"
                                onClick={openDemoModal}
                            >
                                Get early access →
                            </button>
                        </div>
                    </aside>

                    {/* Section 3 */}
                    <h2>What a real feedback-to-roadmap system looks like</h2>

                    <p>
                        The companies that get this right share a common pattern. They treat CS
                        feedback as structured data, not anecdotes. Every signal is tagged with
                        the underlying job-to-be-done, weighted by revenue impact, and grouped
                        into themes that map to product areas. This makes the data defensible in
                        roadmap conversations.
                    </p>

                    <h3>The three layers of a modern feedback loop</h3>

                    <p>
                        Layer one is <strong>capture</strong> — where feedback enters the system.
                        This should be zero-friction for CSMs. A Slack command, automatic Gong
                        transcript mining, or a lightweight form that takes 30 seconds. Layer two
                        is <strong>intelligence</strong> — where AI clusters, scores, and enriches
                        the raw signals. Layer three is <strong>visibility</strong> — where product
                        teams see prioritized themes and CS teams see what happened to their feedback.
                    </p>

                    <p>
                        When you have all three layers working, something remarkable happens: CS
                        stops feeling ignored, product stops guessing, and leadership gets a clear
                        view of where customer demand meets strategic direction. The loop closes.
                    </p>

                    {/* Section 4 */}
                    <h2>Getting started doesn&apos;t require a six-month project</h2>

                    <p>
                        Most teams think fixing the feedback loop means a massive tooling
                        overhaul. It doesn&apos;t. The highest-leverage move is connecting your existing
                        tools — Slack, Gong, HubSpot or Salesforce — through a lightweight
                        intelligence layer that does the enrichment and structuring automatically.
                    </p>

                    <p>
                        The best-performing CS teams we&apos;ve seen can go from zero structured
                        feedback to a weekly prioritized digest in under two weeks. The key is
                        starting with the tools your team already uses, not asking them to adopt
                        something new.
                    </p>

                    <p>
                        If you&apos;re a CS leader tired of watching valuable customer insights
                        disappear into the void, the problem isn&apos;t your team — it&apos;s the system.
                        And the system is fixable.
                    </p>
                </div>

                {/* ── 5. ARTICLE FOOTER ─────────────────────────────────── */}
                <footer className="blog-post__footer">
                    <hr className="blog-post__divider" />

                    {/* Tags */}
                    <div className="blog-post__tags">
                        {['CS Operations', 'Product Feedback', 'Revenue Risk'].map((tag) => (
                            <span key={tag} className="badge badge-primary blog-post__tag">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Share */}
                    <div className="blog-post__share">
                        <span className="blog-post__share-label">Share this article</span>
                        <div className="blog-post__share-buttons">
                            <a
                                href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="blog-post__share-btn"
                                aria-label="Share on X (Twitter)"
                            >
                                <IconTwitter />
                            </a>
                            <a
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="blog-post__share-btn"
                                aria-label="Share on LinkedIn"
                            >
                                <IconLinkedIn />
                            </a>
                        </div>
                    </div>

                    {/* Author bio */}
                    <div className="blog-post__author-bio">
                        <div className="blog-post__author-bio-avatar" aria-hidden="true" />
                        <div className="blog-post__author-bio-content">
                            <p className="blog-post__author-bio-text">
                                Written by the <strong>ProductMountain team</strong>. Built with
                                insights from 40+ CS leaders at Series A–C SaaS companies.
                            </p>
                            <a
                                href="https://www.linkedin.com/company/productmountain"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="blog-post__author-bio-link"
                            >
                                Follow us on LinkedIn →
                            </a>
                        </div>
                    </div>
                </footer>
            </article>

            {/* ── 6. RELATED POSTS ─────────────────────────────────────── */}
            <section className="blog-related">
                <div className="blog-related__inner container">
                    <h3 className="blog-related__title text-h2">More from ProductMountain</h3>
                    <div className="blog-related__grid">
                        {RELATED_POSTS.map((p) => (
                            <BlogPostCard key={p.slug} post={p} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
