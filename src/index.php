<?php 

//set time zone for when pulling dates
date_default_timezone_set('America/Los_Angeles');

//******************** SECTION BELOW IS FOR GOLD ********************

//connecting to the gold data
$gold_oz_json = file_get_contents('https://www.quandl.com/api/v1/datasets/BUNDESBANK/BBK01_WT5511.json?auth_token=yNHhNn-3_J2TMae97Dza');
$gold_bid_ask_json = file_get_contents('https://www.quandl.com/api/v1/datasets/CHRIS/MX_SXA1.json?auth_token=yNHhNn-3_J2TMae97Dza');

//decoding it to json
$gold_oz_obj = json_decode($gold_oz_json, true);
$gold_bid_ask_obj = json_decode($gold_bid_ask_json, true);

//to handle data via arrays
$gold_dates_arr = array();
$gold_oz_arr = array();
$gold_bid_arr = array();
$gold_ask_arr = array();
$gold_change_arr = array();

$x = 0;
	foreach ($gold_oz_obj['data'] as $gold_oz_data){ //loop through data for dates and oz value
		$gold_dates_arr[] = date('M j',strtotime($gold_oz_data[0])); 
		$gold_oz_arr[] = $gold_oz_data[1];
		if (++$x == 30) break;
	}	

$i = 0;
	foreach ($gold_bid_ask_obj['data'] as $gold_bid_ask_data){ //loop through data for bid ask and change
		$gold_bid_arr[] = $gold_bid_ask_data[1]; 
		$gold_ask_arr[] = $gold_bid_ask_data[2]; 
		$gold_change_arr[] = $gold_bid_ask_data[8];
		if (++$i == 30) break;
	}

//calculated values for daily and overall values
$gold_daily = $gold_oz_arr[0]-$gold_oz_arr[1]; //daily value of gold
$gold_overall = $gold_oz_arr[0]-$gold_oz_arr[29]; //overall value of gold

//reversed data with comments so that it can be graphed on chart
$gold_dates = array_reverse($gold_dates_arr); //reverse the data for the graphing chart
$gold_oz = array_reverse($gold_oz_arr); //reverse the data for the graphing chart
$gold_dates = implode('","', $gold_dates); //comma sep to be used for chat.js
$gold_oz = implode(", ", $gold_oz); //comma sep to be used for chart.js

//bid, ask and change data 
$gold_bid = $gold_bid_arr[0]; //current bid price
$gold_ask = $gold_ask_arr[0]; //current ask price
$gold_change = $gold_change_arr[0]; //current change price

//******************** SECTION BELOW IS FOR SILVER ********************
//
// code to be written after finding appropriate quandl data
//
//******************** SECTION BELOW IS FOR PLATINUM ********************
//
// code to be written after finding appropriate quandl data
//

?>


<!doctype html>
<html>
	<head>
		<title>Crude Line Chart</title>
		<script src="Chart.js"></script>
	</head>
	<body>
		<h1>Quandl Data with Charts.js using JSON and PHP</h1>
		<div style="width:90%">
			<div>
				<canvas id="canvas" height="400" width="800"></canvas>
			</div>
		</div>


	<script>
		var lineChartData = {
			labels : [<?php echo '"'.$gold_dates.'"'; ?>],
			datasets : [
				{
					label: "Brent Crude",
					fillColor : "rgba(151,187,205,0.3)",
					strokeColor : "#999",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#000",
					pointHighlightStroke : "rgba(151,187,205,1)",
					data : [<?php echo $gold_oz; ?>]
				}
			]

		}

	window.onload = function(){
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myLine = new Chart(ctx).Line(lineChartData, {
			responsive: true
		});
	}


	</script>
	</body>
</html>