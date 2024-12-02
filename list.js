document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".text");
  
    let lastScrollY = window.scrollY;
  
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        
        textElement.classList.add("hidden");
      } else if (currentScrollY < lastScrollY) {
        
        textElement.classList.remove("hidden");
      }
  
      lastScrollY = currentScrollY;
    });
  });

  

const hoverContainers = document.querySelectorAll('.three-1, .three-2, .three');

hoverContainers.forEach(container => {
  const video = container.querySelector('.video');

  container.addEventListener('mouseover', () => {
    video.style.opacity = 1;
    video.play(); 
  });

  container.addEventListener('mouseout', () => {
    video.style.opacity = 0; 
    video.pause(); 
    video.currentTime = 0; 
  });
});


  
  
  