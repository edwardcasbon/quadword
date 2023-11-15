<?php

class Endpoint_User extends Endpoint {
    public function index ( $method, $params ) {
        if ( $method === 'GET' ) {
            $user = new Model_User();
            $this->response->body = $user->getUser( $params['id'] );
            return $this->response;

        } else if ( $method === 'POST' ) {
            $user = new Model_User();
            $this->response->body = $user->createUser( $params );
            return $this->response;

        } else if ( $method === 'PUT' ) {
            $user = new Model_User();
            $this->response->body = $user->updateUser( $params );
            return $this->response;
            
        } else {
            return $this->response->method_not_valid( $method );
        }
    }
}