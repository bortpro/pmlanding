import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Custom Solutions | ProductMountain',
    description:
        'We build custom solutions to fit your specific needs: integrations, call transcription, product roadmapping, and more.',
    openGraph: {
        title: 'Custom Solutions | ProductMountain',
        images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
};

export default function CustomSolutionsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
