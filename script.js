$(document).ready(function() {

  //sticky header
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1) {
        $(".header-area").addClass("sticky");
      } else {
        $(".header-area").removeClass("sticky");
      }
  
      // Update the active section in the header
      updateActiveSection();
    });
  
    $(".header ul li a").click(function(e) {
      e.preventDefault(); 
  
      var target = $(this).attr("href");
  
      if ($(target).hasClass("active-section")) {
        return; 
      }
  
      if (target === "#home") {
        $("html, body").animate(
          {
            scrollTop: 0 
          },
          500
        );
      } else {
        var offset = $(target).offset().top - 40; 
  
        $("html, body").animate(
          {
            scrollTop: offset
          },
          500
        );
      }
  
      $(".header ul li a").removeClass("active");
      $(this).addClass("active");
    });

    // Image Viewer
    const images = document.querySelectorAll(".image-to-view");

    images.forEach(image => {
        image.addEventListener("click", function () {
            const newWindow = window.open("");
            newWindow.document.write(`<img src="${image.src}" alt="Image">`);
            newWindow.document.title = "Image Viewer";
        });
    });
});
  
  // Contact Form Submission
document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.querySelector("#contactForm");
  if (contactForm) {
      contactForm.addEventListener("submit", function(event) {
          event.preventDefault(); // Prevent default form submission
          
          // Get form values
          const name = document.querySelector("#name").value;
          const email = document.querySelector("#email").value;
          const message = document.querySelector("#message").value;
          
          // Validate form values
          if (name === "" || email === "" || message === "") {
              alert("Please fill in all fields.");
              return;
          }
          
          // Simulate form submission
          alert(`Thank you, ${name}! Your message has been sent.`);
          
          // Clear form fields
          contactForm.reset();
      });
  }
});

    //Initial content revealing js
    ScrollReveal({
      distance: "100px",
      duration: 2000,
      delay: 200
    });
  
    ScrollReveal().reveal(".header a, .profile-photo, .about-content, .education", {
      origin: "left"
    });
    ScrollReveal().reveal(".header ul, .profile-text, .about-skills, .internship", {
      origin: "right"
    });
    ScrollReveal().reveal(".project-title, .contact-title", {
      origin: "top"
    });
    ScrollReveal().reveal(".projects, .contact", {
      origin: "bottom"
    });
                                
  function updateActiveSection() {
    var scrollPosition = $(window).scrollTop();
  
    // Checking if scroll position is at the top of the page
    if (scrollPosition === 0) {
      $(".header ul li a").removeClass("active");
      $(".header ul li a[href='#home']").addClass("active");
      return;
    }
  
    // Iterate through each section and update the active class in the header
    $("section").each(function() {
      var target = $(this).attr("id");
      var offset = $(this).offset().top;
      var height = $(this).outerHeight();
  
      if (
        scrollPosition >= offset - 40 &&
        scrollPosition < offset + height - 40
      ) {
        $(".header ul li a").removeClass("active");
        $(".header ul li a[href='#" + target + "']").addClass("active");
      }
    });
  }
  

 