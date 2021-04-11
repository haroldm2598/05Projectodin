const date = document.querySelector('#date');
Date.prototype.getFormatDate = function () {
	let monthShortNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];

	return `${this.getDate()} ${
		monthShortNames[this.getMonth()]
	}, ${this.getFullYear()}`;
};

date.textContent = new Date().getFormatDate();
