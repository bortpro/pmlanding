import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing — Climber by ProductMountain',
    description:
        'Simple, transparent pricing for AI-powered revenue risk alerts. Starting at $1,200/mo.',
    openGraph: {
        title: 'Pricing — Climber by ProductMountain',
        images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
