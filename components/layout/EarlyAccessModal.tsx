'use client';

import React, { useEffect } from 'react';
import './EarlyAccessModal.css';

interface EarlyAccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const MountainIcon: React.FC<{ fill?: string; size?: number }> = ({
    fill = 'var(--color-primary)',
    size = 48,
}) => (
    <svg
        viewBox="0 0 48 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={(size * 32) / 48}
        aria-hidden="true"
    >
        <polygon points="8,28 20,8 32,28" fill={fill} />
        <polygon points="22,28 34,4 46,28" fill={fill} />
    </svg>
);

export const EarlyAccessModal: React.FC<EarlyAccessModalProps> = ({ isOpen, onClose }) => {
    // Lock body scroll when open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    // Close on Escape
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen, onClose]);

    return (
        <div
            className={`modal-overlay ${isOpen ? 'modal-overlay--open' : ''}`}
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="See Climber in action"
        >
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                {/* Close button */}
                <button className="modal__close" onClick={onClose} aria-label="Close modal">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>

                <div className="modal__icon">
                    <MountainIcon size={56} />
                </div>

                <h2 className="modal__headline">See Climber in action</h2>
                <p className="modal__subhead">
                    Book a 30-minute walkthrough. We&apos;ll show you how Climber catches revenue risk signals from real Gong transcripts.
                </p>

                <a
                    href="https://calendly.com/productmountain/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal__calendly-btn btn btn-primary"
                >
                    Book a time on Calendly
                </a>

                <div className="modal__divider">
                    <span>or</span>
                </div>

                <a
                    href="mailto:hello@productmountain.com"
                    className="modal__email-link"
                >
                    Email us directly at hello@productmountain.com
                </a>
            </div>
        </div>
    );
};

export default EarlyAccessModal;
