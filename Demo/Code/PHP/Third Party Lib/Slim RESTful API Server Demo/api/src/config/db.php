<?php
class db {
    //Properties
    private $dbhost = "localhost";
    private $dbuser = "u345409132_demo1";
    private $dbpass = "demo10326";
    private $dbname = "u345409132_demo1";
    
    // Connetct
    public function connection(){
        $mysql_connection_str = "mysql:host=$this->dbhost;dbname=$this->dbname;";
        $dbConnection = new PDO($mysql_connection_str, $this->dbuser, $this->dbpass);
        $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        return $dbConnection;
    }
    
}
?>