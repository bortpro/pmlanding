'use client';

import React, { useState } from 'react';
import { Navbar, Footer, EarlyAccessModal } from '../../components/layout';

/**
 * Client wrapper that manages Early Access modal state
 * and passes `onEarlyAccess` to page children via cloneElement.
 */
export default function ClientShell({ children }: { children: React.ReactNode }) {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Navbar />
            {/* Clone children to inject onEarlyAccess prop */}
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(child as React.ReactElement<{ onEarlyAccess: () => void }>, {
                        onEarlyAccess: () => setModalOpen(true),
                    })
                    : child
            )}
            <Footer />
            <EarlyAccessModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
}
