<?php
$allowed_paths = array(
	'bugs',
);

$request_uri = $_SERVER["REQUEST_URI"];

$parts      = explode('/', $request_uri);
$last_index = count($parts)-1;

//strip out the empty values
$url_args = array();
foreach ($parts as $indx => $prt) {
	if (!empty($prt)) {
		$url_args[] = str_replace('..', '', htmlentities($prt));
	}
}

if (isset($url_args[1]) && !in_array($url_args[1], $allowed_paths)) {
	header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found");
	die('404 "'.$url_args[1].'" not in allowed paths '.print_r($allowed_paths, true));
}

?><!DOCTYPE html>
<html lang="en">
<head>
	<base href="/angulartype-bugtracker/">
	<meta charset="utf-8">
	<meta name="viewport"
		 content="width=device-width, initial-scale=1, user-scalable=yes, shrink-to-fit=no">
	<meta http-equiv="x-ua-compatible" content="ie-edge">

	<title>AngularType Bug Tracker</title>

	<link rel="stylesheet" type="text/css" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/global.css">

	<!-- Polyfills for older browsers -->
	<script type="text/javascript" src="node_modules/core-js/client/shim.min.js"></script>

	<script type="text/javascript" src="node_modules/zone.js/dist/zone.js"></script>
	<script type="text/javascript" src="node_modules/reflect-metadata/Reflect.js"></script>
	<script type="text/javascript" src="node_modules/systemjs/dist/system.src.js"></script>

	<script type="text/javascript" src="node_modules/jquery/dist/jquery.min.js"></script>
	<script type="text/javascript" src="node_modules/tether/dist/js/tether.min.js"></script>
	<script type="text/javascript" src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

	<!-- Systemjs Config -->
	<script type="text/javascript" src="systemjs.config.js"></script>

	<script type="text/javascript">
		System.import('app').catch(function(err){
			console.error(err);
		})
	</script>
</head>
<body>
	<my-app>Loading...</my-app>
</body>
</html>