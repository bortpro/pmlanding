import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service — ProductMountain',
    description:
        'The terms governing your use of the ProductMountain website and services, operated by Vertria, Inc.',
    openGraph: {
        title: 'Terms of Service — ProductMountain',
        images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
