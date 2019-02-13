'use strict';
function preview () {
		pictures[i].style.display = 'none';
	i++;
	if (i >= pictures.length) {
		i = 0;
	}
	pictures[i].style.display = 'block';
	};

function previous () {
		pictures[i].style.display = 'none';
	i--;
	if (i < 0) {
		i = pictures.length - 1;
	}
	pictures[i].style.display = 'block';
	};	

function slider () {
	setInterval(preview, 3000);
};

/*function stopSlider () {
	clearInterval(setIntervalId);
};*/