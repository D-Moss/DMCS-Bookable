const y = document.getElementById('y');
y.textContent = new Date().getFullYear();

const chips = Array.from(document.querySelectorAll('.chip'));
const cards = Array.from(document.querySelectorAll('.card'));

chips.forEach(c => c.addEventListener('click', () => {
	chips.forEach(x => {
		x.classList.remove('active');
		x.setAttribute('aria-pressed', 'false');
	});
	c.classList.add('active');
	c.setAttribute('aria-pressed', 'true');

	const f = c.dataset.filter;
	cards.forEach(card => {
		if (f === 'all') {
			card.style.display = '';
			return;
		}
		const tags = (card.getAttribute('data-tags') || '').split(/\s+/);
		card.style.display = tags.includes(f) ? '' : 'none';
	});
}));

// MODAL LOGIC FOR "MORE DETAILS" BUTTONS
const detailButtons = document.querySelectorAll('.more-details-btn');
const modals = document.querySelectorAll('.modal');

function openModal(id) {
	const modal = document.getElementById(id);
	if (!modal) return;
	modal.classList.add('is-visible');
	modal.setAttribute('aria-hidden', 'false');
}

function closeModal(modal) {
	modal.classList.remove('is-visible');
	modal.setAttribute('aria-hidden', 'true');
}

// Open the correct modal when a "More details" button is clicked
detailButtons.forEach(button => {
	button.addEventListener('click', () => {
		const modalId = button.getAttribute('data-modal');
		openModal(modalId);
	});
});

// Close when clicking the overlay or the X button
modals.forEach(modal => {
	modal.addEventListener('click', (event) => {
		if (event.target.matches('[data-close-modal]')) {
			closeModal(modal);
		}
	});
});

// Close with Escape key
document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		modals.forEach(modal => {
			if (modal.classList.contains('is-visible')) {
				closeModal(modal);
			}
		});
	}
});