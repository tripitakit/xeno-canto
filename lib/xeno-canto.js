/*
 * xeno-canto
 * 
 *
 * Copyright (c) 2013 Patrick De Marta
 * Licensed under the GNU GPL license.
 */

'use strict';

/** @dependencies */
var rest = require('rest');

/** @constructor */
function XenoCanto(){
	this.entity = {};
};


/** Search for name of advanced options*/
XenoCanto.prototype.search = function(query, success){

	var url = 'http://www.xeno-canto.org/api/recordings.php?query=';

	// Duck-typing args
	if (typeof(query) === 'string') {
	
		// Normal query search name in English, Latin, Family latin
		url = url + query;	 

	} else {
		// Genus gen:zonotrichia
		// Recordist rec:John
		// Country cnt:brazil.
		// Location loc:tambopata.
		// Recordist Remarks rmk:playback 
		// Geographic Coordinates
			// lat, lon
			// box:LAT_MIN,LON_MIN,LAT_MAX,LON_MAX
		// Background Species also:formicariidae
		// Sound type type:song
		// Catalog number nr:76967 or range: nr:88888-88890
		// Recording Quality
			// q:A will return recordings with a quality rating of A.
			// q<:C will return recordings with a quality rating of D or E.
		// World area area:africa (, america, asia, australia, europe)
	}

	console.log("GET", url);
	
	get(this, url, success);
	
	
};

function get(that, url, success){
	rest(url).then(function(response) { 
			// store response in instance var
			that.entity = JSON.parse(response.entity);
			success(that);
		}
	);
}


module.exports = XenoCanto;

