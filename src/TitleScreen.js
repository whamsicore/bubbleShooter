import ui.ImageView;
import ui.TextView;
import device;
// import math.util as util;

exports = Class(ui.ImageView, function (supr) {


  this.init = function (opts) {
    opts = merge(opts, {});

    supr(this, 'init', [opts]);

    this.build();
  };

  this.build = function() {

    var title = new ui.TextView({
      superview: this,
      x: 0,
      y: 300,
      width: device.width,
      height: 200,
      autoSize: false,
      size: 180,
      verticalAlign: 'middle',
      horizontalAlign: 'center',
      wrap: true,
      color: '#FFFFFF', 
      text: "Bubble Shooter!"
    });

    var startButton = new ui.ImageView({
      superview: this,
      x: device.width/2-121,
      y: device.height/2,
      horizontalAlign: 'center',
      width: device.width,
      height: 100,
      autoSize: true,
      image: "resources/images/startbutton.png"
    });
    
    startButton.on('InputSelect', function (event, point) {
      console.log("TitleScreen -------> title:launch");
      
      this.getSuperview().emit('title:launch');

    });

  }; //build()  

}); //GameScreen