import ui.ImageView;
import device;
// import math.util as util;

exports = Class(ui.ImageView, function (supr) {


  this.init = function (opts) {
    opts = merge(opts, {});

    supr(this, 'init', [opts]);

    this.build();
  };

  this.build = function() {
    
  }; //build()  

}); //GameScreen