'use strict';

var ShortName = function (name) {
	if (typeof name !== 'string') {
		return name;
	}

	var names = name.split(' ');
	if (names.length === 1) {
		return name;
	}

	var firstName = names[0];
	var lastName = names[names.length - 1];
	var lastInitial = lastName.substr(0, 1) + '.';
	return firstName + ' ' + lastInitial;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = ShortName;
}
