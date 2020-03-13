// Side Bar Navigation

$(document).ready(function(){
  $('.button-collapse').sideNav({
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
 }
 );
 $('.collapsible').collapsible();
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
        $(document).ready(function(){
          $(window).scrollTop(0);
          
      });   
       
    },
    function(error) {
        console.log("FAILED", error);
        alert("Opps something went wrong please try again ..");
    }
  
  );
  return false;
  }
  

// Type Writer Effect- heading in showcase

// Adapted from Traversy Media Pure JavaScript Type Writer Effect (2018):
class TypeWriter {
  constructor(txtElement, words, wait = 1000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
  }

  type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];

      // Check if deleting
      if (this.isDeleting) {
          // Remove char
          this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
          // Add char
          this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      // Insert txt into element
      this.txtElement.innerHTML = `<h1 class="txt">${this.txt}</h1>`;

      // Initial Type Speed
      let typeSpeed = 100;

      if (this.isDeleting) {
          typeSpeed /= 2;
      }

      // If word is complete
      if (!this.isDeleting && this.txt === fullTxt) {
          // Make pause at end
          typeSpeed = this.wait;
          // Set delete to true
          this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          // Move to next word
          this.wordIndex++;
          // Pause before start typing
          typeSpeed = 500;
      }

      setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}