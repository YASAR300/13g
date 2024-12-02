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
  