<?php

class Endpoint_Leaderboard extends Endpoint {
    public function index ( $method, $params ) {
        if ( $method === 'GET' ) {
            $leaderboard = new Model_Leaderboard();
            $this->response->body = $leaderboard->getLeaderboard();
            return $this->response;
        } else {
            return $this->response->method_not_valid( $method );
        }
    }
}