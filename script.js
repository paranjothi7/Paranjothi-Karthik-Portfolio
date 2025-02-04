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

    // certification js
    document.addEventListener("DOMContentLoaded", function () {
      const certificationImages = document.querySelectorAll(".certification-card img");
  
      certificationImages.forEach(image => {
          image.addEventListener("click", function () {
              fetch(image.src)
                  .then(response => response.blob())
                  .then(blob => {
                      const blobUrl = URL.createObjectURL(blob);
                      const link = document.createElement("a");
                      link.href = blobUrl;
                      link.download = "certificate_" + Date.now() + ".jpg"; // Auto-generate filename
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                      URL.revokeObjectURL(blobUrl);
                  })
                  .catch(error => console.error("Error downloading the certificate:", error));
          });
      });
  });
  
  
    //Contact Me js
    document.addEventListener("DOMContentLoaded", function () {
      const form = document.querySelector(".contact-form form");
      
      form.addEventListener("submit", function (event) {
          event.preventDefault();
          
          const name = document.querySelector("input[name='name']").value;
          const email = document.querySelector("input[name='email']").value;
          const message = document.querySelector("textarea[name='message']").value;
          
          if (name && email && message) {
              const mailtoLink = `mailto:paranjothikarthik2003@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;
              window.location.href = mailtoLink;
              form.reset();
          } else {
              alert("Please fill in all fields before submitting.");
          }
      });
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
  

 