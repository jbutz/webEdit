<?php
?>
<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>Prototype</title>
	<meta name="description" content="">
	<meta name="author" content="">
	<style type='text/css'>
	<?
		echo str_replace("\n","\n\t",trim($_REQUEST['cssCode']));
	?>
	</style>
	<script type='text/javascript'>
	<?
		echo str_replace("\n","\n\t",trim($_REQUEST['jsCode']));
	?>
	</script>
</head>
<body>
<?
	echo str_replace("\n","\n\t",trim($_REQUEST['htmlCode']));
?>
</body>
</html>
