gsap.registerPlugin(ScrollTrigger);

let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

gsap.utils.toArray("section").forEach((section, i) => {
  section.bg = section.querySelector(".bg"); 

  // Give the backgrounds some random images

  
  // the first image (i === 0) should be handled differently because it should start at the very top.
  // use function-based values in order to keep things responsive
  gsap.fromTo(section.bg, {
    backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
  }, {
    backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: () => i ? "top bottom" : "top top", 
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true // to make it responsive
    }
  });

});




// gsap.utils.toArray(".parallax").forEach((section, i) => {
//   section.bg = section.querySelector(".bg"); 

//   // Give the backgrounds some random images
//   section.bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;

//   // Do the parallax effect on each section
//   if (i) {
//     section.bg.style.backgroundPosition = `50% ${innerHeight / 2}px`;

//     gsap.to(section.bg, {
//       backgroundPosition: `50% ${-innerHeight / 2}px`,
//       ease: "none",
//       scrollTrigger: {
//         trigger: section,
//         scrub: true
//       }
//     });
//   } 
// });
