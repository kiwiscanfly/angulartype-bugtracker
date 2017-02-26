<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport"
		 content="width=device-width, initial-scale=1, user-scalable=yes, shrink-to-fit=no">
	<meta http-equiv="x-ua-compatible" content="ie-edge">

	<title>AngularType Skeleton</title>

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