<?php
require_once( './utilities.php' );
spl_autoload_register( 'autoloader' );

$api = new API();

$response = $api->request(
    $_SERVER['REQUEST_URI'],
    get_params_from_request( $_SERVER ),
    $_SERVER['REQUEST_METHOD']
);

header( 'Content-type: application/json' );
http_response_code( $response->code );
echo json_encode( $response->body );