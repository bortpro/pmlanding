export const DEMO_MODAL_EVENT = 'open-demo-modal';

export const openDemoModal = () => {
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent(DEMO_MODAL_EVENT));
    }
};
