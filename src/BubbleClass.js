import ui.ImageView;
import device;
// import math.util as util;

exports = Class(ui.ImageView, function (supr) {

  /**
   * Initialize properties
   */
  var rowIndex;
  var colIndex;
  

  this.init = function (opts) {
    opts = merge(opts, {});

    supr(this, 'init', [opts]);

  };

}