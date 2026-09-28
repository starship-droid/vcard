document.addEventListener('DOMContentLoaded', () => {
	const params = new URLSearchParams(window.location.search);
	const side = ['front', 'back'].includes(params.get('side')) ? params.get('side') : 'front';
	const html = side === 'front' ? frontHTML : backHTML;

	for (let i = 0; i < 8; i++) {
		const section = document.createElement('section');
		section.innerHTML = html;
		document.body.appendChild(section);
	}
});
