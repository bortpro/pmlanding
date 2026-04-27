import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google';
import ClientShell from '../components/layout/ClientShell';
import '../styles/globals.css';

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-display',
});

// DM Sans as --font-ui fallback until Geist .woff2 files are available.
// Swap in localFont('Geist') when ready: https://vercel.com/font
const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-ui',
});

export const metadata: Metadata = {
    title: 'ProductMountain — Build what your customers need',
    description:
        'ProductMountain analyzes call transcripts to transform raw customer feedback into roadmap-ready insights so product teams ship the highest-impact features and maximize retention.',
    openGraph: {
        title: 'ProductMountain — Build what your customers need',
        description:
            'ProductMountain analyzes call transcripts to transform raw customer feedback into roadmap-ready insights so product teams ship the highest-impact features and maximize retention.',
        type: 'website',
        url: 'https://productmountain.com',
        images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${plusJakarta.variable} ${dmSans.variable}`} suppressHydrationWarning>
            <body suppressHydrationWarning>
                <ClientShell>{children}</ClientShell>
            </body>
        </html>
    );
}
