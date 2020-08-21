$(document).ready(() => {
    const $btnClosePopup = $('#close-btn');
    const $modalContainer = $('.modal-container');
    const $modalOverlay = $('.modal-overlay');

    $btnClosePopup.on('click', () => {
        $modalContainer.addClass('d-none');
        $modalOverlay.addClass('d-none');
    });
    $modalOverlay.on('click', () => {
        $modalContainer.addClass('d-none');
        $modalOverlay.addClass('d-none');
    });
});

