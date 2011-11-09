<html>
<head>
<?php
$jsf = explode("\n",$_POST['jsf']);
foreach($jsf as $v)
{
	echo "<script src='$v'></script>\n";
}
	echo $_REQUEST['js']."\n";
?>
</head>
<body>
<?php
echo $_REQUEST['body'];
?>
</body>
</html>
