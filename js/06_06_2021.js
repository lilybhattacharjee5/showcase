// set dimensions & margins of graph
var width = 900;
var height = 450;
var margin = 40;

var size = 20;

var radius = Math.min(width, height) / 2 - margin;

// define helper functions
function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}

function partyToColor(party, alpha, mainColors, transientColors) {
	var finalColor;
	if (largest10Parties.includes(party)) {
		finalColor = mainColors(party);
	} else {
		finalColor = transientColors(party);
	}
	return hexToRGB(finalColor, alpha);
}

var div = d3.select('body').select('#text').insert('div', ':first-child')
		.attr('class', 'tooltip-donut')
		.html('placeholder text')
		.style('font-weight', 'bold')
		.style('padding', '5px')
		.style('display', 'inline-block')
		.style('opacity', 0);

// append svg object to div called 'party_breakdown_by_ls'
var svg = d3.select('#party_breakdown_by_ls')
	.append('svg')
	.attr('width', width)
	.attr('height', height)
	.attr('z-index', -1)
	.append('g')
	.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

var largest10Parties = ['Indian National Congress', 'Bharatiya Janata Party', 'Communist Party of India (Marxist)',  'Janata Party', 'Janata Dal', 'Independent', 'Dravida Munnetra Kazhagam', 'Socialist Party', 'Communist Party', 'All India Anna Dravida Munnetra Kazhagam'];

var mainColors = d3.scaleOrdinal()
	.domain(
		largest10Parties
		)
	.range(d3.schemeDark2);

var arc = d3.arc()
  .innerRadius(0)
  .outerRadius(radius);

var mapper = [ls1, ls2, ls3, ls4, ls5, ls6, ls7, ls8, ls9, ls10, ls11, ls12, ls13, ls14, ls15, ls16, ls17];

var local = d3.local();

var mouseoverParty;
var mouseoverPartyNum;

var legendDots = svg.selectAll('legendDots');
var legendLabels = svg.selectAll('legendLabels');

function update(input) {
	// clear previous data
	svg.selectAll('.legendDots').remove();
	svg.selectAll('.legendLabels').remove();

	var data = mapper[input - 1];

	var lsnum = d3.select('#lsnum')
		.html(input.toString());

	var pie = d3.pie()
		.value(function(d) { return d.value; })
		.sort(function(a, b) { 
			return d3.ascending(a.key, b.key)
		});

	var data_ready = pie(d3.entries(data));
	var u = svg.selectAll('path')
		.data(data_ready);

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
			return partyToColor(d.data.key, 1, mainColors, transientColors);
		})
		.attr('stroke', 'white')
		.style('stroke-width', '2px');

	path
		.on('mouseover', function (d, i) {
			d3.select(this).transition()
				.attr('opacity', '.85');

            div.transition()
            	.duration(50)
            	.style('opacity', 1);

            mouseoverParty = d.data.key;
            mouseoverPartyNum = d.data.value;

            div.html(`<span>${mouseoverParty}: ${mouseoverPartyNum}</span>`)
            	.style('background-color', function () {
            		return partyToColor(mouseoverParty, 0.2, mainColors, transientColors);
            	});
        })
     	.on('mouseout', function (d, i) {
     		d3.select(this).transition()
     			.attr('opacity', '1');

     		div.transition()
     			.duration('50')
     			.style('opacity', 0)
        });

    // create legend
    legendDots
    	.data(Object.keys(data))
    	.enter()
    	.append('circle')
    		.attr('cx', 250)
    		.attr('cy', function(d, i) { return -100 + i * 25 })
    		.attr('r', 7)
    		.attr('class', 'legendDots')
    		.style('fill', function(d) {
    			return partyToColor(d, 1, mainColors, transientColors);
    		});

    legendLabels
    	.data(Object.keys(data))
    	.enter()
    	.append('text')
    		.attr('class', 'legendLabels')
    		.attr('x', 270)
    		.attr('y', function(d, i) { return -110 + i * (size + 5) + (size / 2)})
    		.text(function(d) { return d; })
    		.attr('font-size', '12px')
    		.attr('text-anchor', 'left')
    		.style('alignment-baseline', 'middle');

	u.exit()
		.remove();
}

update(Math.round(mapper.length / 2));
