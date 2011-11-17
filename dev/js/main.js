require.config({
	paths: {
		jQuery: 'jquery/jquery.load',
		CodeMirror: 'cm/cm.load'
	}
});
require([
	//'modernizr',
	'app'	
	],
	function(app)
	{
		$(function()
		{

		});
	}
);
