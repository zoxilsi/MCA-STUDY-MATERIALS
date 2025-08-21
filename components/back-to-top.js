// Create button
const backToTopButton = document.createElement("button");
backToTopButton.className = "back-to-top";
backToTopButton.setAttribute('aria-label', 'Back to top');
backToTopButton.innerHTML = '<i class="fa-solid fa-circle-up"></i>';

// Append to body
document.body.appendChild(backToTopButton);

// CSS styles
const style = document.createElement("style");
style.textContent = `
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
  border: none;
  width: 55px;
  height: 55px;
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s, transform 0.3s, background 0.3s;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 9999;
  font-size: 20px;
}
.back-to-top.visible {
  opacity: 1;
  pointer-events: auto;
}
.back-to-top:hover {
  transform: translateY(-3px);
  background: linear-gradient(135deg, #5b0fb6, #1f5fd6);
}
.back-to-top .fa-solid {
  font-size: 24px;
}
`;
document.head.appendChild(style);

// Show/hide on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

// Smooth scroll on click
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
