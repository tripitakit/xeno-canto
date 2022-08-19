# xeno-canto.js

Node.js implementation of xeno-canto API 2.0
Easy simple/advanced searches against xeno-canto database.

"The service provides a database of bird song and sound recordings contributed 
and maintained by enthusiasts worldwide.It provides access to search the
connection and play or download recordings and to submit new recordings.
Discussion forums encourage interactions among members of the birding community 
to exchange information about bird song and related topics.

API methods support search against the database by specifying the formal Latin 
name of a bird species. Returned data provide listings of all recordings 
maintained by the service for that species, either with or without URLs for
audio and still image files, or optionally a request can retrieve a single
representative recording. Methods also provide summary statistics about
listings relevant to the species named in the request." 


## Installation
```
$ npm install xeno-canto
```
## Usage
```javascript

/** Dependencies */
var XenoCanto = require('xeno-canto');


/** A simple search with English common name */
var beardedBellbird = new XenoCanto();

/* the callback is passed a reference of the instance, when search is complete;
   the response json object is stored in the instance's property .entity */
	 
beardedBellbird.search("bearded bellbird", function(self){
	console.log("numRecordings: " + self.entity.numRecordings);
	console.log("numSpecies: " + self.entity.numSpecies);
	// inspect more properties ..
});

```
**Response Properties**

- numRecordings: the total number of recordings found for this query
- numSpecies: the total number of species found for this query
- page: the page number of the results page that is being displayed
- numPages: the total number of pages available for this query
- recordings: an array of recording objects, described in detail below


**Recording object properties**

- id: the catalogue number of the recording on xeno-canto
- gen: the generic name of the species
- sp: the specific name of the species
- en: the English name of the species
- rec: the name of the recordist
- cnt: the country where the recording was made
- loc: the name of the locality
- lat: the latitude of the recording in decimal coordinates
- lng: the longitude of the recording in decimal coordinates
- type: the sound type of the recording (e.g. 'call', 'song', etc). This is generally a comma-separated list of sound types.
- file: the URL to the audio file
- lic: the URL describing the license of this recording
- url: the URL specifying the details of this recording


```javascript
/** Advanced search */

var orthonyxPaupuaTari = new XenoCanto();

var query = {
	name:'orthonyx',
	country: 'papua',
	location: 'tari'
};

orthonyxPaupuaTari.search(query, function(self){
	// inspect the response object
	console.log(self.entity);
});
```

**Advanced search parameters**

* name [string]  commong english name, scientific name, or family latin name
* genus [string] 
* recordist [string] recordist name
* country [string] 
* location: [string]
* remarks: [string]
* coords: [object] {lat [string], lon [string]}
* also: [string]
* type: [string]
* nr: [string] catalog number 
* quality: [string]
* qualitylt: [string] quality less than
* area: [string]
## References
- [xeno-canto.org](http://xeno-canto.org/)

## Release History
* 19/08/2022 - Update dependencies and fix tests to suit to newly xeno-canto collected recordings - Thanks UncleSamulus
* 07/02/2018 - v0.0.4 Fixing communication with xeno-canto api - Thanks @camilokorea
* 07/03/2014 - v0.0.3 Adjust API endpoint - Thanks @rowanoulton 
* 0.0.2 Implements advanced searches.
* 12/11/2013 xeno-canto inception, basic search 0.0.1

## License

Copyright (c) 2013 Patrick De Marta
Licensed under the [GNU GPL license](http://www.gnu.org/licenses/) .
