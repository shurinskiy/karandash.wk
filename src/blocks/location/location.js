(() => {

	const markers = document.querySelectorAll('.location__map .location__marker');
	const items = document.querySelectorAll('.location__items .location__item');
	const sibs = document.querySelectorAll('.location__items .location__marker');

	markers.forEach(marker => {
		['click', 'mouseenter'].forEach(event => {
			marker.addEventListener(event, e => {
				const matchItem = [...sibs].find(sib => sib.dataset.id == marker.dataset.id)?.parentNode;
	
				[...markers, ...items].forEach(el => el.classList.remove('active'));
				matchItem?.classList.add('active');
				marker.classList.add('active');			
			});
		});
	});

	items.forEach(item => {
		['click', 'mouseenter'].forEach(event => {
			item.addEventListener(event, e => {
				const ids = [...item.querySelectorAll('.location__marker')].map(m => m.dataset.id);
				
				[...markers, ...items].forEach(el => el.classList.remove('active'));
				markers.forEach(marker => ids.includes(marker.dataset.id) && marker.classList.add('active'));
				item.classList.add('active');
			});
		});
	});

	['click','touchstart'].forEach(event => {
		document.addEventListener(event, (e) => {
			if (! e.target.closest('.location__items, .location__map')) {
				[...markers, ...items].forEach(el => el.classList.remove('active'));
			}
		}, { passive: false });
	});

})();
