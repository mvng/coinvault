<?php 
<<<<<<< HEAD

//set time zone for when pulling dates
date_default_timezone_set('America/Los_Angeles');


//******************** SECTION BELOW IS FOR GOLD ********************


//connecting to the gold data
$gold_oz_json = file_get_contents('https://www.quandl.com/api/v1/datasets/WSJ/AU_EIB.json?auth_token=yNHhNn-3_J2TMae97Dza');
$gold_bid_ask_json = file_get_contents('https://www.quandl.com/api/v1/datasets/PERTH/GOLD_USD_D.json?auth_token=yNHhNn-3_J2TMae97Dza');

//decoding it to json
$gold_oz_obj = json_decode($gold_oz_json, true);
$gold_bid_ask_obj = json_decode($gold_bid_ask_json, true);

//to handle data via arrays
$gold_dates_arr = array();
$gold_oz_arr = array();
$gold_bid_arr = array();
$gold_ask_arr = array();

$x = 0;
	foreach ($gold_oz_obj['data'] as $gold_oz_data){ //loop through data for dates and oz value
		$gold_dates_arr[] = date('M j',strtotime($gold_oz_data[0])); 
		$gold_oz_arr[] = $gold_oz_data[1];
		if (++$x == 30) break;
	}	

=======
//************  Brent Crude Prices  ****************
$br_json = file_get_contents('https://www.quandl.com/api/v1/datasets/BUNDESBANK/BBK01_WT5511.json?auth_token=yNHhNn-3_J2TMae97Dza');
$br_obj = json_decode($br_json, true);
//Build arrayss
$br_label_arr = array();
$br_value_arr = array();
>>>>>>> adf47cd873ea731384bfd593c6c9be1bf2ac5758
$i = 0;
	foreach ($br_obj['data'] as $br_data){ //loop through data
		$br_label_arr[] = date('M j',strtotime($br_data[0])); //pull dates
		$br_value_arr[] = $br_data[1]; //pull prices

		if (++$i == 30) break;
	}
<<<<<<< HEAD

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
$gold_change = $gold_ask_arr[0]-$gold_ask_arr[1]; //current change price for ask (selling)


//******************** SECTION BELOW IS FOR SILVER ********************


//connecting to the silver data
$silver_oz_json = file_get_contents('https://www.quandl.com/api/v1/datasets/WSJ/AG_EIB.json?auth_token=yNHhNn-3_J2TMae97Dza');
$silver_bid_ask_json = file_get_contents('https://www.quandl.com/api/v1/datasets/PERTH/SLVR_USD_D.json?auth_token=yNHhNn-3_J2TMae97Dza');

//decoding it to json
$silver_oz_obj = json_decode($silver_oz_json, true);
$silver_bid_ask_obj = json_decode($silver_bid_ask_json, true);

//to handle data via arrays
$silver_dates_arr = array();
$silver_oz_arr = array();
$silver_bid_arr = array();
$silver_ask_arr = array();

$x = 0;
	foreach ($silver_oz_obj['data'] as $silver_oz_data){ //loop through data for dates and oz value
		$silver_dates_arr[] = date('M j',strtotime($silver_oz_data[0])); 
		$silver_oz_arr[] = $silver_oz_data[1];
		if (++$x == 30) break;
	}	

$i = 0;
	foreach ($silver_bid_ask_obj['data'] as $silver_bid_ask_data){ //loop through data for bid ask and change
		$silver_bid_arr[] = $silver_bid_ask_data[5]; 
		$silver_ask_arr[] = $silver_bid_ask_data[6]; 
		if (++$i == 30) break;
	}

//calculated values for daily and overall values
$silver_daily = $silver_oz_arr[0]-$silver_oz_arr[1]; //daily value of gold
$silver_overall = $silver_oz_arr[0]-$silver_oz_arr[29]; //overall value of gold

//reversed data with comments so that it can be graphed on chart
$silver_dates = array_reverse($silver_dates_arr); //reverse the data for the graphing chart
$silver_oz = array_reverse($silver_oz_arr); //reverse the data for the graphing chart
$silve_dates = implode('","', $silver_dates); //comma sep to be used for chat.js
$silver_oz = implode(", ", $silver_oz); //comma sep to be used for chart.js

