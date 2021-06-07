// set dimensions & margins of graph
var width = 450;
var height = 450;
var margin = 40;

var radius = Math.min(width, height) / 2 - margin 

// append svg object to div called 'party_breakdown_by_ls'
var svg = d3.select('#party_breakdown_by_ls')
	.append('svg')
	.attr('width', width)
	.attr('height', height)
	.append('g')
	.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

var largest10Parties = ['Indian National Congress', 'Bharatiya Janata Party', 'Communist Party of India (Marxist)',  'Janata Party', 'Janata Dal', 'Independent', 'Dravida Munnetra Kazhagam', 'Socialist Party', 'Communist Party', 'All India Anna Dravida Munnetra Kazhagam'];

var color = d3.scaleOrdinal()
	.domain(
		largest10Parties
		)
	.range(d3.schemeDark2);

var arc = d3.arc()
  .innerRadius(0)
  .outerRadius(radius)

var mapper = [ls1, ls2, ls3, ls4, ls5, ls6, ls7, ls8, ls9, ls10, ls11, ls12, ls13, ls14, ls15, ls16, ls17];

var local = d3.local();

function update(input) {
	var data = mapper[input - 1];

	var lsnum = d3.select('#lsnum')
		.html(input.toString())

	var pie = d3.pie()
		.value(function(d) { return d.value; })
		.sort(function(a, b) { 
			return d3.ascending(a.key, b.key)
		})

	var data_ready = pie(d3.entries(data))
	var u = svg.selectAll('path')
		.data(data_ready)

	var smallerUpdateParties = [];
	for (let smallerParty in Object.keys(data)) {
		smallerUpdateParties.push(smallerParty);
	}

	var transientColors = d3.scaleOrdinal()
		.domain(
			smallerUpdateParties
			)
		.range(d3.schemePastel1);

	var path = u.enter()
		.append('path');

	path.each(function(d) {
      		local.set(this, d)
   		})
		.merge(u)
		.transition()
		.attrTween('d', function(d) {
	    	var i = d3.interpolate(local.get(this), d);
      		local.set(this, i(0));
	      		return function(t) {
	        		return arc(i(t));
	      	};
	    })
		.duration(500)
		.attr('fill', function(d) { 
			if (largest10Parties.includes(d.data.key)) {
				return color(d.data.key);
			}
			return transientColors(d.data.key);
		})
		.attr('stroke', 'white')
		.style('stroke-width', '2px')

	path
		.on('mouseover', function (d, i) {
        	d3.select(this).transition()
               .attr('opacity', '.85')
           })
     	.on('mouseout', function (d, i) {
        	d3.select(this).transition()
               .attr('opacity', '1')
           });

	u.exit()
		.remove()
}

update(9)
