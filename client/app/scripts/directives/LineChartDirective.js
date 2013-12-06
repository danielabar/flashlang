'use strict';

angular.module('flashlangApp').directive('angulard3LineChart', function () {
	return {
		restrict: 'E',	
		scope: {
			myjson : '@jsonValue',
			linechartId: '@linechartId'
		},
		replace:true,
		link : function(scope, elem, attr) {
			attr.$observe('jsonValue', function(data) {	
				if(data.length > 100) {
					scope.myjson = data;
			    	var array = JSON.parse(scope.myjson);
				    var beginnerData = array[0];
				    var intermediateData = array[1];
				    var advanceData = array[2];
	    			var beginnerValues = _.chain(beginnerData.values)
	    				.sortBy(function(scoreObj){ return scoreObj.playedDate; })
	    				.map(function(scoreObj) {
	    					var retObject = new Object();
			    			retObject.x = new Date(scoreObj.playedDate);
			    			retObject.y = scoreObj.score;
						    return retObject;
	    				}).value();

	    			var intermediateValues = _.chain(intermediateData.values)
	    				.sortBy(function(scoreObj){ return scoreObj.playedDate; })
	    				.map(function(scoreObj) {
	    					var retObject = new Object();
			    			retObject.x = new Date(scoreObj.playedDate);
			    			retObject.y = scoreObj.score;
						    return retObject;
	    				}).value();

	    			var advanceValues =	_.chain(advanceData.values)
	    				.sortBy(function(scoreObj){ return scoreObj.playedDate; })
	    				.map(function(scoreObj) {
	    					var retObject = new Object();
			    			retObject.x = new Date(scoreObj.playedDate);
			    			retObject.y = scoreObj.score;
						    return retObject;
	    				}).value();
					
			    	var jsonObject = [{values: beginnerValues, key: 'Beginner', color: '#ff7f0e'},
			    					  {values: intermediateValues,key: 'Intermediate', color: '#2ca02c'},
									  {values: advanceValues,key: 'Advanced', color: '#0080f1'}];

					nv.addGraph(function() {  
					  	var chart = nv.models.lineChart();
					  	chart.xAxis.axisLabel('Date').tickFormat(function(d) { 			
									return d3.time.format('%b %d')(new Date(d)); 
						});
						chart.yAxis.axisLabel('Score').tickFormat(d3.format('d'));
						var chartId = "lineChart_"+scope.linechartId;
						 d3.select("#"+chartId).append("svg").datum(jsonObject).transition().duration(500).call(chart);
						  // d3.select('#chart svg').datum(scoreData()).transition().duration(500).call(chart);
	  				  // nv.utils.windowResize(function() { d3.select('#chart svg').call(chart) }); -- we need to use this line.
		  			  return chart;
					});
				}
			});
		}
	}
})