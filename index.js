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