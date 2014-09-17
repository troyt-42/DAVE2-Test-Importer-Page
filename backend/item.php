<?php


// grab passed parameters
// The request is a JSON request.
// We must read the input.
// $_POST or $_GET will not work!
 
$data = file_get_contents("php://input");
$objData = json_decode($data);

$item_id = $objData->item_id;

// grab item record

if (!empty($item_id))
{
	$itemData = array(
		"ItemID" => "21345",
	    "Name" => "Test Item NAME",
	    "Description" => "Test Item DESCRIPTION",
	    "Location" => "Test Item LOCATION",
	    "Area" => "Test Item AREA", 
	    "ItemType" => "Test Item TYPE",
	    "ValueType" => "Test Item VALUE TYPE",
	    "Origin" => "Test Item ORIGIN",
	    "LastChange" => "Test Item LASTCHANGE",
	    "Count" => "Test Item COUNT",
	    "DB" => 1,
	    "ValTable" => "Test Item VALTABLE",
	);


	$seqList = array(
		"seq_id" => 23456,
	    "start_se" => "2014-01-01",
	    "end_se" => "2014-07-07",
	);

	$expList = array(
		"exp_id" => 4576,
	    "name" => "export name",
	    "owner" => "Paul Kazmir",
	);


}


// arrange data and send as JSON
$data = array("seq"=>array($seqList), "itm"=>array($itemData),  "exp"=>array($expList));
echo json_encode($data);

?>

