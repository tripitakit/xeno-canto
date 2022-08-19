'use strict';

var XenoCanto = require('../lib/xeno-canto.js');

console.debug("WARNING: The hardcoded values used in this test may change, from xeno-canto database, please double check the current recording count for each query");

exports['xeno-canto-api'] = {
	setUp: function(done) {
		done();
	},

	'search bearded bellbird returns 74 recordings': function(test) {
		test.expect(4);
		var xeno_canto = new XenoCanto();
		xeno_canto.search("bearded bellbird", function(self){
			test.ok(!!self);
			test.equal(typeof(self), 'object');
			test.equal(typeof(self.entity), 'object');
			test.equal(self.entity.numRecordings, 74);
			test.done();
		});
	},
	
	'advanced search bearded bellbird cnt:Venezuela (27)': function(test) {
		test.expect(4);
		var xeno_canto = new XenoCanto();
		var query = {
			name:'bearded bellbird',
			country: 'Venezuela',
		};
		
		xeno_canto.search(query, function(self){
			test.ok(!!self);
			test.equal(typeof(self), 'object');
			test.equal(typeof(self.entity), 'object');
			test.equal(self.entity.numRecordings, 27);
			test.done();
		});
	},
};