//bid, ask and change data 
$silver_bid = $silver_bid_arr[0]; //current bid price
$silver_ask = $silver_ask_arr[0]; //current ask price
$silver_change = $silver_ask_arr[0]-$silver_ask_arr[1]; //current change price for ask (selling)


//******************** SECTION BELOW IS FOR PLATINUM ********************


//connecting to the gold data
$plat_oz_json = file_get_contents('https://www.quandl.com/api/v1/datasets/WSJ/PL_MKT.json?auth_token=yNHhNn-3_J2TMae97Dza');
$plat_bid_ask_json = file_get_contents('https://www.quandl.com/api/v1/datasets/PERTH/PLAT_USD_D.json?auth_token=yNHhNn-3_J2TMae97Dza');

//decoding it to json
$plat_oz_obj = json_decode($plat_oz_json, true);
$plat_bid_ask_obj = json_decode($plat_bid_ask_json, true);

//to handle data via arrays
$plat_dates_arr = array();
$plat_oz_arr = array();
$plat_bid_arr = array();
$plat_ask_arr = array();

$x = 0;
	foreach ($plat_oz_obj['data'] as $plat_oz_data){ //loop through data for dates and oz value
		$plat_dates_arr[] = date('M j',strtotime($plat_oz_data[0])); 
		$plat_oz_arr[] = $plat_oz_data[1];
		if (++$x == 30) break;
	}	

$i = 0;
	foreach ($plat_bid_ask_obj['data'] as $plat_bid_ask_data){ //loop through data for bid ask and change
		$plat_bid_arr[] = $plat_bid_ask_data[5]; 
		$plat_ask_arr[] = $plat_bid_ask_data[6]; 
		if (++$i == 30) break;
	}

//calculated values for daily and overall values
$plat_daily = $plat_oz_arr[0]-$plat_oz_arr[1]; //daily value of gold
$plat_overall = $plat_oz_arr[0]-$plat_oz_arr[29]; //overall value of gold

//reversed data with comments so that it can be graphed on chart
$plat_dates = array_reverse($plat_dates_arr); //reverse the data for the graphing chart
$plat_oz = array_reverse($plat_oz_arr); //reverse the data for the graphing chart
$plat_dates = implode('","', $plat_dates); //comma sep to be used for chat.js
$plat_oz = implode(", ", $plat_oz); //comma sep to be used for chart.js

//bid, ask and change data 
$plat_bid = $plat_bid_arr[0]; //current bid price
$plat_ask = $plat_ask_arr[0]; //current ask price
$plat_change = $plat_ask_arr[0]-$plat_ask_arr[1]; //current change price for ask (selling)


//******************** tests *********************
echo $gold_daily;
echo ' ';
echo $gold_overall;
echo ' ';
echo $gold_bid;
echo ' ';
echo $gold_ask;
echo ' ';
echo $gold_change;
echo ' ';
echo $silver_daily;
echo ' ';
echo $silver_overall;
echo ' ';
echo $silver_bid;
echo ' ';
echo $silver_ask;
echo ' ';
echo $silver_change;
echo ' ';
echo $plat_daily;
echo ' ';
echo $plat_overall;
echo ' ';
echo $plat_bid;
echo ' ';
echo $plat_ask;
echo ' ';
echo $plat_change;
=======
$br_labels = array_reverse($br_label_arr); //reverse the data for ASC
$br_values = array_reverse($br_value_arr); //reverse the data for ASC
$br_labels = implode('","', $br_labels); //comma sep
$br_values = implode(", ", $br_values); //comma sep
>>>>>>> adf47cd873ea731384bfd593c6c9be1bf2ac5758
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
			labels : [<?php echo '"'.$br_labels.'"'; ?>],
			datasets : [
				{
					label: "Brent Crude",
					fillColor : "rgba(151,187,205,0.3)",
					strokeColor : "#999",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#000",
					pointHighlightStroke : "rgba(151,187,205,1)",
					data : [<?php echo $br_values; ?>]
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