'use strict';

var XenoCanto = require('../lib/xeno-canto.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['xeno-canto-api'] = {
	setUp: function(done) {
		done();
	},

	'search bearded bellbird returns 28 recordings': function(test) {
		test.expect(4);
		var xeno_canto = new XenoCanto();
		xeno_canto.search("bearded bellbird", function(self){
			test.ok(!!self);
			test.equal(typeof(self), 'object');
			test.equal(typeof(self.entity), 'object');
			test.equal(self.entity.numRecordings, 28);
			test.done();
		});
	},
	
	'advanced search bearded bellbird cnt:spain': function(test) {
		test.expect(4);
		var xeno_canto = new XenoCanto();
		var query = {
			name:'orthonyx',
			country: 'papua',
			location: 'tari'
		};
		
		xeno_canto.search(query, function(self){
			test.ok(!!self);
			test.equal(typeof(self), 'object');
			test.equal(typeof(self.entity), 'object');
			test.equal(self.entity.numRecordings, 3);
			test.done();
		});
	},
	
	
	
};
