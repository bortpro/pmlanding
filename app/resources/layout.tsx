import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Resources | ProductMountain',
    description:
        'Insights, frameworks, and guides for CS leaders building better feedback loops and catching revenue risk early.',
    openGraph: {
        title: 'Resources | ProductMountain',
        images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
