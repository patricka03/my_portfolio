// Custom cursor effect
document.addEventListener('DOMContentLoaded', function() {
  const cursorDot = document.getElementById('cursor-dot');
  const cursorOutline = document.getElementById('cursor-outline');

  // Only enable custom cursor on non-touch devices with screen width > 768px
  if (window.matchMedia("(min-width: 768px)").matches && !('ontouchstart' in window)) {
    document.addEventListener('mousemove', function(e) {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      // Delayed movement for outline
      setTimeout(function() {
        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
      }, 80);
    });

    // Scale up effect on links and buttons
    const clickables = document.querySelectorAll('a, button, .btn, input[type="submit"]');
    clickables.forEach(elem => {
      elem.addEventListener('mouseenter', function() {
        cursorOutline.style.width = '60px';
        cursorOutline.style.height = '60px';
        cursorOutline.style.backgroundColor = 'rgba(0, 123, 255, 0.1)';
      });

      elem.addEventListener('mouseleave', function() {
        cursorOutline.style.width = '40px';
        cursorOutline.style.height = '40px';
        cursorOutline.style.backgroundColor = 'transparent';
      });
    });
  } else {
    // Hide custom cursor on mobile/touch devices
    cursorDot.style.display = 'none';
    cursorOutline.style.display = 'none';
  }

  // Mobile menu toggle
  const menuToggle = document.createElement('button');
  menuToggle.className = 'menu-toggle';
  menuToggle.innerHTML = '☰';
  menuToggle.setAttribute('aria-label', 'Toggle navigation menu');

  const navbar = document.querySelector('.navbar .container');
  const navUl = document.querySelector('.horizontal-nav');

  // Insert the menu toggle button before the navigation
  navbar.insertBefore(menuToggle, navbar.querySelector('div:last-child'));

  // Toggle mobile menu
  menuToggle.addEventListener('click', function() {
    navUl.classList.toggle('active');
    menuToggle.innerHTML = navUl.classList.contains('active') ? '✕' : '☰';
  });

  // Close mobile menu when clicking a nav link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 900) {
        navUl.classList.remove('active');
        menuToggle.innerHTML = '☰';
      }
    });
  });

  // Close mobile menu when resizing window
  window.addEventListener('resize', function() {
    if (window.innerWidth > 900) {
      navUl.classList.remove('active');
      menuToggle.innerHTML = '☰';
    }
  });

  // Animate progress bars when visible
  // const progressBars = document.querySelectorAll('.progress-bar');

  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to animate progress bars when they're visible
  // function animateProgressBars() {
  //   progressBars.forEach(bar => {
  //     if (isInViewport(bar) && !bar.classList.contains('animated')) {
  //       const width = bar.style.width;
  //       bar.style.width = '0%';

  //       setTimeout(() => {
  //         bar.style.width = width;
  //         bar.classList.add('animated');
  //       }, 100);
  //     }
  //   });
  // }

  // Run on page load and scroll
  // window.addEventListener('scroll', animateProgressBars);
  // window.addEventListener('load', animateProgressBars);

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
