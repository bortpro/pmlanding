import BlogPostClient from './BlogPostClient';

export function generateStaticParams() {
    return [
        { slug: 'why-cs-feedback-never-makes-it-to-the-roadmap' },
        { slug: 'revenue-risk-hiding-in-gong-transcripts' },
        { slug: 'cs-to-product-feedback-loop' },
    ];
}

export default function Page() {
    return <BlogPostClient />;
}
