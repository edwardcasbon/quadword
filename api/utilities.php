<?php

function autoloader ( $class = '' ) {
    $class = strtolower( $class );
    $parts = explode( '_', $class );
    $path = implode( DIRECTORY_SEPARATOR, $parts );
    include_once( './' . $path . '.php' );
}

function is_error ( $response ) {
    return (
        property_exists( $response, 'isError' ) &&
        ( $response->isError === true )
    );
}

function get_params_from_request ( $request ) {
    $params = null;
    $method = $request['REQUEST_METHOD'];

    switch($method) {
        case 'GET':
            $params = $_GET;
            break;
        case 'POST':
            $params = $_POST;
            break;
        case 'PUT':
            parse_str( file_get_contents( "php://input" ), $params );
            break;
        default:
            $params = $_GET;
            break;
    }

    return $params;
}

function get_endpoint_from_uri ( $uri = '' ) {
    $url = parse_url( $uri );
    $uri = trim( $url['path'], '/' );
    $endpoint = explode( '/', $uri );
    return $endpoint[0];
}

function get_action_from_uri ( $uri = '' ) {
    $url = parse_url( $uri );
    $uri = trim( $url['path'], '/' );
    $parts = explode( '/', $uri );
    if ( count( $parts ) > 1 ) {
        return $parts[1];
    } else {
        return 'index';
    };
}