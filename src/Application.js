//import ui.TextView as TextView;
import ui.StackView;
import device; 

// import src.TitleScreen as TitleScreen;
import src.GameScreen as GameScreen;
import src.TitleScreen as TitleScreen;

exports = Class(GC.Application, function () {

  this.initUI = function () {
    this.view.style.backgroundColor = 'red';

    var rootView = new ui.StackView({
      superview: this,
      // x: device.width / 2 - 160,
      // y: device.height / 2 - 240,
      backgroundColor: 'green',
      x: 0,
      y: 0,
      clip: true,
      width: device.width,
      height: device.height,
      // scale: device.width / 320
    }); //initialize the view stack 

    var _GameScreen = new GameScreen({
      superview: this.view,
    // image: 'resources/images/background.png',
      backgroundColor: '#333',
      x: 0,
      y: 0,
      width: device.width,
      height: device.height, 
      visible:false
    });

    var _TitleScreen = new TitleScreen({
      superview: this.view,
    // image: 'resources/images/background.png',
      backgroundColor: 'black',
      x: 0,
      y: 0,
      width: device.width,
      height: device.height, 
      visible:false
    });

    _TitleScreen.on('title:launch', function (){
      rootView.push(_GameScreen);

    });

    rootView.push(_TitleScreen);

    // _GameScreen.on('InputSelect', function (event, point) {
    //   console.log("GameScreen clicked", rootView.stack);
    //   rootView.pop();
    // }); 

    // rootView.on('InputSelect', function (event, point) {
    //   console.log("rootView clicked", rootView.stack);
    //   rootView.push(_GameScreen);
    // }); 

  };

  this.launchUI = function () {

  };

});
