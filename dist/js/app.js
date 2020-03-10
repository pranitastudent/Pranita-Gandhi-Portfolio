// Side Bar Navigation

$(document).ready(function(){
  // Init Sidenav
  $('.button-collapse').sideNav();
});  

// Card Flip
$(document).ready(function(){
  $("#card").flip();
});

//  Scroll Spy
$(document).ready(function(){
$('.scrollspy').scrollSpy();
});

// Back to the top button

$(document).ready(function() {
$(window).scroll(function() {
  if ($(this).scrollTop() > 400) {
      $('#topBtn').fadeIn();
  }
  else {
      $("#topBtn").fadeOut();
  }
});
// scroll body to 0px on click
$('#topBtn').click(function() {
  $('body,html').animate({
          scrollTop: 0
      },
      100
  );
  return false;
});
});


//  Contact Form JS

(function () {
emailjs.init("user_SKMrQyETOHlh9PnTFZs4p");     
})();

function sendMail(contactForm) {
emailjs.send("gmail", "pranita", {
  "name": contactForm.name.value,
  "phone":contactForm.phone.value,
  "email": contactForm.email.value,
  "query_request": contactForm.message.value
})
.then(
  function(response) {
      alert("Your message has been successfully sent");
      console.log("SUCCESS", response);
      window.location.reload(true);
     
  },
  function(error) {
      console.log("FAILED", error);
      alert("Opps something went wrong please try again ..");
  }

);
return false;
}