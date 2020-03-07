const navLinks = document.querySelectorAll(".nav-item");

const toggleNavLinks = active => {
  navLinks.forEach(link => {
    link.classList.remove("active");
  });
  active.classList.add("active");
};

navLinks.forEach(link => {
  link.addEventListener("click", event => {
    toggleNavLinks(event.target);
  });
});
