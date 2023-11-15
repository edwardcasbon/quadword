<?php

class Endpoint_Word extends Endpoint {
    public function index ( $method, $params ) {
        if ( $method === 'GET' ) {
            $word = new Model_Word();
            $this->response->body = ( isset( $params['word'] ) ) ? 
                $word->getWord( $params['word'] ) : 
                $word->getRandomWord();
            
            return $this->response;
        } else {
            return $this->response->method_not_valid( $method );
        }
    }
}