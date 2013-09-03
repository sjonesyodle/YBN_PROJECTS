var fs = require("fs");


var data = JSON.parse( fs.readFileSync("./data.json") ), i;


for ( i in data ) {
	if ( data[i].urls ) {
		data[i].urls = "<script src='http://www.yodleresources.net/Unified/embed.js' type='text/javascript' async='true' id='unified-tracking' data-config='maidpro:"+ data[i].urls.trim() +"'></script>"
	}
	else {
		console.log("FAILURE");
		return false;
	}
}

fs.writeFile( "data.json", JSON.stringify(data) );