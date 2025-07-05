(() => {
	document.querySelectorAll('.post__video')?.forEach((card) => {
		card.addEventListener('click', function(e) {
			const frame = this.querySelector('iframe.post__video-frame');
			
			if (!frame.src && e.target.classList.contains('post__video-play')) {
				frame.src = e.target.dataset.vkSrc;
				e.target.style.display = 'none';
			}
		});
	});
	
})();
