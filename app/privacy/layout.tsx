import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | ProductMountain',
    description:
        'How Vertria, Inc. (operating as ProductMountain) collects, uses, and protects information.',
    openGraph: {
        title: 'Privacy Policy | ProductMountain',
        images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
