import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Design Partners — ProductMountain',
    description:
        'Join the founding cohort helping shape the product intelligence layer for CS, product, and sales teams.',
    openGraph: {
        title: 'Design Partners — ProductMountain',
        images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
};

export default function SuccessStoriesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
