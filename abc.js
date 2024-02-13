// function toggleMenu() {
//     const menu = document.getElementById('navbarMenu');
//     menu.style.display === 'none' || menu.style.display === '' ? menu.style.display = 'flex' : menu.style.display = 'none';
//   }

function toggleMenu() {
  const menu = document.getElementById('navbarMenu');
  menu.classList.toggle('show');
}

  

  
  // Initialize the typing animation
  const typingAnimationElement = document.getElementById('typing-animation');

  // Create an array of typing text
  const typingTexts = [
  'Software Developer  ',
  'Backend Developer  ',
  'Full Stack Developer   ',
  ];

  // Create a function to display the typing animation for a given text
  function playTypingAnimation(text) {
  // Loop through each character and add it to the element
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
    typingAnimationElement.textContent += text[i];
    }, i * 200); // Increase the delay to slow down the typing animation
  }

  // Once the animation is complete, reset the text and start over
  setTimeout(() => {
    typingAnimationElement.textContent = '';
    playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
  }, text.length * 200);
  }

  // Start the typing animation loop
  playTypingAnimation(typingTexts[0]);



  // nav bar active class

  document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.forEach(function(link) {
          link.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Function to check if an element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Function to set active link
    function setActiveLink() {
      navLinks.forEach(function(link) {
        const sectionId = link.getAttribute('href');
        const section = document.querySelector(sectionId);
        if (isInViewport(section)) {
          navLinks.forEach(function(link) {
            link.classList.remove('active');
          });
          link.classList.add('active');
        }
      });
    }
  
    // Set active link on page load
    setActiveLink();
  
    // Set active link on scroll
    window.addEventListener('scroll', setActiveLink);
  });
  

  // zoom effect on project
  $(document).ready(function() {
    $(".block-20").on("mouseenter", function() {
      $(this).css("transform", "scale(1.1)");
    }).on("mouseleave", function() {
      $(this).css("transform", "scale(1)");
    });
  });
  