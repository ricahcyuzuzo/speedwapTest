    $.widget("custom.val", {
       _create: function() { 
          this._span = $("<span>"); 
          this._span.css("background-color", this.options.color);    
          this._span.css("position", "relative");   
          $(this.element).append(this._span);
       },
       _setOption: function(key,value) { 
          switch (key) { 
             case "top_left": 
             this._span.css('top', '10px'); 
             this._span.css("left", '30px');
             this._span.text(value)
             break; 
             case "top_right":
             this._span.css('top', '10px'); 
             this._span.css("left", '680px');
             this._span.text(value);
             break; 
             case "bottom_left":
             this._span.css('top', '400px'); 
             this._span.css("left", '30px');
             this._span.text(value);
             break;
             case "bottom_right":
             this._span.css('top', '400px'); 
             this._span.css("left", '680px');
             this._span.text(value);
             break; 
             case "center":
             this._span.css('top', '200px'); 
             this._span.css("left", '370px');
             this._span.text(value);
             break;  
          } 
       },
    });