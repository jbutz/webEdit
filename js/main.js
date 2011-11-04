require.config({
	paths: {
		jQuery: 'jquery/jquery.load',
		CodeMirror: 'cm/cm.load'
	}
});
require([
	'app'	
	],
	function(app)
	{
		$(function()
		{

		});
	}
);
