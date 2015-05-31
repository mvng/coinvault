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



$someVar = 1;

echo "Hi I AM A PHP FILE";

?>



<?php
  $mytext = $_POST['mytext'];
  echo $mytext;
?>