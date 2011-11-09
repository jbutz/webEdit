define([
	'jQuery',
	'CodeMirror'
	],
	function($, CodeMirror)
	{
		$(function()
		{
			// Define a Function for the menus
			function doMenu(id)
			{
				var domID = id.replace("#","");
				var jqID = id
				if(id.substring(0,1) != "#") { jqID = "#"+id; }

				var vis = $(".tabDiv:visible[id!='"+domID+"']")
				vis.each(function()
				{
					if($(this).attr('id') != id && "#" + $(this).attr('id') != id)
					{
						$(this).slideToggle("slow");
					}
				});
				if(vis.length == 0)
				{
					$(id).slideToggle("slow");
				}
				else
				{
					$(id).delay("slow").slideToggle("slow");
				}
			}
			//$("#topbar ul").headerBar();
			// Add the form for data submission
			$("body").append("<form id='ifrmForm' style='display: none;'></form>");
			$("#ifrmForm").append("<textarea name='cssCode'></textarea>")
							  .append("<textarea name='jsCode'></textarea>")
							  .append("<textarea name='htmlCode'></textarea>")
							  .append("<input type='checkbox' name='jquery1.7' value=''>")
							  .append("<input type='checkbox' name='jqueryui' value=''>");
			// divs for the tabs
			// JS Tab
			$("body").append("<div id='tabJS' style='display: none;' class='tabDiv'></div>");
			$("#lnkJS").click(function() { doMenu("#tabJS"); });
			// CSS Tab
			$("body").append("<div id='tabCSS' style='display: none;' class='tabDiv'></div>");
			$("#lnkCSS").click(function() { doMenu("#tabCSS"); });
			// Body Tab
			$("body").append("<div id='tabBody' style='display: none;' class='tabDiv'></div>");
			$("#lnkBody").click(function() { doMenu("#tabBody"); });
			// Preview Tab
			$("body").append("<div id='tabPreview' style='display: none; background: #FFF;' class='tabDiv'></div>");
			$("#lnkPreview").click(function() { doMenu("#tabPreview"); });
			// Save Tab
			$("body").append("<div id='tabSave' style='display: none;' class='tabDiv'></div>");
			$("#lnkSave").click(function() { doMenu("#tabSave"); });
		});
	}
);
