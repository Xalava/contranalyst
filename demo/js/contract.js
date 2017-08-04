var urlParams = new URLSearchParams(window.location.search);
var contract = [];

console.log("contract ref: ",urlParams.get('contract')); // "edit"


jQuery(document).ready(function($) {
	var column;
	if(urlParams.has('contract')){
		column = urlParams.getAll('contract');
	} else {
		column="A";
	}

	var	sampleKey= "1gP7_C0G3LvYTe64RNRwQfowVQh6VD88iDz-NrHsR7EU";
	var outputKey="19LZ06YmqLIHghbx4BwmzttTAG5HFnOLYyeJ34mK3AaA"
	var apiKey =  "AIzaSyAexwmcQixqiGcIUZ31daSA8Uq5miY7pFM";

	var sample =  "https://sheets.googleapis.com/v4/spreadsheets/"+sampleKey+"/values/"+column+"1:"+column+"2000?key="+apiKey;
	var output =  "https://sheets.googleapis.com/v4/spreadsheets/"+outputKey+"/values/"+column+"1:"+column+"6?key="+apiKey;
	var clausesTag = ["title","effective","termination","mark-info","law"] ///matches the order of output file

	var content= "";



	// console.log(sample);
  $.getJSON(
    	sample, 
    function(data) {

  		for (var i = data.values.length - 1; i >= 0; i--) {
  			contract[i]=data.values[i][0];
  		}
  		// console.log(contract);
		  $("#title-content").html(contract[0])

  		$.getJSON(
    		output, 
    		function(outputData) {
    			console.log("Full ouputData:",outputData);
    				//applying analysis layer
	    		var param;

	    		if(outputData.hasOwnProperty('values')){
	    			// we iterate over rows, skiping the first one
	    			for (var k = outputData.values.length - 1; k >= 1; k--) {
    					// we check is there is an input, assuming it's correcty formated
    					console.log("outputdata value", k, " :",outputData.values[k]);
    					if(outputData.values[k].hasOwnProperty("0") && outputData.values[k][0].length>0){ 
    						param = outputData.values[k][0].split(";");
		    				var line = param[0];
		    				if(!param[1]){
		    					param[0]=0
		    				}
		    				if(!param[2]){
		    					param[0]=2000
		    				}
		    				console.log("params:",param);
		    				console.log("contract line",line," : ", contract[line]);
		    				if(contract[line]){
		    					contract[line]=contract[line].substring(0,param[1])+"<span id='"+clausesTag[k]+"' class='clause "+clausesTag[k]+"'>"+ contract[line].substring(param[1],param[2])+"</span>"+ contract[line].substring(param[2]);
		    				}
    					}
    				} 
    			}

	    		//shaping full text
		  		for (var j = 1; j < contract.length; j++) {
		  			if(contract[j]){                
			  			content+='<div class="row"><div class="col-lg-12"><div class="panel panel-default animated slideInUp  "><div class="" style="padding:2px;"><button class="btn btn-default btn-xs fa fa-comments pull-right"></button><button class="btn btn-warning btn-xs fa fa-warning pull-right"></button></div><div class="panel-body">';
			        content+= contract[j];
			        content+='</div></div></div></div>';
		       	}
		  		}

		  		$("#main-content").html(content)
    		}
    	); // end getJSON ouput
  	} // end of getJSON sample
  );

	// $.ajax({
	//   url:sample,
	//   success: function(datao){
	//     console.log(datao	);
	//   }
	// });


	// $.ajax({
	//   url:'https://spreadsheets.google.com/feeds/list/'+sampleKey+'/1/public/basic?alt=json',
	//   success: function(datao){
	//     console.log(datao	);
	//   }
	// });



	$("a").on('click', function() {
   var divclass = $(this).attr('class');
     // console.log('divclass = ' + divclass);
   var x = $('#' + divclass).offset().top-100;
     // console.log(x);
   $('html,body').animate({scrollTop: x}, 500);
   return false;
});

});




// vue version
// var app = new Vue({
//   el: '#app',
//   data: {
//     contract: {},
//     sample: "https://content-sheets.googleapis.com/v4/spreadsheets/"+sampleKey+"/values/A1:C200?key="+apiKey


//   },
//   created: function () {
//   	this.fetchData();
// },
//   methods: {
//     fetchData: function () {

//       $.getJSON(sample, (data) => {
//         // var parsedData = JSON.parse(data);


//         // for (var i = 0; i < parsedData.feed.entry.length - 1; i++) {
//         // 	this.contract.append(parsedData.feed.entry[i]);
//         // }
//         this.contract = data;
//       });
//     }
//   },
//   computed: {
//         shouldPrint: function () {
//             return true;//this.contract.paragraphgs.length < 10;
//         }
//   }
// });