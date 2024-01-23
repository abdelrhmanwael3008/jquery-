// $('.items').on('click',function(e){
//     let ahref = e.target.getAttribute('href')
    
//     let secionOffset = $(ahref).offset().top;

//     $('body').animate({scrollTop:secionOffset},(3000))
    
// })
$(document).ready(function() {
  
  $(".items").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 900, function() {
        window.location.hash = hash;
      });
    }
  });

  
  $(".closebtn").on("click", function() {
    $("#leftMenu").toggleClass("open");
  });
});

$('.openNav').on('click',function(){
    $('.sidenav').animate({width:'250px'} , 100)
 
})
$('.closebtn').on('click',function(){
    $('.sidenav').animate({width:'0px'} , 100)
    
})

$(document).ready(function() {
  $(".toggle").on("click", function() {
    var $inner = $(this).next(".inner");
    $(".inner").not($inner).slideUp(1000);
    $inner.slideToggle(1000);
  });
});
var countDownDate = new Date("Jan 5, 2025 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  
  var distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  $("#days").text(days + "d");
  $("#hours").text(hours + "h");
  $("#minutes").text(minutes + "m");
  $("#seconds").text(seconds + "s");
  

  if (distance < 0) {
    clearInterval(x);
    $("#days").text("0d");
    $("#hours").text("0h");
    $("#minutes").text("0m");
    $("#seconds").text("0s");
  }
}, 1000);


$(document).ready(function() {
  $('#myTextarea').on('input', function() {
    var text = $(this).val();
    var remainingChars = 100 - text.length;
    $('#charCount').text(remainingChars + ' characters remaining');
    if (text.length > 100) {
      $(this).val(text.substring(0, 100));
    }
  });
});


