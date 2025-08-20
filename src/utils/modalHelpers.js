import { Modal } from "bootstrap";

export function hideAllModals() {
    // Find all open modal elements
    const openModals = document.querySelectorAll(".modal.show");
    openModals.forEach((modalEl) => {
        const instance = Modal.getInstance(modalEl) || new Modal(modalEl);
        instance.hide(); // hide it
    });
}