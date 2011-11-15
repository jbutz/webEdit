define([
	'jQuery',
	'CodeMirror'
	],
	function($, CodeMirror)
	{
		$(function()
		{
			// Define a Function for the menus
			function doMenu(id, self)
			{
				var domID = id.replace("#","");
				var jqID = id;
				var cmKey = domID.replace("tab","");
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
					$(id).slideToggle("slow", function() { $('body').trigger('refreshCM',[cmKey]); });
				}
				else
				{
					$(id).delay("slow").slideToggle("slow",function() { $('body').trigger('refreshCM',[cmKey]); });
				}
				if(self != undefined && self != null)
				{
					$('li.ui-active').removeClass('ui-active');
					if(window.last != self)
					{
						$(self).parent().addClass('ui-active');
					}
					else
					{
						self = "";
					}
				}
				window.last = self;
			}
			$("body").bind("refreshCM",function(e, cmKey)
			{
				if(window.cmtxt[cmKey])
				{
					window.cmtxt[cmKey].refresh();
				}
			});
			//$("#topbar ul").headerBar();
			// Add the form for data submission
			$("body").append("<form id='ifrmForm' style='display: none;' target='frmPreview' method='post' action='preview.php'></form>");
			$("#ifrmForm").append("<textarea name='cssCode'></textarea>")
							  .append("<textarea name='jsCode'></textarea>")
							  .append("<textarea name='htmlCode'></textarea>")
							  .append("<input type='checkbox' name='jquery1.7' value=''>")
							  .append("<input type='checkbox' name='jqueryui' value=''>");
			// divs for the tabs
			window.cmtxt = {};
			// JS Tab
			$("body").append("<div id='tabJS' style='display: none;' class='tabDiv'></div>");
			$("#lnkJS").click(function() { doMenu("#tabJS", this); });
			$("#tabJS")
		  		.append("<form><textarea id='txtJS' name='txtJS'></textarea></form>");
			window.cmtxt.JS = CodeMirror.fromTextArea(document.getElementById("txtJS"),{
				mode: "text/javascript",
				lineNumbers: true,
				firstLineNumber: 1,
				gutter: true,
				fixedGutter: true
			});
			// CSS Tab
			$("body").append("<div id='tabCSS' style='display: none;' class='tabDiv'></div>");
			$("#lnkCSS").click(function() { doMenu("#tabCSS", this); });
			$("#tabCSS").append("<form><textarea id='txtCSS' name='txtCSS'>\n\n</textarea></form>");
			window.cmtxt.CSS = CodeMirror.fromTextArea(document.getElementById("txtCSS"),{
				mode: "text/css",
				lineNumbers: true,
				firstLineNumber: 1,
				gutter: true,
				fixedGutter: true
			});
			// Body Tab
			$("body").append("<div id='tabBody' style='display: none;' class='tabDiv'></div>");
			$("#lnkBody").click(function() { doMenu("#tabBody", this); });
			$("#tabBody").append("<form><textarea id='txtBody' name='txtBody'>\n\n</textarea></form>");
			window.cmtxt.Body = CodeMirror.fromTextArea(document.getElementById("txtBody"),{
				mode: "text/html",
				lineNumbers: true,
				firstLineNumber: 1,
				gutter: true,
				fixedGutter: true
			});
			// Preview Tab
			$("body").append("<div id='tabPreview' style='display: none; background: #FFF;' class='tabDiv'></div>");
			$("#lnkPreview").click(function() { $('body').trigger('loadPreview'); doMenu("#tabPreview", this); });
			$("#tabPreview").append("<iframe src='about:blank' name='frmPreview' id='frmPreview' frameborder='0'></iframe>");

			// Save Tab
			$("body").append("<div id='tabSave' style='display: none;' class='tabDiv'></div>");
			$("#lnkSave").click(function() { doMenu("#tabSave", this); });

			$('body').bind('loadPreview',function()
			{
				console.log("FIRE");
				$('#ifrmForm textarea[name="cssCode"]').val(window.cmtxt.CSS.getValue());
				$('#ifrmForm textarea[name="jsCode"]').val(window.cmtxt.JS.getValue());
				$('#ifrmForm textarea[name="htmlCode"]').val(window.cmtxt.Body.getValue());
				$("#ifrmForm").submit();
			});
		});
	}
);
