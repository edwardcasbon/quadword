<?php

class Response {
    protected $code = 200;
    protected $isError = false;
    protected $body;

    function __construct () {}

    function __set ( $name = '', $value = null ) {
        $this->$name = $value;
    }

    function __get ( $name = '' ) {
        return $this->$name;
    }

    function method_not_valid ( $method = "" ) {
        $this->code = 405;
        $this->isError = true;
        $this->body = "Method {$method} not valid for this endpoint";
        return $this;
    }
}