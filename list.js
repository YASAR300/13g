// document.addEventListener("DOMContentLoaded", () => {
//     const textElement = document.querySelector(".text");
  
//     let lastScrollY = window.scrollY;
  
//     window.addEventListener("scroll", () => {
//       const currentScrollY = window.scrollY;
  
//       if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        
//         textElement.classList.add("hidden");
//       } else if (currentScrollY < lastScrollY) {
        
//         textElement.classList.remove("hidden");
//       }
  
//       lastScrollY = currentScrollY;
//     });
//   });

  

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


  
  





const btnsForOne = document.querySelectorAll('.btn-for-one'); 
const gradBgs = document.querySelectorAll('.btn-grad-bg'); 
const gradTexts = document.querySelectorAll('.btn-grad-text .text-size'); 
const smallTexts = document.querySelectorAll('.btn-grad-text .small-text p'); 


const buttonStates = [
  {
    states: [
      { className: 'is-green', text: 'Design Innovation', smallText: 'Fresh perspectives.' },
      { className: 'is-golden', text: 'Strategic Planning', smallText: 'Tailored strategies.' },
      { className: 'is-blue', text: 'User Experience', smallText: 'Engaging solutions.' },
    ],
    currentState: 0,
  },
  {
    states: [
      { className: 'is-red', text: 'Marketing Campaigns', smallText: 'Creative storytelling.' },
      { className: 'is-purple', text: 'SEO & Optimization', smallText: 'Higher visibility.' },
      { className: 'is-yellow', text: 'Content Creation', smallText: 'Compelling narratives.' },
    ],
    currentState: 0,
  },
  {
    states: [
      { className: 'is-pink', text: 'Tech Development', smallText: 'Innovative solutions.' },
      { className: 'is-cyan', text: 'Branding', smallText: 'Identity refinement.' },
      { className: 'is-orange', text: 'Data Analytics', smallText: 'Insights that matter.' },
    ],
    currentState: 0,
  },
];

btnsForOne.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

   
    const { states, currentState } = buttonStates[index];

    
    gradTexts[index].innerHTML = `<strong>Offer:</strong> ${states[currentState].text}`;
    smallTexts[index].textContent = states[currentState].smallText;

    
    let currentRotation = parseFloat(getComputedStyle(btn).transform.split(',')[1]) || 0;
    let newRotation = currentRotation + 360;

    btn.style.transition = 'transform 1s ease';
    btn.style.transform = `translateX(1150%) rotate(${newRotation}deg)`;

    
    gradBgs[index].classList.remove(...states.map(state => state.className));
    gradBgs[index].classList.add(states[currentState].className);

    
    setTimeout(() => {
      gradBgs[index].style.transition = 'opacity 0.5s ease';
      gradBgs[index].style.opacity = 2;

      gradTexts[index].style.transition = 'opacity 0.5s ease';
      gradTexts[index].style.opacity = 2;

      smallTexts[index].style.transition = 'opacity 0.5s ease';
      smallTexts[index].style.opacity = 2;
    }, 1000);

    
    buttonStates[index].currentState = (currentState + 1) % states.length;
  });
});


