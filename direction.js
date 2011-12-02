var touchStartX;
var touchEndX;

document.ontouchstart = function(){
    touchStartX = undefined;
    touchEndX = undefined;
};
document.ontouchend = function(){
    if (touchStartX < touchEndX) {
      //  alert("left to right");
      gettingTheMenuOff();
    } else {
      //  alert("right to left");
      gettingTheMenu();
    }
};
document.ontouchmove = function(e){
    if(e.touches.length == 1){
        if (typeof touchStartX == "undefined") {
            touchStartX = e.touches[0].pageX;
        } else {
            touchEndX = e.touches[0].pageX;
        }
    }
};