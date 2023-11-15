<?php

class DB {
    protected $user = "root";
    protected $pass = "root";
    protected $host = "localhost";
    protected $dbname = "quadword";

    protected $db;
    
    public function __construct () {
        $dsn = "mysql:dbname={$this->dbname};host={$this->host}";
		try {
			$this->db = new PDO( $dsn, $this->user, $this->pass );
			$this->db->setAttribute( PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ );
		} catch ( PDOException $exception ) {
			exit( "Database connection failed: " . $exception->getMessage() . "\n" );
		}
    }

    public function query( $query = "" ) {
        return $this->db->query( $query )->fetchAll();
    }
}