(function() {
	"use strict";
	/*global module*/

	var	ctb = {
		filter: function(text) {
			return text.replace(/\bThe Cloud\b/g, "My Butt")
						.replace(/\bThe cloud\b/g, "My butt")
						.replace(/\bthe Cloud\b/g, "my Butt")
						.replace(/\bthe cloud\b/g, "my butt")
						.replace(/\bTHE CLOUD\b/g, "MY BUTT");
		}
	};

	module.exports = ctb;
}());