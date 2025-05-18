// // DOM Elements
// const cursorDot = document.getElementById('cursor-dot');
// const cursorOutline = document.getElementById('cursor-outline');
// const navLink = document.getElementById('nav-link');

// // console.log(cursorDot)
// // console.log(cursorOutline)
// // console.log(navLink)


// // Initialising the animation
// // function initCustomCursor() {
// //   if (cursorDot && cursorOutline && window.innerWidth > 1024) {
// //     // Track mouse movement
// //     document.addEventListener('mousemove', (e) => {
// //       const posX = e.clientX;
// //       const posY = e.clientY;
// //       cursorDot.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
// //       setTimeout(() => {
// //         cursorOutline.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
// //       }, 50);
// //     });

// //     // Add hover effects for interactive elements
// //     const hoverElements = document.querySelectorAll('a, button, .project-card, .filter-btn');

// //     hoverElements.forEach(element => {
// //       // When mouse enters an interactive element
// //       element.addEventListener('mouseenter', () => {
// //         // Expand the outline and dot
// //         cursorOutline.style.width = '60px';
// //         cursorOutline.style.height = '60px';
// //         cursorDot.style.transform = 'scale(1.5)';
// //       });

// //       // When mouse leaves an interactive element
// //       element.addEventListener('mouseleave', () => {
// //         // Return to original size
// //         cursorOutline.style.width = '40px';
// //         cursorOutline.style.height = '40px';
// //         cursorDot.style.transform = 'scale(1)';
// //       });
// //     });
// //   }
// // }

// // window.addEventListener('scroll', () => {
// //   const scrollPosition = window.scrollY;

// //   sections.forEach(section => {
// //     const sectionTop = section.offsetTop - 100;
// //     const sectionHeight = section.offsetHeight;
// //     const sectionId = section.getAttribute('id');

// //     if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
// //       document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('active');
// //     } else {
// //       document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.remove('active');
// //     }
// //   });
// // });

// // document.addEventListener('DOMContentLoaded', () => {
// //   initCustomCursor();
// // });

// // Add active class to nav link
// // window.addEventListener('scroll', () => {
// //   const scrollPosition = window.scrollY;

// //   sections.forEach(section => {
// //     const sectionTop = section.offsetTop - 100;
// //     const sectionHeight = section.offsetHeight;
// //     const sectionId = section.getAttribute('id');

// //     if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
// //       document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('active');
// //     } else {
// //       document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.remove('active');
// //     }
// //   });
// // });
// // nameElement.addEventListener("mouseenter", () => {
// //     nameElement.style.color = "red"; // Change color on hover
// //   });

// //   nameElement.addEventListener("mouseleave", () => {
// //     nameElement.style.color = "black"; // Reset color when mouse leaves
// //   });


// // Select all nav links
// const links = document.querySelectorAll("#nav-link a");

// links.forEach(link => {
//   link.addEventListener("mouseenter", () => {
//     link.style.color = "#bcd4e6";
//     link.style.fontWeight = "bold";
//     link.style.textDecoration = "underline";
//   });

//   link.addEventListener("mouseleave", () => {
//     link.style.color = "grey";
//     link.style.fontWeight = "normal";
//     link.style.textDecoration = "none";
//   });
// });
