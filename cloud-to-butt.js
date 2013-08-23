var	ctb = {
	filter: function(text) {
		text = text.replace(/\bThe Cloud\b/g, "My Butt");
		text = text.replace(/\bThe cloud\b/g, "My butt");
		text = text.replace(/\bthe Cloud\b/g, "my Butt");
		text = text.replace(/\bthe cloud\b/g, "my butt");
		text = text.replace(/\bTHE CLOUD\b/g, "MY BUTT");

		return text;
	}
}

module.exports = ctb;