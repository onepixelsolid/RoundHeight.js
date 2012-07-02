!function( $ ){

  "use strict"

 /* ROUND HEIGHT CLASS DEFINITION
  * ============================= */
  
  var RoundHeight = function ( element, options ) {
		this.init('roundHeight', element, options)
  }

  RoundHeight.prototype = {

    constructor: RoundHeight
    
  , init: function ( type, element, options ) {
      this.type         = type
      this.$element     = $(element)
      this.options      = options = $.extend({}, $.fn.roundHeight.defaults, options, $(element).data())
      this.roundTo      = this.options.roundTo 

      this.draw()
      this.events()
  	}
  
  , draw: function () {
      // clear previously set heights
      this.$element.css('height', 'auto')

      var h = this.$element.outerHeight(false)
      var new_h = Math.ceil((h / this.roundTo)) * this.roundTo

      // diff of height and outerHeight
      var diff_h = h - this.$element.height()

      this.$element.height(new_h - diff_h)
	  }
	
	, events: function () {
      var that = this;

      // Re-draw every to often in case the height changes.
      this.int = setInterval(function () {
        that.draw()
      }, 2000);
	  } 
  }
  
  /* ROUND HEIGHT PRIVATE METHODS
  * ============================= */


  /* ROUND HEIGHT PLUGIN DEFINITION
   * ============================== */

  $.fn.roundHeight = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('roundHeight')
        , options = typeof option == 'object' && option
      if (!data) $this.data('roundHeight', (data = new RoundHeight(this, options)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.roundHeight.Constructor = RoundHeight
  
  $.fn.roundHeight.defaults = {
    height: false, 
  }

  /* ROUND HEIGHT DATA-API
    * ==================== */
   
  $(function () {
  })

}( window.jQuery );