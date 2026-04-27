import React from 'react';
import Link from 'next/link';
import './blog-index-section.css';

/* ─────────────────────────────────────────────────────────────────────────────
 * Types
 * ────────────────────────────────────────────────────────────────────────── */

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    category: string;
    readTime: string;
    date: string;
}

const CATEGORY_BADGE: Record<string, string> = {
    'Product Intelligence': 'badge-primary',
    'CS Operations':        'badge-warm',
    'Frameworks':           'badge-forest',
};

/* ─────────────────────────────────────────────────────────────────────────────
 * Icon — small inline arrow
 * ────────────────────────────────────────────────────────────────────────── */

const IconArrowRight = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7h8M8 4l3 3-3 3" />
    </svg>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * BLOG POST CARD
 *
 * Reusable card used on /resources index and in Related Posts on blog posts.
 *
 * CARD STRUCTURE:
 * - Category badge (pill)
 * - Title: H3 size, 2-line clamp
 * - Description: 2-line clamp, muted, 14px
 * - Meta: read time · date
 * - "Read →" link, accent color
 * - Hover: card lifts (translateY -2px), border darkens
 * - No author avatar — keep it clean
 * ═══════════════════════════════════════════════════════════════════════════ */

export const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <Link href={`/resources/${post.slug}`} className="blog-card">
        <span className={`badge ${CATEGORY_BADGE[post.category] ?? 'badge-primary'} blog-card__category`}>
            {post.category}
        </span>

        <h3 className="blog-card__title">{post.title}</h3>

        <p className="blog-card__desc">{post.description}</p>

        <div className="blog-card__meta">
            <span className="blog-card__meta-text">
                {post.readTime} · {post.date}
            </span>
            <span className="blog-card__read-link">
                Read <IconArrowRight />
            </span>
        </div>
    </Link>
);

export default BlogPostCard;
