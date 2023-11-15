<?php

class Endpoint_Score extends Endpoint {
    public function index ( $method, $params ) {
        if ( $method === 'POST' ) {
            $score = new Model_Score();
            $this->response->body = $score->createScore( $params );
            return $this->response;
        } else {
            return $this->response->method_not_valid( $method );
        }
    }
}