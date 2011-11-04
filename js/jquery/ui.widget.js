// our "Widget" object constructor
var Widget = function( options, element ){
    this.options = options;
    this.element = element;

    this._init();
};

Widget.prototype = {
    
    // _init fires when your instance is first created
    // (from the constructor above), and when you
    // attempt to initialize the widget again (by the bridge)
    // after it has already been initialized.
    _init: function(){
        // init code
    },
    option: function( key, value ){
        
        // get/change options AFTER initialization:
        // you don't have to support all these cases,
        // but here's how:
        
        // signature: $('#foo').bar({ cool:false });
        if( $.isPlainObject( key ) ){
            this.options = $.extend(true, this.options, key);
        
        // signature: $('#foo').option('cool'); - getter
        } else if ( key && typeof value === "undefined" ){
            return this.options[ key ];
            
        // signature: $('#foo').bar('option', 'baz', false);
        } else {
            this.options[ key ] = value;
        }
        
        return this; // make sure to return the instance!
    },
    publicFn: function(){ // notice no underscore
        return "public method";
    },
		refresh: function()
		{
			var self = this;
			$(this.element).addClass("ui-widget-header");
			$(this.element).children.removeClass("ui-headerBar-logo");
			if(this.firstLogo)
			{
				$(this.element).children.first().addClass("ui-headerBar-logo");
			}

		},
    _privateFn: function(){
        return "private method";
    }
};


//(function( $ ) {
	$.widget( "headerBar", {
		// These options will be used as defaults
		options: { 
		firstLogo: true
		},
		// Set up the widget
		_create: function()
		{
			this.refresh();
		},
		refresh: function()
		{
			var self = this;
			$(this.element).addClass("ui-widget-header");
			$(this.element).children.removeClass("ui-headerBar-logo");
			if(this.firstLogo)
			{
				$(this.element).children.first().addClass("ui-headerBar-logo");
			}

		},
		// Use the _setOption method to respond to changes to options
		_setOption: function( key, value )
		{
			switch( key ) {
				case "firstLogo":
					this.firstLogo = value;
				break;
			}
			// In jQuery UI 1.8, you have to manually invoke the _setOption method from the base widget
			$.Widget.prototype._setOption.apply( this, arguments );
			// In jQuery UI 1.9 and above, you use the _super method instead
			this._super( "_setOption", key, value );
		},
		// Use the destroy method to clean up any modifications your widget has made to the DOM
		destroy: function()
		{
			$(this.element).removeClass("ui-widget-header");
			$(this.element).children().removeClass("ui-headBar-logo");
			// In jQuery UI 1.8, you must invoke the destroy method from the base widget
			$.Widget.prototype.destroy.call( this );
		},
		// In jQuery UI 1.9 and above, you would define _destroy instead of destroy and not call the base method
		_destory: function()
		{
			$(this.element).removeClass("ui-widget-header");
			$(this.element).children().removeClass("ui-headBar-logo");
		}
	});
//}( jQuery ) );
