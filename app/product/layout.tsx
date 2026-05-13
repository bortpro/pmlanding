import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How it works | ProductMountain',
    description:
        'Three layers that close the loop from customer call to product decision. Capture, Intelligence, Visibility.',
    openGraph: {
        title: 'How it works | ProductMountain',
        images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
};

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
