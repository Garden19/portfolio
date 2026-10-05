const modalButtons = document.querySelectorAll("[data-modal]");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".modal-close");
const overlays = document.querySelectorAll(".modal-overlay");

modalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.dataset.modal;
        const modal = document.getElementById(modalId);

        if (!modal) return;

        modal.classList.add("active");
        document.body.classList.add("modal-open");
    });
});

function closeModal(modal) {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
}

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        closeModal(button.closest(".modal"));
    });
});

overlays.forEach(overlay => {
    overlay.addEventListener("click", () => {
        closeModal(overlay.closest(".modal"));
    });
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        const activeModal = document.querySelector(".modal.active");

        if (activeModal) {
            closeModal(activeModal);
        }
    }
});