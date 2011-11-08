(function($) {
	$.widget("ui.headerBar", {
		options: {
			firstLogo: true
		},
		_create: function()
		{
			this._setOption('firstLogo',this.options.firstLogo);
			this.refresh();
		},
		refresh: function()
		{
			var self = this;
			$(this.element).addClass("ui-widget-header");
			$(this.element).addClass("ui-headerBar-header");
			$(this.element).children().removeClass("ui-headerBar-logo");
			$(this.element).children().addClass("ui-headerBar-item");
			$(this.element).children().last().addClass("ui-headerBar-item-last");
			if(self.firstLogo)
			{
				$(this.element).children().first().addClass("ui-headerBar-logo");
			}

		},
		// Use the _setOption method to respond to changes to options
		_setOption: function( key, value )
		{
			switch( key ) {
				case "firstLogo":
					this.firstLogo = value;
					this.refresh();
				break;
			}
			// In jQuery UI 1.8, you have to manually invoke the _setOption method from the base widget
			if(jQuery.ui.version >= "1.8" && jQuery.ui.version < "1.9")
			{
				$.Widget.prototype._setOption.apply( this, arguments );
			}
			// In jQuery UI 1.9 and above, you use the _super method instead
			if(jQuery.ui.version >= "1.9")
			{
				this._super( "_setOption", key, value );
			}
		},
		// Use the destroy method to clean up any modifications your widget has made to the DOM
		destroy: function()
		{
			this._destroy();
			// In jQuery UI 1.8, you must invoke the destroy method from the base widget
			if(jQuery.ui.version >= "1.8" && jQUery.ui.version < "1.9")
			{
				$.Widget.prototype.destroy.call( this );
			}
		},
		// In jQuery UI 1.9 and above, you would define _destroy instead of destroy and not call the base method
		_destory: function()
		{
			$(this.element).removeClass("ui-widget-header");
			$(this.element).removeClass("ui-headerBar-header");
			$(this.element).children().removeClass("ui-headBar-logo");
			$(this.element).children().removeClass("ui-headerBar-item");
			$(this.element).children().removeClass("ui-headerBar-item-last");
		}
	});
}(jQuery));
