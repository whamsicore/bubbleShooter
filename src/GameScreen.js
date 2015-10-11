import ui.ImageView;
import device;

import math.util as util;
import math.geom.Point as Point;

var DEFAULT = {
  width: 100, 
  height:100
}

exports = Class(ui.ImageView, function (supr) {


  this.init = function (opts) {
    opts = merge(opts, {});

    supr(this, 'init', [opts]);

    this.build();
  };

  this.build = function() {
    
    var cannonObject = new ui.ImageView({
      superview: this,
      image: "resources/images/cannon.png",
      
      x: ((device.width / 2) - (DEFAULT.width / 2)),
      y: (device.height - (DEFAULT.height * 4)),

      width: DEFAULT.width,
      height: DEFAULT.height * 3,

      anchorX: DEFAULT.width / 2,
      anchorY: (DEFAULT.height * 4) - (DEFAULT.width / 2)
    });     


    this.on('InputMove', function (event, point) {
      updateCannonAngle(point);
    });



    function updateCannonAngle(point){
      // calculate deltaX and delta Y from imaginary point at the mid point at the bottom of the screen
      var deltaX = point.x-device.width/2;
      var deltaY = device.height -point.y;

      var newAngle = Math.PI/2-(new Point(deltaX, deltaY)).getAngle();
      console.log("newAngle = "+(newAngle));      
      // update cannon angle
      cannonObject.style.r = newAngle;
    };

  }; //build()  
}); //GameScreen


