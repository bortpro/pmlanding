import type { Metadata } from 'next';

// TODO: Wire [slug] to a CMS — generateMetadata should pull real post data
// TODO: Add JSON-LD ArticleSchema for SEO

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    // Stub — in production, fetch the post from CMS by slug
    const titleMap: Record<string, string> = {
        'why-cs-feedback-never-makes-it-to-the-roadmap':
            'Why CS feedback never makes it to the roadmap',
        'revenue-risk-hiding-in-gong-transcripts':
            'The revenue risk hiding in your Gong transcripts right now',
        'cs-to-product-feedback-loop':
            'How to run a CS-to-product feedback loop that product actually trusts',
    };

    const descMap: Record<string, string> = {
        'why-cs-feedback-never-makes-it-to-the-roadmap':
            'Most CS teams surface great insights every week. But without structure, urgency scoring, or a shared system of record, product never sees it.',
        'revenue-risk-hiding-in-gong-transcripts':
            "Your call transcripts contain churn signals that no one is reading. Here's how to surface them automatically.",
        'cs-to-product-feedback-loop':
            "Spreadsheets and Slack threads aren't a system. Here's the framework we've seen work at 40+ SaaS companies.",
    };

    const title = titleMap[slug] ?? 'Blog Post';
    const description = (descMap[slug] ?? '').slice(0, 155);

    return {
        title: `${title} — ProductMountain`,
        description,
        openGraph: {
            title: `${title} — ProductMountain`,
            description,
            type: 'article',
            images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
        },
    };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
