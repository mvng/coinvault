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



<?php
  $mytext = $_POST['mytext'];
  echo $mytext;
?>




<!doctype html>
<head>
  <meta charset="utf-8">

  <title>My Parse App</title>
  <meta name="description" content="My Parse App">
  <meta name="viewport" content="width=device-width">

  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
  <script type="text/javascript" src="http://www.parsecdn.com/js/parse-1.4.2.min.js"></script>
    
    <script type = "text/javascript" src ="../js/crud.js"> </script>
</head>


<body>
    
    
    <h1>HAHAH SHIT IM A PHP PAGE BUT IM IN HTML IN DISGUISE TRICKED YA<<h1>
   <script>
    
    console.log("ur mum");
    
    </script>
     </body>