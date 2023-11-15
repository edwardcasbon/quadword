<?php

class Endpoint {
    protected $response;

    public function __construct () {
        $this->response = new Response();
    }
}