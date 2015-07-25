"use strict";

var scroll_lock = document.querySelectorAll('.scroll_lock');

if(document.querySelectorAll('.scroll_lock').length) {

	var i = 0;
	for (var i = scroll_lock.length - 1; i >= 0; i--) {

		scroll_lock[i].addEventListener('click', function(e) {
			this.classList.add('js-scroll_lock_removed');
		},false);

		scroll_lock[i].addEventListener('mouseleave', function(e) {
			this.classList.remove('js-scroll_lock_removed');
		},false);

	};
}