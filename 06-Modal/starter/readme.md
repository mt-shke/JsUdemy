addEventListener('keydown', function (e) {
if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

////

.overlay {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.6);
backdrop-filter: blur(3px);
z-index: 5;
}
