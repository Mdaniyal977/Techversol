// document.addEventListener('DOMContentLoaded', function () {
//     const sections = document.querySelectorAll('.section');
//     const columns = document.querySelectorAll('.col2');
  
//     let lastScrollPosition = 0;
  
//     function handleScroll() {
//       const currentScrollPosition = window.scrollY || window.pageYOffset;
//       const scrollingDown = currentScrollPosition > lastScrollPosition;
  
//       sections.forEach((section, index) => {
//         const sectionRect = section.getBoundingClientRect();
//         const middlePoint = sectionRect.top + sectionRect.height / 3 ;
//         const endSectionPoint = sectionRect.bottom - window.innerHeight * 0.2;
  
//         if (
//           (scrollingDown && middlePoint <= window.innerHeight * 0.9) ||
//           (!scrollingDown && endSectionPoint >= window.innerHeight * 0.9)
//         ) {
//           columns[index].style.opacity = '1';
//         } else {
//           columns[index].style.opacity = '0';
//         }
//       });
  
//       lastScrollPosition = currentScrollPosition;
//     }
  
//     window.addEventListener('scroll', handleScroll);
//   });
  