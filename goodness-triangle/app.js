document.addEventListener('DOMContentLoaded', () => {
	const front = document.createElement('section');
	front.innerHTML = frontHTML;
	const back = document.createElement('section');
	back.innerHTML = backHTML;
	document.body.append(front, back);
});
