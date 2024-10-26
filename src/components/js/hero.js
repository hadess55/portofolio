

$('hero-container').mousemove(function(e) {
    let x = e.pageX;
    let y = e.pageY;
    
    $('.overlay').css('display', 'none');
    $('.light').css('background','radial-gradient(circle at ' + x + 'px ' + y + 'px, transparent, #000 30%)');
  });