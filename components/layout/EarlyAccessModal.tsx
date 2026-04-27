'use client';

import React, { useEffect, useRef } from 'react';
import './EarlyAccessModal.css';

interface EarlyAccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CALENDLY_URL = 'https://calendly.com/molly-productmountain/30min?primary_color=db8733';
const CALENDLY_SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';

declare global {
    interface Window {
        Calendly?: {
            initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
        };
    }
}

export const EarlyAccessModal: React.FC<EarlyAccessModalProps> = ({ isOpen, onClose }) => {
    const widgetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen, onClose]);

    useEffect(() => {
        if (!isOpen || !widgetRef.current) return;

        const init = () => {
            if (widgetRef.current && window.Calendly) {
                widgetRef.current.innerHTML = '';
                window.Calendly.initInlineWidget({
                    url: CALENDLY_URL,
                    parentElement: widgetRef.current,
                });
            }
        };

        if (window.Calendly) {
            init();
            return;
        }

        const existing = document.querySelector<HTMLScriptElement>(`script[src="${CALENDLY_SCRIPT_SRC}"]`);
        if (existing) {
            existing.addEventListener('load', init, { once: true });
            return;
        }

        const script = document.createElement('script');
        script.src = CALENDLY_SCRIPT_SRC;
        script.async = true;
        script.addEventListener('load', init, { once: true });
        document.body.appendChild(script);
    }, [isOpen]);

    return (
        <div
            className={`modal-overlay ${isOpen ? 'modal-overlay--open' : ''}`}
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Book a demo"
        >
            <div className="modal modal--calendly" onClick={(e) => e.stopPropagation()}>
                <button className="modal__close" onClick={onClose} aria-label="Close modal">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>
                <div ref={widgetRef} className="modal__calendly-widget" />
            </div>
        </div>
    );
};

export default EarlyAccessModal;
