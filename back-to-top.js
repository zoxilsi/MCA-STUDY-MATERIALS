const backToTopButton = document.createElement("button");
backToTopButton.className = "back-to-top";
backToTopButton.innerHTML = '<i class="fa-solid fa-circle-up"></i>';
document.body.appendChild(backToTopButton);

const style = document.createElement("style");
style.textContent = `
.back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: linear-gradient(135deg, #6a11cb, #2575fc); /* Matches site theme */
    color: white;
    border: none;
    width: 55px;
    height: 55px;
    border-radius: 14px; /* Same rounded card style */
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out, background 0.3s;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 9999;
    font-size: 20px;
}
.back-to-top.visible { opacity: 1; }
.back-to-top:hover { 
    transform: translateY(-3px);
    background: linear-gradient(135deg, #5b0fb6, #1f5fd6); /* Slightly darker hover */
}
.back-to-top .fa-solid { font-size: 24px; }
`;
document.head.appendChild(style);

const toggleVisibility = () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
};

window.addEventListener("scroll", toggleVisibility);

backToTopButton.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: "smooth"});
});
