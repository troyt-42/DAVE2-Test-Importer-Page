<?php


// grab passed parameters
// The request is a JSON request.
// We must read the input.
// $_POST or $_GET will not work!
 
$data = file_get_contents("php://input");
$objData = json_decode($data);

$val_id = $objData->val_id;


// Open the File and Parse.
$data = $fields = array(); $i = 0;
$handle = fopen('values.csv', 'r');
// Headrow
$head = fgetcsv($handle, 4096, ',', '"');

if ($handle) {
    while (($row = fgetcsv($handle, 4096)) !== false) {
        if (empty($fields)) {
            $fields = $row;
            continue;
        }
        foreach ($row as $k=>$value) {
            $data[$i][$k] = $value;
        }
        $i++;
    }
    if (!feof($handle)) {
        echo "Error: unexpected fgets() fail\n";
    }
    fclose($handle);
}



// arrange data and send as JSON
$val_array = array("values"=>$data,"header"=>$head);
echo json_encode($val_array);







class CSVData{
    public $file;
    public $data;
    public $fp;
    public $caption=true;
    public function CSVData($file=''){
        if ($file!='') getData($file);
    }
    function getData($file){
        if (strpos($file, 'tp://')!==false){
            copy ($file, '/tmp/csvdata.csv');
            if ($this->fp=fopen('/tmp/csvdata.csv', 'r')!==FALSE){
                $this->readCSV();
                unlink('tmp/csvdata.csv');
            }
        } else {
            $this->fp=fopen($file, 'r');
            $this->readCSV();
        }
        fclose($this->fp);
    }
    private function readCSV(){
        if ($this->caption==true){
            if (($captions=fgetcsv($this->fp, 1000, ","))==false) return false;
        }
        $row=0;
        while (($data = fgetcsv($this->fp, 1000, ",")) !== FALSE) {
            for ($c=0; $c < count($data); $c++) {
                $this->data[$row][$c]=$data[$c];
                if ($this->caption==true){
                    $this->data[$row][$captions[$c]]=$data[$c];
                }
            }
            $row++;
        }
    }
}
