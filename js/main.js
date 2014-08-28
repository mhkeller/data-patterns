queue()
	.defer(d3.csv, '../data/ebola.csv')
	.defer(d3.json, '../data/africa.topojson')
	.await(function(err, ebola, africa){
		// console.log(ebola, africa);
		transformData(ebola);
	});

function transformData(ebola){
	
	var ebola_nested = d3.nest()
		.key(function(d) { return d.country_name })
		.map(ebola);

	console.log(ebola_nested)

}