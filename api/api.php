<?php

class API {
    public function request ( $uri = '', $params = [], $method = 'GET' ) {
        $response = new Response();
        $endpoint = get_endpoint_from_uri( $uri );
        $className = "Endpoint_" . ucwords( $endpoint );
        if ( class_exists( $className ) ) {
            $action = get_action_from_uri( $uri );
            $endpointClass = new $className();
            if ( method_exists( $endpointClass, $action ) ) {
                $response = $endpointClass->$action( $method, $params );
            } else {
                $response->code = 404;
                $response->body = "Action `{$action}` not found on endpoint `{$endpoint}`";
            }
        } else {
            $response->code = 404;
            $response->body = "Endpoint `{$endpoint}` not found";
        }

        return $response;
    }
}