$(function() {
	imgWidth = $('.img1').width();
	setSliderPosition();
});

$(window).resize(function () {
	imgWidth = $('.img1').width();
	reserSliderPosition();
	setSliderPosition();
});

$( ".slider" ).draggable({
  axis: "x",
  cursor: "e-resize",
  iframeFix: true,
  delay: 0,
  scroll: false,
  containment: ".container",
  drag: function(event, ui){
            $('.img1').css('clip', 'rect(0px,' + ui.position.left + 'px,800px,0px)');
        },
  start: function( event, ui ) {
	  $('.slider').css('background', 'transparent');
  },
  stop: function( event, ui ) {
	  $('.slider').css('background', '#ffffff');
  }
});

function setSliderPosition() {
	$('.img1').css('clip', 'rect(0px, ' + imgWidth/2 + 'px, ' + imgWidth + 'px, 0px)');
}
function reserSliderPosition() {
	$('.slider').css('left', '50%');
}
