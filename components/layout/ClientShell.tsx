'use client';

import React, { useState, useEffect } from 'react';
import { Navbar, Footer, EarlyAccessModal } from '../../components/layout';
import { DEMO_MODAL_EVENT } from './demoModal';

/**
 * Client wrapper that manages Early Access modal state.
 * Listens for the global `open-demo-modal` event so any client component
 * (page or chrome) can trigger the modal via `openDemoModal()`.
 */
export default function ClientShell({ children }: { children: React.ReactNode }) {
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const handler = () => setModalOpen(true);
        window.addEventListener(DEMO_MODAL_EVENT, handler);
        return () => window.removeEventListener(DEMO_MODAL_EVENT, handler);
    }, []);

    return (
        <>
            <Navbar />
            {children}
            <Footer />
            <EarlyAccessModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
}
