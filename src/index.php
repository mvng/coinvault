<?php 
//************  Brent Crude Prices  ****************
$br_json = file_get_contents('https://www.quandl.com/api/v1/datasets/BUNDESBANK/BBK01_WT5511.json?auth_token=yNHhNn-3_J2TMae97Dza');
$br_obj = json_decode($br_json, true);
//Build arrayss
$br_label_arr = array();
$br_value_arr = array();
$i = 0;
	foreach ($br_obj['data'] as $br_data){ //loop through data
		$br_label_arr[] = date('M j',strtotime($br_data[0])); //pull dates
		$br_value_arr[] = $br_data[1]; //pull prices

		if (++$i == 30) break;
	}
$br_labels = array_reverse($br_label_arr); //reverse the data for ASC
$br_values = array_reverse($br_value_arr); //reverse the data for ASC
$br_labels = implode('","', $br_labels); //comma sep
$br_values = implode(", ", $br_values); //comma sep
?>

<script type="text/javascript">var br_labels = "<?= $br_labels ?>";</script>
<script type="text/javascript">var br_values = "<?= $br_values ?>";</script>

<script type="text/javascript" src="file.js"></script>

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


<script type="text/javascript">
  var gold_labels = <?php echo '"'.$br_labels.'"'; ?>;
  var gold_values = <?php echo $br_values; ?>;
</script>
<script src="main.js" type="text/javascript"></script>

<script>
document.getElementById("demo").innerHTML = gold_labels;
document.getElementById("demo").innerHTML = gold_values;

</script>



	<script>
		var lineChartData = {
			labels : [gold_labels],
			datasets : [
				{
					label: "Brent Crude",
					fillColor : "rgba(151,187,205,0.3)",
					strokeColor : "#999",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#000",
					pointHighlightStroke : "rgba(151,187,205,1)",
					data : [gold_values]
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