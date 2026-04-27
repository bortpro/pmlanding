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
    title: 'Climber by ProductMountain — Automated revenue risk escalations for CS teams',
    description:
        'Climber reads your Gong transcripts, contextualizes risk signals with revenue data, and delivers prioritized escalations to Slack — so your CS team acts before renewals are at stake.',
    openGraph: {
        title: 'Climber by ProductMountain — Automated revenue risk escalations for CS teams',
        description:
            'Climber reads your Gong transcripts, contextualizes risk signals with revenue data, and delivers prioritized escalations to Slack — so your CS team acts before renewals are at stake.',
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
